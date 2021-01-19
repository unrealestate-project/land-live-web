import loadable from '@loadable/component';
import { Col, Row } from 'antd';
import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { Fade } from 'react-reveal';
import * as S from './styles';

const SvgIcon = loadable(() => import('../../common/SvgIcon'));
const Container = loadable(() => import('../../common/Container'));

const Footer = ({ t }) => {
  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col>
                <S.NavLink to="/">
                  <S.LogoContainer>
                    <SvgIcon src="landcorp_logo.svg" aria-label="homepage" />
                  </S.LogoContainer>
                </S.NavLink>
              </Col>
              <Col lg={5} md={10} sm={12} xs={24}>
                <S.Language>{t('Contact')}</S.Language>
                <S.Para>{'© 2021 Land Corporation, Inc.'}</S.Para>
                <S.Para>{'Email: jin@landcorp.io'}</S.Para>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra></S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
