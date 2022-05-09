import React from 'react';
import './../../Styles/Faq.css';

export const Faq = () => {
  return (
    <>
      {/* <svg
        id="wave"
        style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
        viewBox="0 0 1440 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(52, 43, 63, 1)" offset="0%"></stop>
            <stop stopColor="rgba(52, 43, 63, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: 'translate(0, 0px)', opacity: '1' }}
          fill="#21192B"
          d="M0,30L288,80L576,60L864,40L1152,60L1440,20L1728,10L2016,20L2304,90L2592,50L2880,10L3168,30L3456,70L3744,0L4032,50L4320,70L4608,80L4896,0L5184,80L5472,0L5760,20L6048,40L6336,30L6624,40L6912,70L6912,100L6624,100L6336,100L6048,100L5760,100L5472,100L5184,100L4896,100L4608,100L4320,100L4032,100L3744,100L3456,100L3168,100L2880,100L2592,100L2304,100L2016,100L1728,100L1440,100L1152,100L864,100L576,100L288,100L0,100Z"
        ></path>
      </svg> */}
      <section className="Faq" id="faq">
        <div class="container1">
          <div class="accordion1">
            <div class="title1">FAQs</div>
            <div class="accordion-item1" id="question1">
              <a class="accordion-link1" href="#question1">
                Q. Who can participate?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  Anyone who is up for challenges and looking forward to learn
                  something new is welcome to apply. However the participant
                  should be a student of any college/university in India.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question2">
              <a class="accordion-link1" href="#question2">
                Q. Is there any participation fee?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>No, there is no participation fee.</p>
              </div>
            </div>

            <div class="accordion-item1" id="question3">
              <a class="accordion-link1" href="#question3">
                Q. How do I apply?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  We will be adding the registration link soon. Stay connected
                  with us on our social media for more updates.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question4">
              <a class="accordion-link1" href="#question4">
                Q. Can I participate remotely?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  Yes, the workshops and the hackathon will be completely
                  online.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question5">
              <a class="accordion-link1" href="#question5">
                Q. How many participants are allowed in one team?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  You are welcome to work alone, but we definitely recommend
                  working with a team. A team for this hackathon can be set from
                  an individual member and limited to a maximum of 4 members.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question6">
              <a class="accordion-link1" href="#question6">
                Q. Can I participate in more than one tracks?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  We recommend you to participate in only one track and put your
                  best foot forward. However, you can participate in as many
                  tracks as you want according to your interests.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question7">
              <a class="accordion-link1" href="#question7">
                Q. How does an online Hackathon works?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  You don’t have to be online for 48 hours! You can build your
                  projects at your comfort and submit them before the deadline
                  along with a video presentation of the same.
                </p>
              </div>
            </div>
            <div class="accordion-item1" id="question8">
              <a class="accordion-link1" href="#question8">
                Q. Where to submit our work?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  We will be taking the project submissions on devpost and you
                  are required to submit a video presentation of your project
                  via YouTube.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question9">
              <a class="accordion-link1" href="#question9">
                Q. I can't code, can I still join?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  Of course! Our hackathon is open to all, beginners all the way
                  to more advanced students! We will be hosting a number of
                  workshops to help you learn and enhance your skills. Remember,
                  anyone can code, we just need a path to follow!
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question10">
              <a class="accordion-link1" href="#question10">
                Q. What if I still have questions?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  Shoot your questions on our{' '}
                  <a
                    href="https://discord.gg/uN3dhWBKKT"
                    target="_blank"
                    style={{
                      color: '#ff5148',
                    }}
                  >
                    discord
                  </a>{' '}
                  and we will surely get back to you as soon as we can.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
