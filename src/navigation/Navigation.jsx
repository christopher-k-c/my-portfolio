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
          <Link to="/my-portfolio"  ><h1>CHRISTOPHER CAREY</h1></Link>
            <ul className="hide-desktop-links">
                <Link to="/about"><li >About</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/experience"><li>Experience</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
          </div>
          {/* Responsive navigation layout */}
          <div className='responsive-menu-container'>
            <Menu>
            <ul>
                <Link to="/my-portfolio"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/experience"><li>Experience</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
              
            </ul>
            <hr/>

            
            <a href='https://www.linkedin.com/in/chriskcarey/' target="_blank"><img src='https://svgshare.com/i/k93.svg' title='my_linkedin' /></a>
            <a href='https://github.com/christopher-k-c?tab=repositories' target="_blank"><img src='https://svgshare.com/i/kB9.svg' title='' /></a>

            </Menu>
          </div>
        </nav>
          <Routes>
            <Route path="/my-portfolio" element={<Landing />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
      </Router>
    </>
  )
}
