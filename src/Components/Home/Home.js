import React from 'react'
import '../../Styles/mainpage.css'
import wave from '../../require_images/WAVE1.png'
import arrow from '../../require_images/arrow.png'
import logo from '../../require_images/LOGOF.png'

export const Home = () => {
  return (
    <div>
    <header class="header2">

        <img class="logo2" src={logo} alt="" height="100px" width="100px"/>

        <div class="fas fa-bars"></div>

    
        <nav class="navbar2" >
            <ul >
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#sponsors">Sponsors</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#timeline">Time Line</a></li>
            </ul>
        </nav>


    </header>


  
    <section id="home" class="home2">

        <div class="header-content2">
            <p class="content-1">BREAK THE</p>
            <p class="content-2">BARRIER</p>
            <p class="content-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti sint sunt illum, molestias excepturi</p>
            <a href="#"><button>Learn more</button></a>
            <div class="arrow2"><img src={arrow} alt=""/></div>
        </div>
        

        

        <div class="wave1"><img src={wave} alt=""/></div>
        


    </section>
    </div>
  )
}
