import loadable from '@loadable/component';
import React from 'react';
import { useLocation } from 'react-router-dom';
import AboutContent from '../../content/AboutContent.json';
import ContactContent from '../../content/ContactContent.json';
import IntroContent from '../../content/IntroContent.json';
import MiddleBlockContent from '../../content/MiddleBlockContent.json';
import MissionContent from '../../content/MissionContent.json';
import ProductContent from '../../content/ProductContent.json';

const ContactFrom = loadable(() => import('../../components/ContactForm'));
const ContentBlock = loadable(() => import('../../components/ContentBlock'));
const MiddleBlock = loadable(() => import('../../components/MiddleBlock'));
const Container = loadable(() => import('../../common/Container'));
const ScrollToTop = loadable(() => import('../../common/ScrollToTop'));

const Home = () => {
  const location = useLocation();
  const roomId = location.hash.replace('#/', '');
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock title={MiddleBlockContent.title} content={MiddleBlockContent.text} />

      {/* TODO(@jin) Insert 2 video clips  */}

      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />

      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      {roomId && (
        <ContactFrom title={ContactContent.title} content={ContactContent.text} id="contact" />
      )}
    </Container>
  );
};

export default Home;
