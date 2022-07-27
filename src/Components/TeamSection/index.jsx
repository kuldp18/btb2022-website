import React from 'react';
import '../../Styles/TeamSection.css';
import SampleImage from '../../require_images/team-profile-sample.png';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

const TeamSection = () => {
  return (
    <>
      <Navbar makeSticky={false} hideLinks />
      <h1 className="stylish-title" id="team-section">
        Meet the Team
      </h1>
      <section className="team-section">
        <div className="teams-container">
          <div className="team-grid">
            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/jayshah-in/"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/JayShah_outreach.jpeg')}
                    alt="Jay Shah"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Jay Shah</h1>
                <h4 className="profile-about-description">
                  Event Head | Outreach Lead
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a href="https://www.linkedin.com/in/vyomzc" target={'_blank'}>
                  <img
                    src={require('./team-raw-images/VyomChaudhari_Outreach.jpeg')}
                    alt="Vyom Chaudhari"
                    className="profile-image adjust-right-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Vyom Chaudhari</h1>
                <h4 className="profile-about-description">Event Lead</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/shlok-patel-b805541a2/"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/Shlok_logistics.jpg')}
                    alt="Shlok Patel"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Shlok Patel</h1>
                <h4 className="profile-about-description">Logistics Lead</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/keyurchaniyara"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/KeyurChaniyara_WebDev.jpg')}
                    alt="Keyur Chaniyara"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Keyur Chaniyara</h1>
                <h4 className="profile-about-description">Webdev Lead</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/omdevsinh-zala-33a4bb21a"
                  target={'_blank'}
                >
                  <img
                    alt="Omdevsinh Zala"
                    className="profile-image"
                    src={require('./team-raw-images/OmdevsinhZala_Design.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Omdevsinh Zala</h1>
                <h4 className="profile-about-description">Design Lead</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/krupesh-raval-416a5423b"
                  target={'_blank'}
                >
                  <img
                    alt="Krupesh Raval"
                    className="profile-image"
                    src={require('./team-raw-images/RavalKrupesh_ContentWriting.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Krupesh Raval</h1>
                <h4 className="profile-about-description">
                  Content Writing Lead
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/vikaspal1704/"
                  target={'_blank'}
                >
                  <img
                    alt="Vikas Pal"
                    className="profile-image"
                    src={require('./team-raw-images/Vikas_Pal_CommunityEngagement.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Vikas Pal</h1>
                <h4 className="profile-about-description">
                  Community Engagement Lead
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/vandangohil/"
                  target={'_blank'}
                >
                  <img
                    alt="Vandan Gohil"
                    className="profile-image adjust-right-image"
                    src={require('./team-raw-images/VandanGohil_Design.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Vandan Gohil</h1>
                <h4 className="profile-about-description">UI/UX</h4>
              </div>
            </div>

            {/* web dev team start */}
            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/harshil-modh-53a62a1a6/"
                  target={'_blank'}
                >
                  <img
                    alt="Harshil Modh"
                    className="profile-image"
                    src={require('./team-raw-images/HarshilModh_WebDev.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Harshil Modh</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/ksolanki8/"
                  target={'_blank'}
                >
                  <img
                    alt="Kuldeep Solanki"
                    className="profile-image"
                    src={require('./team-raw-images/KuldeepSolanki_webdev.png')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Kuldeep Solanki</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/harshilsinh-rajput/"
                  target={'_blank'}
                >
                  <img
                    alt="Harshilsinh Rajput"
                    className="profile-image"
                    src={require('./team-raw-images/Rajput Harshilsinh_Web development.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Harshilsinh Rajput</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/yatreeladani"
                  target={'_blank'}
                >
                  <img
                    alt="Yatree Ladani"
                    className="profile-image"
                    src={require('./team-raw-images/YatreeLadani_WebDev.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Yatree Ladani</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/prachijethava"
                  target={'_blank'}
                >
                  <img
                    alt="Prachi Jethava"
                    className="profile-image"
                    src={require('./team-raw-images/PrachiJethava_WebDev.jpeg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Prachi Jethava</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="http://www.linkedin.com/in/yash-hindocha"
                  target={'_blank'}
                >
                  <img
                    alt="Yash Hindocha"
                    className="profile-image"
                    src={require('./team-raw-images/Yash Hindocha_webDev.jpeg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Yash Hindocha</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>
            <div className="team-profile-card">
              <div className="profile-image-container">
                <a href="#" target={'_blank'}>
                  <img
                    alt="Vatsal Mavani"
                    className="profile-image adjust-right-image"
                    src={require('./team-raw-images/Vatsal mavani.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Vatsal Mavani</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>
            <div className="team-profile-card">
              <div className="profile-image-container">
                <a href="#" target={'_blank'}>
                  <img
                    alt="Ved Prajapati"
                    className="profile-image"
                    src={require('./team-raw-images/Ved Prajapati.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Ved Prajapati</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>
            {/* web dev team end */}

            {/* design team start */}

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/hasti-bhalodiya-274585232/"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/HastiBhalodiya_DesignTeam.jpg')}
                    alt="Hasti Bhalodiya"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Hasti Bhalodiya</h1>
                <h4 className="profile-about-description">Team Design</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a href="#" target={'_blank'}>
                  <img
                    src={require('./team-raw-images/VrushikMehta_Design.jpg')}
                    alt="Vrushik Mehta"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Vrushik Mehta</h1>
                <h4 className="profile-about-description">Team Design</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/dishant-korat-297246228"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/Korat Dishant _ design.jpg')}
                    alt="Korat Dishant"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Korat Dishant</h1>
                <h4 className="profile-about-description">Team Design</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/rayirthjaiswal"
                  target={'_blank'}
                >
                  <img
                    alt="Rayirth Jaiswal"
                    className="profile-image"
                    src={require('./team-raw-images/RayirthJaiswal_Design.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Rayirth Jaiswal</h1>
                <h4 className="profile-about-description">Team Design</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/dhyey-patel-177345155"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/DhyeyPatel_graphicteam.jpg')}
                    alt="Dhyey Patel"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Dhyey Patel</h1>
                <h4 className="profile-about-description">Team Design</h4>
              </div>
            </div>
            {/* team design end */}

            {/* outreach team */}

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a href="#" target={'_blank'}>
                  <img
                    src={require('./team-raw-images/MehtaJainam_OutreachCoreTeam.jpeg')}
                    alt="Jainam Mehta"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Jainam Mehta</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/oveskhan-pathan-a78933235"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/Oveskhan Pathan_outreach.jpg')}
                    alt="Oveskhan Pathan"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Oveskhan Pathan</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/nandini-gohel/"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/NandiniGohel_WebDev.jpeg')}
                    alt="Nandini Gohel"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Nandini Gohel</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/nischay-agrawal-30b063122"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/Nischay Agrawal_Outreach.JPG')}
                    alt="Nischay Agrawal"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Nischay Agrawal</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/aakash-maurya-181o"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/AakashMaurya_OutreachCoreTeam.jpeg')}
                    alt="Aakash Maurya"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Aakash Maurya</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a href="#" target={'_blank'}>
                  <img
                    src={require('./team-raw-images/ChitraTrivedi_OutreachCoreTeam.jpg')}
                    alt="Chitra Trivedi"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Chitra Trivedi</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/devpatel8318"
                  target={'_blank'}
                >
                  <img
                    alt="Dev Patel"
                    className="profile-image adjust-right-image"
                    src={require('./team-raw-images/DevPatel_OutReach.PNG')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Dev Patel</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/madhvesh-kanjariya-20a029212/"
                  target={'_blank'}
                >
                  <img
                    alt="Madhvesh Kanjariya"
                    className="profile-image"
                    src={require('./team-raw-images/MadhveshKanjariya_OutreachCoreTeam.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Madhvesh Kanjariya</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="http://linkedin.com/in/nikhil-parikh-he-him-64ba771aa"
                  target={'_blank'}
                >
                  <img
                    alt="Nikhil Parikh"
                    className="profile-image"
                    src={require('./team-raw-images/Nikhil Parikh_Outreach.JPG')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Nikhil Parikh</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            {/* outreach end */}

            {/* logistics team*/}
            <div className="team-profile-card">
              <div className="profile-image-container">
                <a href="#" target={'_blank'}>
                  <img
                    src={require('./team-raw-images/AshutoshJaiswal_Logistics.jpg')}
                    alt="Ashutosh Jaiswal"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Ashutosh Jaiswal</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/shyamsagothia/"
                  target={'_blank'}
                >
                  <img
                    alt="Shyam Sagothia"
                    className="profile-image"
                    src={require('./team-raw-images/ShyamSagothia_Logistics.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Shyam Sagothia</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a href="#" target={'_blank'}>
                  <img
                    src={require('./team-raw-images/SanjayKriplani_Logistics.jpg')}
                    alt="Sanjay Kriplani"
                    className="profile-image adjust-right-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Sanjay Kriplani</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/pushti-shah-81854b213"
                  target={'_blank'}
                >
                  <img
                    alt="Pushti Shah"
                    className="profile-image"
                    src={require('./team-raw-images/PushtiShah_Logistics.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Pushti Shah</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/aditya-nilesh-thakar-1821851b4"
                  target={'_blank'}
                >
                  <img
                    alt="Aditya Thakar"
                    className="profile-image"
                    src={require('./team-raw-images/AdityaThakar_Logistics.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Aditya Thakar</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/janviprajapati"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/Janviprajapati_logistic.jpg')}
                    alt="Janvi Prajapati"
                    className="profile-image adjust-right-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Janvi Prajapati</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/manav-rijwani-779756237"
                  target={'_blank'}
                >
                  <img
                    alt="Manav Rijwani"
                    className="profile-image"
                    src={require('./team-raw-images/ManavRijwani_Logistics.jpeg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Manav Rijwani</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/nirav-panchal-71a863210/"
                  target={'_blank'}
                >
                  <img
                    alt="Nirav Panchal"
                    className="profile-image"
                    src={require('./team-raw-images/NiravPanchal_Logistics.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Nirav Panchal</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/pranshu-pancholi-20861b207"
                  target={'_blank'}
                >
                  <img
                    alt="Pranshu Pancholi"
                    className="profile-image"
                    src={require('./team-raw-images/PranshuPancholi_Logistics.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Pranshu Pancholi</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/vaidehikayastha"
                  target={'_blank'}
                >
                  <img
                    alt="Vaidehi Kayastha"
                    className="profile-image"
                    src={require('./team-raw-images/VaidehiKayastha_LogisticsTeam.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Vaidehi Kayastha</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            {/* logitics end */}

            {/* content writing team */}

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/riya-sonara-607797213"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/RiyaSonara_ContentWriting.jpg')}
                    alt="Riya Sonara"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Riya Sonara</h1>
                <h4 className="profile-about-description">
                  Team Contentwriting
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/dhruvik-gondaliya-143ab923b"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/DhruvikGondaliya_ContentWriting.jpg')}
                    alt="Dhruvik Gondaliya"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Dhruvik Gondaliya</h1>
                <h4 className="profile-about-description">
                  Team Contentwriting
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/stack-dhruv"
                  target={'_blank'}
                >
                  <img
                    alt="Dhruvkumar Patel"
                    className="profile-image"
                    src={require('./team-raw-images/DhruvkumarPatel_ContentWriting.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Dhruvkumar Patel</h1>
                <h4 className="profile-about-description">
                  Team Contentwriting
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/khushbookolhe8/"
                  target={'_blank'}
                >
                  <img
                    alt="Khushboo Kolhe"
                    className="profile-image"
                    src={require('./team-raw-images/KhushbooKolhe_ContentWriting.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Khushboo Kolhe</h1>
                <h4 className="profile-about-description">
                  Team Contentwriting
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/pragat-kholia-5132b2220"
                  target={'_blank'}
                >
                  <img
                    alt="Pragat Kholia"
                    className="profile-image"
                    src={require('./team-raw-images/PragatKholia_ContentWriting.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Pragat Kholia</h1>
                <h4 className="profile-about-description">
                  Team Contentwriting
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/dhruvi-vaghela/"
                  target={'_blank'}
                >
                  <img
                    alt="Vaghela Dhruvi"
                    className="profile-image"
                    src={require('./team-raw-images/VaghelaDhruvi_ContentWriting.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Vaghela Dhruvi</h1>
                <h4 className="profile-about-description">
                  Team Contentwriting
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/yagni-shah-016b4323b"
                  target={'_blank'}
                >
                  <img
                    alt="Yagni Shah"
                    className="profile-image"
                    src={require('./team-raw-images/YagniShah_ContentWriting.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Yagni Shah</h1>
                <h4 className="profile-about-description">
                  Team Contentwriting
                </h4>
              </div>
            </div>

            {/* community engagement team */}

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/aayush-patel-89a468229"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/AayushPatel_CommunityEngagement.jpg')}
                    alt="Aayush Patel"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Aayush Patel</h1>
                <h4 className="profile-about-description">
                  Team Community Engagement
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/diya-shah-977260188/"
                  target={'_blank'}
                >
                  <img
                    src={require('./team-raw-images/Diya shah_Community Engagement.jpg')}
                    alt="Diya Shah"
                    className="profile-image"
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1
                  className="profile-about-name"
                  style={{ fontSize: '1.4rem' }}
                >
                  Diya Shah
                </h1>
                <h4 className="profile-about-description">
                  Team Community Engagement
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/shreyas-jain-2a00a51ab"
                  target={'_blank'}
                >
                  <img
                    alt="Jain Shreyas"
                    className="profile-image"
                    src={require('./team-raw-images/JainShreyasSunilkumar_CommunityEngagement.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Jain Shreyas</h1>
                <h4 className="profile-about-description">
                  Team Community Engagement
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/karina-mehta-561292207"
                  target={'_blank'}
                >
                  <img
                    alt="Karina Vaishali Mehta"
                    className="profile-image"
                    src={require('./team-raw-images/Karina Vaishali Mehta_CommunityEngagement.PNG')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Karina Vaishali Mehta</h1>
                <h4 className="profile-about-description">
                  Team Community Engagement
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/krishna-patel-3b991620b"
                  target={'_blank'}
                >
                  <img
                    alt="Krishna Patel"
                    className="profile-image"
                    src={require('./team-raw-images/KrishnaPatel_CommunityEngagement.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Krishna Patel</h1>
                <h4 className="profile-about-description">
                  Team Community Engagement
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/vora-parth"
                  target={'_blank'}
                >
                  <img
                    alt="Parth Vora"
                    className="profile-image"
                    src={require('./team-raw-images/ParthVora_CommunityEngagement.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Parth Vora</h1>
                <h4 className="profile-about-description">
                  Team Community Engagement
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/nijal-patel-73a98b213"
                  target={'_blank'}
                >
                  <img
                    alt="Patel Nijal"
                    className="profile-image"
                    src={require('./team-raw-images/PatelNijal_CommunityEngagement.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Patel Nijal</h1>
                <h4 className="profile-about-description">
                  Team Community Engagement
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/sarthak-jadav-8723581a1"
                  target={'_blank'}
                >
                  <img
                    alt="Sarthak Jadav"
                    className="profile-image"
                    src={require('./team-raw-images/Sarthakjadav_CommunityEngagement.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Sarthak Jadav</h1>
                <h4 className="profile-about-description">
                  Team Community Engagement
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/siddhant-gandhi-69150b173"
                  target={'_blank'}
                >
                  <img
                    alt="Siddhant Gandhi"
                    className="profile-image"
                    src={require('./team-raw-images/Siddhant Gandhi_Community Engagement.jpg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Siddhant Gandhi</h1>
                <h4 className="profile-about-description">
                  Team Community Engagement
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <a
                  href="https://www.linkedin.com/in/viral-gajjar-a75913240"
                  target={'_blank'}
                >
                  <img
                    alt="Viral Gajjar"
                    className="profile-image"
                    src={require('./team-raw-images/Gajjar Viral Kirankumar_CommunityEngagement .jpeg')}
                  />
                </a>
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Viral Gajjar</h1>
                <h4 className="profile-about-description">
                  Team Community Engagement
                </h4>
              </div>
            </div>
            {/* community team end */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TeamSection;
