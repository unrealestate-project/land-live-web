import { Col, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import ReactPlayer from 'react-player/lazy';

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

const VideoBlock = ({ t }) => {
  const size = useWindowSize();
  if (size.width <= 450) {
    return (
      <>
        <Row gutter={[16, 16]}>
          <strong>{t('Before Land Live+ 😨')}</strong>
          <ReactPlayer url="https://youtu.be/ISff-JsOQAI" muted={true} playing={true} loop={true} />
        </Row>
        <Row gutter={[16, 16]}>
          <strong>{t('After Land LIVE+ 🤩')}</strong>
          <ReactPlayer url="https://youtu.be/mnZCP7GA5Gg" muted={true} playing={true} loop={true} />
        </Row>
      </>
    );
  }
  return (
    <Row gutter={[16, 16]}>
      <Col span={12} align="center">
        <strong>{t('Before Land Live+ 😨')}</strong>
        <ReactPlayer url="https://youtu.be/ISff-JsOQAI" muted={true} playing={true} loop={true} />
      </Col>
      <Col span={12} align="center">
        <strong>{t('After Land LIVE+ 🤩')}</strong>
        <ReactPlayer url="https://youtu.be/mnZCP7GA5Gg" muted={true} playing={true} loop={true} />
      </Col>
    </Row>
  );
};

export default withTranslation()(VideoBlock);
