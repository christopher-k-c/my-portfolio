import React from 'react'
import './banner.css'
import Projects from '../projects/Projects'
import Experience from '../experience/Experience'
import About from '../about/About'

export default function Banner() {



    const allBanners = [
        
        {
            'id': 'about', 
            'bannerName': `{ About }`, 
            'bannerDescription': `I am a recent General Assembly, Software Engineering Immersive Graduate, with 10 years of combined experience in e-commerce post-production and management. My affinity for coding began with automation in Adobe Photoshop, sparking my ambition to pursue a career in development and ultimately my enrolment with General Assembly.
            `
        },
        {
            'id': 'projects', 
            'bannerName': `{ Projects }`, 
            'bannerDescription': `I received 13 weeks of training in full-stack web development with General Assembly's, Software Engineering Immersive course. Through a combination of lectures and projects, working individually and in groups, I have furthered my understanding in programmatic thinking and web development. Here are my four main projects...`
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

        {/* Render Contact as the footer with contact form else render all other banners*/}
        {project.id === "contact" ? 

        <div className="background-container" id={project.id} key={index}>
            <div className="introduction-container">
                <div className="intro">
                    
                    <h1>{project.bannerName}</h1>

                    <div className="social-container">
                        <a href='https://github.com/christopher-k-c?tab=repositories' target="_blank"><h3> GitHub </h3></a>
                        <a href='https://www.linkedin.com/in/chriskcarey/' target="_blank"><h3 > LinkedIn </h3></a>
                    </div>

                    {/* <a href='https://www.linkedin.com/in/chriskcarey/' target="_blank"><img src='https://svgshare.com/i/k93.svg' title='my_linkedin' style={{'width': '100px'}}/></a>
                    <a href='https://github.com/christopher-k-c?tab=repositories' target="_blank"><img src='https://svgshare.com/i/kB9.svg' title='' style={{'width': '100px'}}/></a> */}

                </div>
            </div>
        </div>
        
        : 
        
        <div className="background-container" id={project.id} key={index}>
            <div className="introduction-container">
                <div className="intro">
                    {/* <div className="opening-rectangle"></div> */}
                    <h1>{project.bannerName}</h1>
                    <p>{project.bannerDescription}</p>
                </div>
            </div>
        </div>
        
        
        }

        
        
        {/* Render the project thumbnails underneath the Project Banner */}
        {project.id === "projects" ? <Projects></Projects> : null}
        {/* Render my skills underneath the Experience Banner */}
        {project.id === "experience" ? <Experience></Experience> : null}
        {/* Render About section */}
        {project.id === "about" ? <About></About> : null}

        

    </>

    ))


  return (
    <>

{bannerInfo}

    </>
  )
}
