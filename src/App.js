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

import TeamSection from './Components/TeamSection';
import { IoIosArrowUp } from 'react-icons/io';
import { Route, Routes } from 'react-router-dom';

function App() {
  const x = 0;
  const y = -2;
  return (
    <>
      <ScrollToTop
        smooth
        top={150}
        width="40"
        height="40"
        component={
          <IoIosArrowUp
            style={{
              transform: `translate(${x}px,${y}px)`,
            }}
          />
        }
        style={{
          backgroundColor: '#28192b',
          border: '2px solid rgba(255,255,255,0.8)',
          fontSize: '2.2rem',
          color: '#fff',
          borderRadius: '50%',
          zIndex: '100000',
        }}
      />

      {/* <AboutUs />
      <Events />
      <TimeLine />
      <Sponsors />
      <Workshop />
      <MentorTalks />

      <Faq />
      <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/team" element={<TeamSection />}></Route>
      </Routes>
    </>
  );
}

export default App;
