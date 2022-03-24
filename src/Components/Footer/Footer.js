import React from 'react'
import './../../Styles/Footer.css'
import Logo from './../../require_images/LOGOF.png'

export const Footer = () => {
  return (
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
			<div class="footer-col" style={{backgroundColor: '#21192B',display: 'flex',justifyContent: 'center',borderRadius: '20px'}}>
				<img src={Logo} width="70%"/>
			</div>
			<div class="footer-col">
  	 			<h4>EVENTS</h4>
  	 			<ul>
  	 				<li><a href="#">Upcoming Hackathons</a></li>
  	 				<li><a href="#">Winners of Events</a></li>
  	 				<li><a href="#">Prizes</a></li>
  	 				<li><a href="#">Schedules</a></li>

  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>HELP</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ SectionFAQ</a></li>
  	 				<li><a href="#">Support</a></li>
  	 				<li><a href="#">About BTB</a></li>

  	 			</ul>
  	 		</div>
  	 		
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook fa-lg"></i></a>
  	 				<a href="#"><i class="fab fa-twitter fa-lg"></i></a>
  	 				<a href="#"><i class="fab fa-instagram fa-lg"></i></a>
					<a href="#"><i class="fab fa-github fa-lg"></i></a><br/>
  	 				<a href="#"><i class="fab fa-linkedin-in fa-lg"></i></a>
  	 				<a href="#"><i class="fab fa-youtube fa-lg"></i></a>
  	 				<a href="#"><i class="fa fa-envelope fa-lg"></i></a>
					<a href="#"> <i class="fab fa-discord fa-lg"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  )
}
