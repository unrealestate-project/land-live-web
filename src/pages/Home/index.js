import loadable from '@loadable/component';
import { useLocation } from 'react-router-dom';
import BookContent from '../../content/BookContent.json';
import Intro1Content from '../../content/Intro1Content.json';
import Intro2Content from '../../content/Intro2Content.json';
import Step1BookContent from '../../content/Step1BookContent.json';
import Step2ConfirmContent from '../../content/Step2ConfirmContent.json';
import Step3DoneContent from '../../content/Step3DoneContent.json';

const BookForm = loadable(() => import('../../components/BookForm'));
const ContentBlock = loadable(() => import('../../components/ContentBlock'));
const MiddleBlock = loadable(() => import('../../components/MiddleBlock'));
const Container = loadable(() => import('../../common/Container'));
const ScrollToTop = loadable(() => import('../../common/ScrollToTop'));

const Home = () => {
  const location = useLocation();
  const realEstateId = location.hash.replace('#/', '');
  return (
    <Container>
      <ScrollToTop />
      {/* Only show this block when URL accessed with <SITE_URL>/#/<realEstateId> */}
      {realEstateId && (
        <BookForm
          titles={BookContent.titles}
          content={BookContent.text}
          id="book"
          realEstateId={realEstateId}
        />
      )}
      <ContentBlock
        type="right"
        first="true"
        title={Intro1Content.title}
        content={Intro1Content.text}
        button={Intro1Content.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock title={Intro2Content.title} content={Intro2Content.text} />
      {/* Videos */}
      {/* <VideoBlock /> */}
      <ContentBlock
        type="left"
        title={Step1BookContent.title}
        content={Step1BookContent.text}
        section={Step1BookContent.section}
        icon="graphs.svg"
        id="step"
      />
      <ContentBlock
        type="right"
        title={Step2ConfirmContent.title}
        content={Step2ConfirmContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={Step3DoneContent.title}
        content={Step3DoneContent.text}
        icon="waving.svg"
        id="product"
      />
    </Container>
  );
};

export default Home;
