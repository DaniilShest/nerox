import dynamic from 'next/dynamic';
import AboutMain from '../components/About'
import SEO from '../components/seo';

const About = () => {
  return (
    <>
      <SEO pageTitle="О нас" />
      <AboutMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });