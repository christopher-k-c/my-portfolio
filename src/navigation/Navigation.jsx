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

export default function Navigation() {
  return (
    <>
      <Router>
        <nav >
          <div className='nav-container'>
            <Link to="/"  ><h1>CHRISTOPHER CAREY</h1></Link>
            <ul>
              <Link to="/about"><li>About</li></Link>
              <Link to="/projects"><li>Projects</li></Link>
              <Link to="/experience"><li>Experience</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
            </ul>
          </div>
        </nav>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/experience" element={<Experience />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
      </Router>
    </>
  )
}
