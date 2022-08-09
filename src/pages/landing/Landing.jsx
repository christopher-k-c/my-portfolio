import React from 'react'
import './landing.css'
// import Portrait from './assets/41990035.jpg'
import Portrait from './assets/portrait-with-filter-01.jpg'




export default function Landing() {
  return (
    <>
    

      <div className="landing-container">
        <div className="col col-text">
          <div className="opening-rectangle"></div>
          <h1>I'm a Junior <span>Software Engineer</span></h1>
          <h4>2022 <span>General Assembly Graduate</span> based in London with a background in E-commerce post-production and management</h4>
          <p>Check out my <span>projects</span></p>
          <div className="closing-rectangle"></div>
        </div>
        <div className="col col-image">
        <div className="closing-rectangle-two"></div>
          <img src={Portrait} alt="portrait" />
        </div>
      </div>


    </>
  )
}
