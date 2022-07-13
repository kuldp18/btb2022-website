import './App.css';
import '@fontsource/metropolis';
import { Home } from './Components/Home/Home';
import ScrollToTop from 'react-scroll-to-top';
import TeamSection from './Components/TeamSection';
import { IoIosArrowUp } from 'react-icons/io';
import { Route, Routes } from 'react-router-dom';
import WorkshopPage from './Components/WorkshopPage';
import workshops from './JSON/workshopNames.json';
const parse = require('html-react-parser');
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
        <Route path="*" element={<Home />}></Route>

        <Route
          path={workshops[0].slug}
          element={
            <WorkshopPage
              workShopTitle="Interaction Workshop"
              workShopDetails="Q/A on How to CRACK Product based COMPANIES."
              workShopDate="23/07/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Joban.png')}
              workShopTime="1PM TO 4PM"
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
              workShopTime="1PM to 4PM"
              imgPath={require('./require_images/Workshop-Ankit.png')}
            />
          }
        ></Route>
        <Route
          path={workshops[2].slug}
          element={
            <WorkshopPage
              workShopTitle="Design Workshop"
              workShopDetails="Introduction to Product Management - Who is a Product Manager, required skillset, how to find a PM job & how to become a stellar Product Manager."
              workShopDate="02/07/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Shravan.png')}
              workShopTime="1PM TO 4PM"
            />
          }
        ></Route>
        <Route
          path={workshops[3].slug}
          element={
            <WorkshopPage
              workShopTitle="Data Engineering Workshop"
              workShopDetails="11/06/2022 - Data Engineering & Data Science,
              12/06/2022 - SnowFlake"
              workShopDate="11/06/2022 & 12/06/2022"
              workShopLink="Coming Soon"
              workShopTime="5PM Onwards"
              imgPath={require('./require_images/Workshop-Rahul.png')}
            />
          }
        ></Route>
        <Route
          path={workshops[4].slug}
          element={
            <WorkshopPage
              workShopTitle="Motion Design Workshop"
              workShopDetails=""
              workShopDate="12/06/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Atul.png')}
              workShopTime="1PM TO 4PM"
            />
          }
        ></Route>
        <Route
          path={workshops[5].slug}
          element={
            <WorkshopPage
              workShopTitle="Blockchain Workshop"
              workShopDetails=""
              workShopDate="16/07/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-tanay.png')}
              workShopTime="1PM TO 4PM"
            />
          }
        ></Route>
        <Route
          path={workshops[6].slug}
          element={
            <WorkshopPage
              workShopTitle="Resume Building Workshop"
              workShopDetails=""
              workShopDate="17/07/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Prince.png')}
              workShopTime="1PM TO 4PM"
            />
          }
        ></Route>
        <Route
          path={workshops[7].slug}
          element={
            <WorkshopPage
              workShopTitle="Backend Development Workshop"
              workShopDetails=""
              workShopDate="24/07/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Sunil.png')}
              workShopTime="1PM TO 4PM"
            />
          }
        ></Route>
        <Route
          path={workshops[8].slug}
          element={
            <WorkshopPage
              workShopTitle="APIs 101 with POSTMAN"
              workShopDetails=""
              workShopDate="30/07/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Ali.png')}
              workShopTime="1PM TO 4PM"
            />
          }
        ></Route>

        <Route
          path={workshops[9].slug}
          element={
            <WorkshopPage
              workShopTitle="Getting Started with FIGMA"
              workShopDetails=""
              workShopDate="30/06/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Luis.png')}
              workShopTime="4PM TO 5PM"
            />
          }
        ></Route>

        <Route
          path={workshops[10].slug}
          element={
            <WorkshopPage
              workShopTitle={workshops[10].name}
              workShopDetails=""
              workShopDate="09/07/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Luis.png')}
              workShopTime="9:30 AM TO 12:00 PM"
            />
          }
        ></Route>

        <Route
          path={workshops[11].slug}
          element={
            <WorkshopPage
              workShopTitle={workshops[11].name}
              workShopDetails=""
              workShopDate="23/07/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Luis.png')}
              workShopTime="5:30 PM ONWARDS"
            />
          }
        ></Route>

        <Route
          path={workshops[12].slug}
          element={
            <WorkshopPage
              workShopTitle={workshops[12].name}
              workShopDetails=""
              workShopDate="31/07/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Luis.png')}
              workShopTime="1PM TO 4PM"
            />
          }
        ></Route>

        <Route
          path={workshops[13].slug}
          element={
            <WorkshopPage
              workShopTitle={workshops[13].name}
              workShopDetails=""
              workShopDate="06/08/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Luis.png')}
              workShopTime="1PM TO 4PM"
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
