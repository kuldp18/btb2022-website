import React from 'react';
import '../../Styles/TeamSection.css';

const TeamSection = () => {
  return (
    <>
      <h1 className="stylish-title" id="team-section">
        Meet the Team
      </h1>
      <section className="team-section">
        <div className="teams-container">
          {/* Design Team */}
          <section className="team design-team">
            <h3 className="team-title">Team Design :</h3>
            <div className="team-grid">
              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    src={require('./team-images/HastiBhalodiya_DesignTeam.jpg')}
                    alt="Hasti Bhalodiya"
                    className="profile-image"
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Hasti Bhalodiya</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    src={require('./team-images/Korat Dishant _ design.jpg')}
                    alt="Korat Dishant"
                    className="profile-image"
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Korat Dishant</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Omdevsinh Zala"
                    className="profile-image"
                    src={require('./team-images/Korat Dishant _ design.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Omdevsinh Zala</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Rayirth Jaiswal"
                    className="profile-image"
                    src={require('./team-images/RayirthJaiswal_Design.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Rayirth Jaiswal</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Vandan Gohil"
                    className="profile-image"
                    src={require('./team-images/VandanGohil_Design.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Vandan Gohil</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    src={require('./team-images/DhyeyPatel_graphicteam.jpg')}
                    alt="Dhyey Patel"
                    className="profile-image"
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Dhyey Patel</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <hr />
          {/* Content Writing Team */}
          <section className="team content-writing-team">
            <h3 className="team-title">Team Content Writing :</h3>
            <div className="team-grid">
              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    src={require('./team-images/RiyaSonara_ContentWriting.jpg')}
                    alt="Riya Sonara"
                    className="profile-image"
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Riya Sonara</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    src={require('./team-images/DhruvikGondaliya_ContentWriting.jpg')}
                    alt="Dhruvik Gondaliya"
                    className="profile-image"
                  />
                </div>
                <div className="profile-about-container">
                  <h1
                    className="profile-about-name"
                    style={{ fontSize: '1.4rem' }}
                  >
                    Dhruvik Gondaliya
                  </h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Dhruvkumar Patel"
                    className="profile-image"
                    src={require('./team-images/DhruvkumarPatel_ContentWriting.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Dhruvkumar Patel</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Khushboo Kolhe"
                    className="profile-image"
                    src={require('./team-images/KhushbooKolhe_ContentWriting.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Khushboo Kolhe</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Pragat Kholia"
                    className="profile-image"
                    src={require('./team-images/PragatKholia_ContentWriting.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Pragat Kholia</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Raval Krupesh"
                    className="profile-image"
                    src={require('./team-images/RavalKrupesh_ContentWriting.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Raval Krupesh</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Vaghela Dhruvi"
                    className="profile-image"
                    src={require('./team-images/VaghelaDhruvi_ContentWriting.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Vaghela Dhruvi</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Yagni Shah"
                    className="profile-image"
                    src={require('./team-images/YagniShah_ContentWriting.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Yagni Shah</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <hr />
          {/* Logistics Team */}
          <section className="team logistics-team">
            <h3 className="team-title">Team Logistics :</h3>
            <div className="team-grid">
              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    src={require('./team-images/AshutoshJaiswal_Logistics.jpg')}
                    alt="Ashutosh Jaiswal"
                    className="profile-image"
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Ashutosh Jaiswal</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    src={require('./team-images/Janviprajapati_logistic.jpg')}
                    alt="Janvi Prajapati"
                    className="profile-image"
                  />
                </div>
                <div className="profile-about-container">
                  <h1
                    className="profile-about-name"
                    style={{ fontSize: '1.4rem' }}
                  >
                    Janvi Prajapati
                  </h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Krishita Viroja"
                    className="profile-image"
                    src={require('./team-images/KrishitaViroja_Logistics.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Krishita Viroja</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Manav Rijwani"
                    className="profile-image"
                    src={require('./team-images/ManavRijwani_Logistics.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Manav Rijwani</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Nirav Panchal"
                    className="profile-image"
                    src={require('./team-images/NiravPanchal_Logistics.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Nirav Panchal</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Pranshu Pancholi"
                    className="profile-image"
                    src={require('./team-images/PranshuPancholi_Logistics.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Pranshu Pancholi</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Pushti Shah"
                    className="profile-image"
                    src={require('./team-images/PushtiShah_Logistics.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Pushti Shah</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Shyam Sagothia"
                    className="profile-image"
                    src={require('./team-images/ShyamSagothia_Logistics.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Shyam Sagothia</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Vaidehi Kayastha"
                    className="profile-image"
                    src={require('./team-images/VaidehiKayastha_LogisticsTeam.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Vaidehi Kayastha</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <hr />
          {/* Outreach team */}
          <section className="team outreach-team">
            <h3 className="team-title">Team Outreach :</h3>
            <div className="team-grid">
              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    src={require('./team-images/AakashMaurya_OutreachCoreTeam.jpg')}
                    alt="Aakash Maurya"
                    className="profile-image"
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Aakash Maurya</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    src={require('./team-images/ChitraTrivedi_OutreachCoreTeam.jpg')}
                    alt="Chitra Trivedi"
                    className="profile-image"
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Chitra Trivedi</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Dev Patel"
                    className="profile-image"
                    src={require('./team-images/DevPatel_OutReach.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Dev Patel</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Madhvesh Kanjariya"
                    className="profile-image"
                    src={require('./team-images/MadhveshKanjariya_OutreachCoreTeam.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Madhvesh Kanjariya</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Nikhil Parikh"
                    className="profile-image"
                    src={require('./team-images/Nikhil Parikh_Outreach.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Nikhil Parikh</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <hr />
          {/* Community Engagement team */}
          <section className="team community-eng-team">
            <h3 className="team-title">Team Community Engagement :</h3>
            <div className="team-grid">
              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    src={require('./team-images/AayushPatel_CommunityEngagement.jpg')}
                    alt="Aayush Patel"
                    className="profile-image"
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Aayush Patel</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    src={require('./team-images/Diya shah_Community Engagement.jpg')}
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
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Jain Shreyas"
                    className="profile-image"
                    src={require('./team-images/JainShreyasSunilkumar_CommunityEngagement.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Jain Shreyas</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Karina Vaishali Mehta"
                    className="profile-image"
                    src={require('./team-images/Karina Vaishali Mehta_CommunityEngagement.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1
                    className="profile-about-name"
                    style={{
                      fontSize: '1.2rem',
                    }}
                  >
                    Karina Vaishali Mehta
                  </h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Krishna Patel"
                    className="profile-image"
                    src={require('./team-images/Karina Vaishali Mehta_CommunityEngagement.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Krishna Patel</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Parth Vora"
                    className="profile-image"
                    src={require('./team-images/ParthVora_CommunityEngagement.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Parth Vora</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Patel Nijal"
                    className="profile-image"
                    src={require('./team-images/PatelNijal_CommunityEngagement.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Patel Nijal</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Sarthak Jadav"
                    className="profile-image"
                    src={require('./team-images/Sarthakjadav_CommunityEngagement.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Sarthak Jadav</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Siddhant Gandhi"
                    className="profile-image"
                    src={require('./team-images/Siddhant Gandhi_Community Engagement.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Siddhant Gandhi</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Vikas Pal"
                    className="profile-image"
                    src={require('./team-images/Siddhant Gandhi_Community Engagement.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Vikas Pal</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <hr />
          {/* web dev team */}
          <section className="team web-dev-team">
            <h3 className="team-title">Team Web Dev :</h3>
            <div className="team-grid">
              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    src={require('./team-images/KeyurChaniyara_WebDev.jpg')}
                    alt="Keyur Chaniyara"
                    className="profile-image"
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Keyur Chaniyara</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    src={require('./team-images/NandiniGohel_WebDev.jpg')}
                    alt="Nandini Gohel"
                    className="profile-image"
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Nandini Gohel</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Prachi Jethava"
                    className="profile-image"
                    src={require('./team-images/PrachiJethava_WebDev.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Prachi Jethava</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Yash Hindocha"
                    className="profile-image"
                    src={require('./team-images/Yash Hindocha_webDev.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Yash Hindocha</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Yatree Ladani"
                    className="profile-image"
                    src={require('./team-images/YatreeLadani_WebDev.jpg')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Yatree Ladani</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>

              <div className="team-profile-card">
                <div className="profile-image-container">
                  <img
                    alt="Kuldeep Solanki"
                    className="profile-image"
                    src={require('./team-images/KuldeepSolanki_webdev.png')}
                  />
                </div>
                <div className="profile-about-container">
                  <h1 className="profile-about-name">Kuldeep Solanki</h1>
                  <h4 className="profile-about-description">
                    sample description
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
