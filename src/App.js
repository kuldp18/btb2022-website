import './App.css';
import Events from './Components/Events/Events';
import TimeLine from './Components/TimeLine/TimeLine';
import { AboutUs } from './Components/AboutUs/AboutUs';
import '@fontsource/metropolis';
import { Footer } from './Components/Footer/Footer';
import { Faq } from './Components/Faq/Faq';
import { Home } from './Components/Home/Home';
import Sponsors from './Components/Sponsors/Sponsors';
import ScrollToTop from 'react-scroll-to-top';
import Workshop from './Components/Workshop';
import MentorTalks from './Components/MentorTalks';

function App() {
  return (
    <>
      <ScrollToTop
        smooth
        color="#e12f26"
        top={150}
        width="30"
        height="30"
        style={{
          backgroundColor: '#21192b',
          border: '2px solid rgba(255,255,255,0.8)',
          borderRadius: '50%',
        }}
      />
      <Home />
      <AboutUs />
      <Events />
      <TimeLine />
      <Sponsors />
      <Workshop />
      <MentorTalks />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
