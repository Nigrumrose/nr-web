
import React, { Component } from 'react';
import './header.css';

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
            <h2>Scroll Down</h2>
            <p>Scroll down to see the sticky effect.</p>
        </div>
        
        <div id="navbar">
            <a class="active" href="javascript:void(0)">Home</a>
            <a href="javascript:void(0)">News</a>
            <a href="javascript:void(0)">Contact</a>
        </div>
      </div>
    );
  }
}

export default Header;

