import loadable from '@loadable/component';
import { Col, Drawer, Row } from 'antd';
import React, { Fragment, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import * as S from './styles';
import i18n from 'i18next';
const SvgIcon = loadable(() => import('../../common/SvgIcon'));

const handleChange = (event) => {
  i18n.changeLanguage(event.target.value);
};

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
        {roomId && (
          <S.CustomNavLinkSmall onClick={() => scrollTo('book')}>
            <S.Span>
              <S.Span>{t('Book!')}</S.Span>
            </S.Span>
          </S.CustomNavLinkSmall>
        )}
        <S.CustomNavLinkSmall onClick={() => scrollTo('intro')}>
          <S.Span>{t('land LIVE+?')}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo('step')}>
          <S.Span>{t('How it works?')}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall
          style={{ width: '30px' }}
          onClick={() => scrollTo('contact')}
        ></S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall>
          <S.LangSelect onChange={handleChange} value={i18n.language} id="select-lang">
            <option value="en">English</option>
            <option value="es">Español</option>
          </S.LangSelect>
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
