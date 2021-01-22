import { Col, Row } from 'antd';
import React from 'react';
import { withTranslation } from 'react-i18next';
import ReactPlayer from 'react-player/lazy';

const VideoBlock = ({ t }) => {
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
