
import React, { Component } from 'react';
import './header.css';
import '../../common/css/style.css'
import headerImg from "./images/beverage-computer-flower-948888_1.jpg"
import blankChart from "./images/blank-charts-computer-669619_1.jpg"
import webSiteImg from "./images/book-computer-design-326424_1.jpg"
import webAppImg from "./images/business-charts-commerce-265087_1.jpg"
import mobileAppImg from "./images/business-close-up-commerce-266176_1.jpg"

class Header extends Component {
  componentDidMount() {
    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop; 
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }   
  }

  render() {
    return (
      <div>
        <div class="header">
            <div class="jumbotron homeMiddleContainer">
            <p class="webSiteNameBar"> Nigrumrose.com</p>
              <img src={headerImg} class="homeImg img-responsive shadow p-4 mb-4 bg-white"
               alt="Photo by rawpixel.com from Pexels" />
              <img src={webSiteImg} class="webSiteImg shadow p-2 mb-4 bg-white"
                alt="Photo by rawpixel.com from Pexels" />
              <span class="webSiteImgText appFont"><b>Website</b> <p class="knowMore"><a href="#">know more</a></p></span>
              <img src={webAppImg} class="webAppImg shadow p-2 mb-4 bg-white"/>
              <span class="webAppImgText appFont"> <b>Web App</b><p class="knowMore"><a href="#">know more</a></p></span>
              <img src={mobileAppImg} class="mobileAppImg shadow p-2 mb-4 bg-white"/>
              <span class="mobileAppImgText appFont"><b>Mobile App</b><p class="knowMore"><a href="#">know more</a></p></span>

              <img src={blankChart} class="blankChart shadow p-1 mb-4 bg-white"/>
              
              <div class="homeText appFont">
                <p class="font-italic"><b>Software solutions for your business!</b></p>
                <p class="contactUsText"><a href="#contactUS">Contact Us...</a></p> 
              </div>
            </div>
            <div id="navbar">
              <a class="active" href="javascript:void(0)" >Home</a>
              <a href="javascript:void(0)">Our Works</a>
              <a href="javascript:void(0)">Blogs</a>
              <a href="#contactUS">Contact</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;

