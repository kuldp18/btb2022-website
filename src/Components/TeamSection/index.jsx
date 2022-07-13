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
            {/* Design Team */}

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/JayShah_outreach.jpeg')}
                  alt="Jay Shah"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Jay Shah</h1>
                <h4 className="profile-about-description">
                  Outreach Lead | Event Lead
                </h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/VyomChaudhari_Outreach.jpeg')}
                  alt="Vyom Chaudhari"
                  className="profile-image adjust-right-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Vyom Chaudhari</h1>
                <h4 className="profile-about-description">Event Lead</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/Shlok_logistics.jpg')}
                  alt="Shlok Patel"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Shlok Patel</h1>
                <h4 className="profile-about-description">Logistics Lead</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/KeyurChaniyara_WebDev.jpg')}
                  alt="Keyur Chaniyara"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Keyur Chaniyara</h1>
                <h4 className="profile-about-description">Webdev Lead</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Omdevsinh Zala"
                  className="profile-image"
                  src={require('./team-raw-images/OmdevsinhZala_Design.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Omdevsinh Zala</h1>
                <h4 className="profile-about-description">Design Lead</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Krupesh Raval"
                  className="profile-image"
                  src={require('./team-raw-images/RavalKrupesh_ContentWriting.jpg')}
                />
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
                <img
                  alt="Vikas Pal"
                  className="profile-image"
                  src={require('./team-raw-images/Vikas_Pal_CommunityEngagement.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Vikas Pal</h1>
                <h4 className="profile-about-description">
                  Community Engagement Lead
                </h4>
              </div>
            </div>

            {/* outreach team */}

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/MehtaJainam_OutreachCoreTeam.jpeg')}
                  alt="Jainam Mehta"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Jainam Mehta</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/Oveskhan Pathan_outreach.jpg')}
                  alt="Oveskhan Pathan"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Oveskhan Pathan</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/NandiniGohel_WebDev.jpeg')}
                  alt="Nandini Gohel"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Nandini Gohel</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/Nischay Agrawal_Outreach.JPG')}
                  alt="Nischay Agrawal"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Nischay Agrawal</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/AakashMaurya_OutreachCoreTeam.jpeg')}
                  alt="Aakash Maurya"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Aakash Maurya</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/ChitraTrivedi_OutreachCoreTeam.jpg')}
                  alt="Chitra Trivedi"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Chitra Trivedi</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Dev Patel"
                  className="profile-image adjust-right-image"
                  src={require('./team-raw-images/DevPatel_OutReach.PNG')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Dev Patel</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Madhvesh Kanjariya"
                  className="profile-image"
                  src={require('./team-raw-images/MadhveshKanjariya_OutreachCoreTeam.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Madhvesh Kanjariya</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Nikhil Parikh"
                  className="profile-image"
                  src={require('./team-raw-images/Nikhil Parikh_Outreach.JPG')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Nikhil Parikh</h1>
                <h4 className="profile-about-description">Team Outreach</h4>
              </div>
            </div>

            {/* logistics team*/}
            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/AshutoshJaiswal_Logistics.jpg')}
                  alt="Ashutosh Jaiswal"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Ashutosh Jaiswal</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Shyam Sagothia"
                  className="profile-image"
                  src={require('./team-raw-images/ShyamSagothia_Logistics.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Shyam Sagothia</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/SanjayKriplani_Logistics.jpg')}
                  alt="Sanjay Kriplani"
                  className="profile-image adjust-right-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Sanjay Kriplani</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Pushti Shah"
                  className="profile-image"
                  src={require('./team-raw-images/PushtiShah_Logistics.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Pushti Shah</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Aditya Thakar"
                  className="profile-image"
                  src={require('./team-raw-images/AdityaThakar_Logistics.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Aditya Thakar</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/Janviprajapati_logistic.jpg')}
                  alt="Janvi Prajapati"
                  className="profile-image adjust-right-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Janvi Prajapati</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Manav Rijwani"
                  className="profile-image"
                  src={require('./team-raw-images/ManavRijwani_Logistics.jpeg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Manav Rijwani</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Nirav Panchal"
                  className="profile-image"
                  src={require('./team-raw-images/NiravPanchal_Logistics.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Nirav Panchal</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Pranshu Pancholi"
                  className="profile-image"
                  src={require('./team-raw-images/PranshuPancholi_Logistics.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Pranshu Pancholi</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Vaidehi Kayastha"
                  className="profile-image"
                  src={require('./team-raw-images/VaidehiKayastha_LogisticsTeam.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Vaidehi Kayastha</h1>
                <h4 className="profile-about-description">Team Logistics</h4>
              </div>
            </div>

            {/* logitics end */}

            {/* web dev team start */}
            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Harshil Modh"
                  className="profile-image"
                  src={require('./team-raw-images/HarshilModh_WebDev.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Harshil Modh</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Kuldeep Solanki"
                  className="profile-image"
                  src={require('./team-raw-images/KuldeepSolanki_webdev.png')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Kuldeep Solanki</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Harshilsinh Rajput"
                  className="profile-image"
                  src={require('./team-raw-images/Rajput Harshilsinh_Web development.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Harshilsinh Rajput</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Yatree Ladani"
                  className="profile-image"
                  src={require('./team-raw-images/YatreeLadani_WebDev.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Yatree Ladani</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Prachi Jethava"
                  className="profile-image"
                  src={require('./team-raw-images/PrachiJethava_WebDev.jpeg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Prachi Jethava</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Yash Hindocha"
                  className="profile-image"
                  src={require('./team-raw-images/Yash Hindocha_webDev.jpeg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Yash Hindocha</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>
            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Vatsal Mavani"
                  className="profile-image adjust-right-image"
                  src={require('./team-raw-images/Vatsal mavani.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Vatsal Mavani</h1>
                <h4 className="profile-about-description">Team Webdev</h4>
              </div>
            </div>
            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Ved Prajapati"
                  className="profile-image"
                  src={require('./team-raw-images/Ved Prajapati.jpg')}
                />
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
                <img
                  alt="Vandan Gohil"
                  className="profile-image adjust-right-image"
                  src={require('./team-raw-images/VandanGohil_Design.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Vandan Gohil</h1>
                <h4 className="profile-about-description">UI/UX</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/HastiBhalodiya_DesignTeam.jpg')}
                  alt="Hasti Bhalodiya"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Hasti Bhalodiya</h1>
                <h4 className="profile-about-description">Team Design</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/VrushikMehta_Design.jpg')}
                  alt="Vrushik Mehta"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Vrushik Mehta</h1>
                <h4 className="profile-about-description">Team Design</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/Korat Dishant _ design.jpg')}
                  alt="Korat Dishant"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Korat Dishant</h1>
                <h4 className="profile-about-description">Team Design</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  alt="Rayirth Jaiswal"
                  className="profile-image"
                  src={require('./team-raw-images/RayirthJaiswal_Design.jpg')}
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Rayirth Jaiswal</h1>
                <h4 className="profile-about-description">Team Design</h4>
              </div>
            </div>

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/DhyeyPatel_graphicteam.jpg')}
                  alt="Dhyey Patel"
                  className="profile-image"
                />
              </div>
              <div className="profile-about-container">
                <h1 className="profile-about-name">Dhyey Patel</h1>
                <h4 className="profile-about-description">Team Design</h4>
              </div>
            </div>

            {/* content writing team */}

            <div className="team-profile-card">
              <div className="profile-image-container">
                <img
                  src={require('./team-raw-images/RiyaSonara_ContentWriting.jpg')}
                  alt="Riya Sonara"
                  className="profile-image"
                />
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
                <img
                  src={require('./team-raw-images/DhruvikGondaliya_ContentWriting.jpg')}
                  alt="Dhruvik Gondaliya"
                  className="profile-image"
                />
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
                <img
                  alt="Dhruvkumar Patel"
                  className="profile-image"
                  src={require('./team-raw-images/DhruvkumarPatel_ContentWriting.jpg')}
                />
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
                <img
                  alt="Khushboo Kolhe"
                  className="profile-image"
                  src={require('./team-raw-images/KhushbooKolhe_ContentWriting.jpg')}
                />
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
                <img
                  alt="Pragat Kholia"
                  className="profile-image"
                  src={require('./team-raw-images/PragatKholia_ContentWriting.jpg')}
                />
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
                <img
                  alt="Vaghela Dhruvi"
                  className="profile-image"
                  src={require('./team-raw-images/VaghelaDhruvi_ContentWriting.jpg')}
                />
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
                <img
                  alt="Yagni Shah"
                  className="profile-image"
                  src={require('./team-raw-images/YagniShah_ContentWriting.jpg')}
                />
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
                <img
                  src={require('./team-raw-images/AayushPatel_CommunityEngagement.jpg')}
                  alt="Aayush Patel"
                  className="profile-image"
                />
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
                <img
                  src={require('./team-raw-images/Diya shah_Community Engagement.jpg')}
                  alt="Diya Shah"
                  className="profile-image"
                />
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
                <img
                  alt="Jain Shreyas"
                  className="profile-image"
                  src={require('./team-raw-images/JainShreyasSunilkumar_CommunityEngagement.jpg')}
                />
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
                <img
                  alt="Karina Vaishali Mehta"
                  className="profile-image"
                  src={require('./team-raw-images/Karina Vaishali Mehta_CommunityEngagement.PNG')}
                />
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
                <img
                  alt="Krishna Patel"
                  className="profile-image"
                  src={require('./team-raw-images/KrishnaPatel_CommunityEngagement.jpg')}
                />
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
                <img
                  alt="Parth Vora"
                  className="profile-image"
                  src={require('./team-raw-images/ParthVora_CommunityEngagement.jpg')}
                />
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
                <img
                  alt="Patel Nijal"
                  className="profile-image"
                  src={require('./team-raw-images/PatelNijal_CommunityEngagement.jpg')}
                />
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
                <img
                  alt="Sarthak Jadav"
                  className="profile-image"
                  src={require('./team-raw-images/Sarthakjadav_CommunityEngagement.jpg')}
                />
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
                <img
                  alt="Siddhant Gandhi"
                  className="profile-image"
                  src={require('./team-raw-images/Siddhant Gandhi_Community Engagement.jpg')}
                />
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
                <img
                  alt="Viral Gajjar"
                  className="profile-image"
                  src={require('./team-raw-images/Gajjar Viral Kirankumar_CommunityEngagement .jpeg')}
                />
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
