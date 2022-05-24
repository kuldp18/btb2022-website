import './App.css';
import '@fontsource/metropolis';
import { Home } from './Components/Home/Home';
import ScrollToTop from 'react-scroll-to-top';
import TeamSection from './Components/TeamSection';
import { IoIosArrowUp } from 'react-icons/io';
import { Route, Routes } from 'react-router-dom';
import WorkshopPage from './Components/WorkshopPage';
import workshops from './JSON/workshopNames.json';

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
        <Route
          path={workshops[0].slug}
          element={
            <WorkshopPage
              workShopTitle="Interaction Workshop"
              workShopDetails=""
              workShopDate="23/07/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Joban.png')}
            />
          }
        ></Route>
        <Route
          path={workshops[1].slug}
          element={
            <WorkshopPage
              workShopTitle="SQL Workshop"
              workShopDetails=""
              workShopDate="11/06/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Ankit.png')}
            />
          }
        ></Route>
        <Route
          path={workshops[2].slug}
          element={
            <WorkshopPage
              workShopTitle="Design Workshop"
              workShopDetails=""
              workShopDate="02/07/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Shravan.png')}
            />
          }
        ></Route>
        <Route
          path={workshops[3].slug}
          element={
            <WorkshopPage
              workShopTitle="Data Engineering Workshop"
              workShopDetails=""
              workShopDate="11/06/2022 & 12/06/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Rahul.png')}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
