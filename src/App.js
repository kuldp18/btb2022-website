import './App.css';
import '@fontsource/metropolis';
import { Home } from './Components/Home/Home';
import ScrollToTop from 'react-scroll-to-top';
import TeamSection from './Components/TeamSection';
import { IoIosArrowUp } from 'react-icons/io';
import { Route, Routes } from 'react-router-dom';
import WorkshopPage from './Components/WorkshopPage';
import MentorTalkPage from './Components/MentorTalkPage';
import workshops from './JSON/workshopNames.json';
import mentorTalks from './JSON/mentorTalks.json';

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
              completed={true}
              ytLink="https://youtu.be/5yv3L4oPUJM"
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
              completed={true}
              ytLink="https://youtu.be/KaZynOQvhPM"
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
              completed={true}
              ytLink="https://youtu.be/LdfvvJovVac"
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
              completed={true}
              ytLink="https://youtu.be/aejNnGMVZfg"
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
              completed={true}
              ytLink="https://youtu.be/pbXMCSrpRlk"
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
              imgPath={require('./require_images/Workshop-Wesley.png')}
              workShopTime="9:30 AM TO 12:00 PM"
              completed={true}
              ytLink="https://youtu.be/HFtEypXpoaY"
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
              imgPath={require('./require_images/Workshop-Nikhil.png')}
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
              imgPath={require('./require_images/Workshop-Khush.png')}
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
              imgPath={require('./require_images/Workshop-Saborni.png')}
              workShopTime="1PM TO 4PM"
            />
          }
        ></Route>

        <Route
          path={workshops[14].slug}
          element={
            <WorkshopPage
              workShopTitle={workshops[14].name}
              workShopDetails=""
              workShopDate="05/08/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-longnames.png')}
              workShopTime="12PM TO 1PM"
            />
          }
        ></Route>

        <Route
          path={workshops[15].slug}
          element={
            <WorkshopPage
              workShopTitle={workshops[15].name}
              workShopDetails=""
              workShopDate="07/08/2022"
              workShopLink="Coming Soon"
              imgPath={require('./require_images/Workshop-Ishika.png')}
              workShopTime="3PM TO 5PM"
            />
          }
        ></Route>

        {/* mentor talks */}
        <Route
          path={mentorTalks[0].slug}
          element={
            <MentorTalkPage
              talkTitle={mentorTalks[0].name}
              talkDetails={mentorTalks[0].details}
              talkDate={mentorTalks[0].date}
              talkLink={mentorTalks[0].talkLink}
              imgPath={mentorTalks[0].viewDetailsImage}
              talkTime={mentorTalks[0].time}
            />
          }
        ></Route>
        <Route
          path={mentorTalks[1].slug}
          element={
            <MentorTalkPage
              talkTitle={mentorTalks[1].name}
              talkDetails={mentorTalks[1].details}
              talkDate={mentorTalks[1].date}
              talkLink={mentorTalks[1].talkLink}
              imgPath={mentorTalks[1].viewDetailsImage}
              talkTime={mentorTalks[1].time}
            />
          }
        ></Route>
        <Route
          path={mentorTalks[2].slug}
          element={
            <MentorTalkPage
              talkTitle={mentorTalks[2].name}
              talkDetails={mentorTalks[2].details}
              talkDate={mentorTalks[2].date}
              talkLink={mentorTalks[2].talkLink}
              imgPath={mentorTalks[2].viewDetailsImage}
              talkTime={mentorTalks[2].time}
            />
          }
        ></Route>
        <Route
          path={mentorTalks[3].slug}
          element={
            <MentorTalkPage
              talkTitle={mentorTalks[3].name}
              talkDetails={mentorTalks[3].details}
              talkDate={mentorTalks[3].date}
              talkLink={mentorTalks[3].talkLink}
              imgPath={mentorTalks[3].viewDetailsImage}
              talkTime={mentorTalks[3].time}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
