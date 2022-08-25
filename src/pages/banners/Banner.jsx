import React from 'react'
import Projects from '../projects/Projects'
import './banner.css'
import Experience from '../experience/Experience'

export default function Banner() {



    const allBanners = [
        
        {
            'id': 'about', 
            'bannerName': `{ About }`, 
            'bannerDescription': `I am a recent General Assembly, Software Engineering Immersive Graduate, with 10 years of combined experience in e-commerce post-production and management. My affinity for coding began with automation in Adobe Photoshop, sparking my ambition to pursue a career in development and ultimately my enrolment with General Assembly. The satisfaction of overcoming technical challenges, and the opportunity to master engineering skills on a regular basis, heavily influenced my decision to switch careers.
            `
        },
        {
            'id': 'projects', 
            'bannerName': `{ Projects }`, 
            'bannerDescription': `I received 13 weeks of training in full-stack web development after enrolling onto General Assembly's, Software Engineering Immersive course. through a combination of lectures and projects. Working individually and in groups, I have furthered my understanding in programmatic thinking and web development.`
        },
        {
            'id': 'experience', 
            'bannerName': `{ Experience }`, 
            'bannerDescription': `This section is a reflection of the skills that i have developed whilst with General Assembly and in my previous career. `
        },
        {
            'id': 'contact', 
            'bannerName': `{ Contact }`, 
            'bannerDescription': '...'
        }
    ]

    const bannerInfo = allBanners.map((project, index) => (

    <>

        <div className="background-container" id={project.id} key={index}>
            <div className="introduction-container">
                <div className="intro">
                    {/* <div className="opening-rectangle"></div> */}
                    <h1>{project.bannerName}</h1>
                    <p>{project.bannerDescription}</p>
                </div>
            </div>
        </div>
      
        {project.id === "projects" ? <Projects></Projects> : null}
        {project.id === "experience" ? <Experience></Experience> : null}

    </>

    ))


  return (
    <>

{bannerInfo}

    </>
  )
}
