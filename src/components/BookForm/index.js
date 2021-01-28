import loadable from '@loadable/component';
import { Card, Col, Row } from 'antd';
import axios from 'axios';
import i18n from 'i18next';
import React, { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import Zoom from 'react-reveal/Zoom';
import { SERVER_BASE_URL } from '../../infra/constants';
import * as S from './styles';
import useForm from './useForm';
import validate from './validationRules';

const moment = require('moment');
const Block = loadable(() => import('../Block'));
const Input = loadable(() => import('../../common/Input'));
const Button = loadable(() => import('../../common/Button'));

function processDateTime(streaming_date) {
  const titleDateFormat = i18n.language === 'en' ? 'YYYY-MM-DD' : 'YYYY년 MM월 DD일';
  const contentTimeFormat = i18n.language === 'en' ? 'HH:mm' : 'HH시 mm분';

  var localDate = new Date(streaming_date);
  const startDate = localDate.toLocaleString();

  const title = moment(startDate).format(titleDateFormat);
  const content = moment(startDate).format(contentTimeFormat);
  return { title, content };
}

// eslint-disable-next-line
const FetchToursList = (url, t) => {
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await axios.get(url);
        const { data } = res;
        if (data) {
          setTours(data.tours);
        }
      } catch (err) {
        console.log(err);
      }
    };
    callApi();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="site-card-wrapper">
      <label htmlFor="bookCard">{t('Tour Schedule')}</label>
      <Row gutter={16}>
        {tours.map(({ streaming_date, streaming_duration_min }) => {
          const { title, content } = processDateTime(streaming_date, streaming_duration_min);
          return (
            <Col span={8}>
              <Card bordered={true} align="center" bodyStyle={{ backgroundColor: '#f0f0f0' }}>
                <strong>{title}</strong>
                <p>{content}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

const Book = ({ titles, content, id, t, realEstateId }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate, t);
  const url = `${SERVER_BASE_URL}/booking/real_estates/${realEstateId}/tours`;

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? (
      <Zoom cascade>
        <S.Span>{ErrorMessage}</S.Span>
      </Zoom>
    ) : (
      <S.Span />
    );
  };

  return (
    <S.BookContainer id={id}>
      <S.Book>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24}>
            <Block padding={true} title={titles[0]} />
            <Block padding={true} title={titles[1]} content={content} />
          </Col>
          <Col lg={12} md={12} sm={24}>
            <S.FormGroup autoComplete="off" onSubmit={(e) => handleSubmit(e, url)}>
              <Col span={24}>
                <ValidationType type="kakaotalk_id" />
                <Input
                  type="text"
                  name="kakaotalk_id"
                  id={t('KakaoTalk ID')}
                  placeholder={t('Please type your KakaoTalk ID!')}
                  value={values.kakaotalk_id || ''}
                  onChange={handleChange}
                />
              </Col>

              {/* We decided not pre-arrange tour schedule */}
              {/* <Col>{FetchToursList(url, t)}</Col> */}

              <S.ButtonContainer>
                <Button name="submit" type="submit">
                  {t('Book')}
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          </Col>
        </Row>
      </S.Book>
    </S.BookContainer>
  );
};

export default withTranslation()(Book);
