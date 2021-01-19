import loadable from '@loadable/component';
import { Col, Drawer, Row } from 'antd';
import React, { Fragment, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import * as S from './styles';

const SvgIcon = loadable(() => import('../../common/SvgIcon'));
const Button = loadable(() => import('../../common/Button'));

const Header = ({ t }) => {
  const location = useLocation();
  const roomId = location.hash.replace('#/', '');

  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: 'smooth',
      });
      setVisibility(false);
    };
    return (
      <Fragment>
        <S.CustomNavLinkSmall style={{ width: '180px' }} onClick={() => scrollTo('contact')}>
          {roomId && (
            <S.Span>
              <S.Span>{t('To arrange Live+ tour..')}</S.Span>
              <Button>{t('Book here! 🤙 ')}</Button>
            </S.Span>
          )}
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" />
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: '2.5rem' }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
