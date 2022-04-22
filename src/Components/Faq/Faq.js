import React from 'react';
import './../../Styles/Faq.css';

export const Faq = () => {
  return (
    <>
      <svg
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
      </svg>
      <section className="Faq" id="faq">
        <div class="container1">
          <div class="accordion1">
            <div class="title1">FAQs</div>
            <div class="accordion-item1" id="question1">
              <a class="accordion-link1" href="#question1">
                Q. WHAT IS A HACKATHON?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  A hackathon is social coding event where programmers,
                  designers and developers collaborate to solve a problem and
                  compete for cash prizes. It’s one part party, one part
                  work-your-butt-off overnight battle against the clock and the
                  competition.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question2">
              <a class="accordion-link1" href="#question2">
                Q. WHY WOULD SOMEONE PARTICIPATE IN A HACKATHON?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  People participate in hackathons for lots of reason: the
                  challenge, the creative outlet, the community collaboration,
                  the networking, the swag…
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question3">
              <a class="accordion-link1" href="#question3">
                Q. WHO IS THIS EVENT FOR?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  This event is open to both participants and spectators from
                  the community who want to cheer them on and see what the
                  hackathon is all about.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question4">
              <a class="accordion-link1" href="#question4">
                Q. IS THE EVENT OPEN TO ALL AGES?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  This event is limited to those 18 and up for participants. Be
                  prepared to show ID to enter. Wristbands will be provided to
                  those of legal drinking age. Spectators of all ages are able
                  to attend the kickoff party Friday and awards ceremony on
                  Saturday.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question5">
              <a class="accordion-link1" href="#question5">
                Q. WHO CAN PARTICIPATE? ARE THERE ANY PREREQUISITES OR REQUIRED
                SKILLS?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  Anyone is welcome to participate in this event. While
                  experience coding and programming is a huge plus, teams will
                  also need people with strong presentation skills and brilliant
                  ideas.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question6">
              <a class="accordion-link1" href="#question6">
                Q. DO I NEED A TEAM?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  While you do have the option of working alone, hackathon is a
                  team event so working with others is encouraged. There are a
                  few ways to find teammates: You can pick your team from people
                  you already know, find a team member via social media, meet
                  them at a pre-hackathon info sessions or at the kick-off
                  party.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question7">
              <a class="accordion-link1" href="#question7">
                Q. WILL THERE BE TRAINING?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  There is no pre-event training, but we’ll have team members on
                  site who will be more than happy to answer your questions
                  throughout the event. There will also be some additional
                  information provided at the pre-event mixer, which we
                  encourage everyone to attend.
                </p>
              </div>
            </div>
            <div class="accordion-item1" id="question8">
              <a class="accordion-link1" href="#question8">
                Q. IS THERE ANYTHING THAT I NEED TO PREPARE?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  Other than finding fellow brilliant minds with complimentary
                  skills to team up with, there is nothing that you need to
                  prepare in advance.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question9">
              <a class="accordion-link1" href="#question9">
                Q. HOW MUCH DOES IT COST?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>FREE. Free for spectators. Free for participants.</p>
              </div>
            </div>

            <div class="accordion-item1" id="question10">
              <a class="accordion-link1" href="#question10">
                Q. Can I only participate in one challenge?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  You will have to select your preferred challenge, if you can
                  combine challenges you can but you still get judged by the
                  criteria for the single challenge.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question11">
              <a class="accordion-link1" href="#question11">
                Q. What is the cancelation policy?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  It is a bummer if you cancel before and you will cause us a
                  lot of work, but there are many reasons why cancellation can
                  happen. So please apply only if you are certain that you want
                  to participate and be committed to come to save us a lot of
                  work!
                </p>
              </div>
            </div>
            <div class="accordion-item1" id="question12">
              <a class="accordion-link1" href="#question12">
                Q. Is the hackathon open to anyone?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  Application is open to anyone over the age of 16, if you can
                  participate will be decided by the dishtracker organisation
                  team.
                </p>
              </div>
            </div>

            <div class="accordion-item1" id="question13">
              <a class="accordion-link1" href="#question13">
                Q. What should I bring?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  Bring your laptops, mobile phones, Kinects, Oculus Rifts, Leap
                  Motions, wearable computing devices, to whatever inspires you
                  or you want to work with.
                </p>
              </div>
            </div>
            <div class="accordion-item1" id="question14">
              <a class="accordion-link1" href="#question14">
                Q. Is there support available?
                <ion-icon name="chevron-down-outline" class="down1"></ion-icon>
                <ion-icon name="chevron-up-outline" class="up1"></ion-icon>
              </a>
              <div class="answer1">
                <p>
                  The environment at the Hackathon is designed specifically to
                  encourage everyone to have fun and help each other. If you’re
                  ever stuck on anything, speak to a GastroHackathon team member
                  who might be able to help. Team mates and other participants
                  are on hand too, as this is a collaborative environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
