import './App.css';
import Events from './Components/Events/Events';
import TimeLine from './Components/TimeLine/TimeLine';
import { AboutUs } from './Components/AboutUs/AboutUs';
import '@fontsource/metropolis';
import { Footer } from './Components/Footer/Footer';
import { Faq } from './Components/Faq/Faq';
import { Home } from './Components/Home/Home';
import Sponsors from './Components/Sponsors/Sponsors';

function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Events />
      <TimeLine />
      <Sponsors />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
