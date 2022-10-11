import React from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './navigation.css';
import { slide as Menu } from 'react-burger-menu'


export default function Navigation() {



  return (
    <>
      <Router>
        <nav>
          {/* Desktop navigation layout */}
          <div className='nav-container'>
          <a href="#landing"  >
            <h1>CHRISTOPHER CAREY</h1>
            {/* <svg className="title-name" viewBox="0 0 450 15">
              <text  y="15">CHRISTOPHER CAREY</text>
            </svg> */}
            </a>
            <ul className="hide-desktop-links">
                <a href="#about"><li>ABOUT</li></a>
                <a href="#projects"><li>PROJECTS</li></a>
                <a href="#experience"><li>EXPERIENCE</li></a>
                <a href="#contact"><li>CONTACT</li></a>
            </ul>
          </div>
          {/* Responsive navigation layout */}
          <div className='responsive-menu-container'>
            <Menu>
            <ul>
            <a href="#about"><li>About</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#experience"><li>Experience</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>

            
            <hr/>

            
            <a href='https://www.linkedin.com/in/chriskcarey/' target="_blank"><img src='https://svgshare.com/i/k93.svg' title='my_linkedin' /></a>
            <a href='https://github.com/christopher-k-c?tab=repositories' target="_blank"><img src='https://svgshare.com/i/kB9.svg' title='' /></a>

            </Menu>
          </div>
        </nav>

      </Router>
    </>
  )
}
