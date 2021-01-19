import loadable from '@loadable/component';
import { Col, Row } from 'antd';
import React from 'react';
import { withTranslation } from 'react-i18next';
import Zoom from 'react-reveal/Zoom';
import * as S from './styles';
import useForm from './useForm';
import validate from './validationRules';

const Block = loadable(() => import('../Block'));
const Input = loadable(() => import('../../common/Input'));
const Button = loadable(() => import('../../common/Button'));

const Book = ({ title, content, id, t }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

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
            <Block padding={true} title={title} content={content} />
          </Col>
          <Col lg={12} md={12} sm={24}>
            <S.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  id={t('KakaoTalk ID')}
                  placeholder={t('Please type your KakaoTalk ID!')}
                  value={values.name || ''}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <S.ButtonContainer>
                <Button name="submit" type="submit">
                  {t('Submit')}
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
