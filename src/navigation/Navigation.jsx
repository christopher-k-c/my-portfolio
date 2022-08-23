import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './navigation.css';
import Landing from '../pages/landing/Landing.jsx'
import About from '../pages/about/About.jsx'
import Projects from '../pages/projects/Projects.jsx'
import Experience from '../pages/experience/Experience.jsx'
import Contact from '../pages/contact/Contact.jsx'
import { slide as Menu } from 'react-burger-menu'


export default function Navigation() {



  return (
    <>
      <Router>
        <nav>
          {/* Desktop navigation layout */}
          <div className='nav-container'>
          <Link to="/my-portfolio"  >
            <h1>CHRISTOPHER CAREY</h1>
            {/* <svg className="title-name" viewBox="0 0 450 15">
              <text  y="15">CHRISTOPHER CAREY</text>
            </svg> */}
          </Link>
            <ul className="hide-desktop-links">
                <a href="#about"><li>About</li></a>
                <a href="#projects"><li>Projects</li></a>
                <a href="#experience"><li>Experience</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
          </div>
          {/* Responsive navigation layout */}
          <div className='responsive-menu-container'>
            <Menu>
            <ul>
                <Link to="/my-portfolio"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <a href="#projects"><li>Projects</li></a>
                <a href="#experience"><li>Experience</li></a>
                <Link to="/contact"><li>Contact</li></Link>
              
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
