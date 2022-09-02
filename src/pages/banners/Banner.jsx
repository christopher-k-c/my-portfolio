import React from 'react'
import './banner.css'
import Projects from '../projects/Projects'
import Experience from '../experience/Experience'
import About from '../about/About'

export default function Banner() {

    const skillIcons = [
        {'class': 'devicon-html5-plain', 'span': 'HTML'},
        {'class': 'devicon-css3-plain', 'span': 'CSS'},
        {'class': 'devicon-javascript-plain', 'span': 'JAVASCRIPT'},
        {'class': 'devicon-jquery-plain', 'span': 'JQUERY'},
        {'class': 'devicon-react-original', 'span': 'REACT'},
        {'class': 'devicon-bootstrap-plain', 'span': 'BOOTSTRAP'},
        {'class': 'devicon-markdown-original', 'span': 'MARKDOWN'},
        {'class': 'devicon-tailwindcss-original-wordmark', 'span': 'TAILWIND'},
        {'class': 'devicon-python-plain', 'span': 'PYTHON'},
        {'class': 'devicon-django-plain', 'span': 'DJANGO'},
        {'class': 'devicon-express-original', 'span': 'EXPRESS'},
        {'class': 'devicon-mongodb-plain', 'span': 'MONGODB'},
        {'class': 'devicon-postgresql-plain', 'span': 'POSTGRESQL'},
        {'class': 'devicon-bash-plain', 'span': 'BASH'},
        {'class': 'devicon-git-plain', 'span': 'GIT'},
        {'class': 'devicon-github-original', 'span': 'GITHUB'},
        {'class': 'devicon-npm-original-wordmark', 'span': 'NPM'},
        {'class': 'devicon-vscode-plain', 'span': 'VS CODE'},
        {'class': 'devicon-nodejs-plain', 'span': 'NODE.JS'},
        {'class': 'devicon-heroku-original', 'span': 'HEROKU'},
        {'class': 'devicon-photoshop-plain', 'span': 'PHOTOSHOP'},
        {'class': 'devicon-illustrator-plain', 'span': 'ILLUSTRATOR'},
        {'class': 'devicon-xd-plain', 'span': 'XD'},
        {'class': 'devicon-slack-plain', 'span': 'SLACK'},
        {'class': 'devicon-trello-plain', 'span': 'TRELLO'}
      ]
      
      const allSkills = skillIcons.map((skill, index) => (
        <>
          <div className="icon-container" key={index}>
              <i className={skill.class}></i>
              <span>{skill.span}</span>  
          </div>    
        </>
      ))


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

        {project.id === 'about' ? 

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

            <About></About>
        </>
    
        : 
        project.id === "projects" ? 

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

        <Projects></Projects>
        
        
        </>
        
        :

        project.id === "experience" ? 
        
        <>
        
        <div className="background-container" id={project.id} key={index}>
            <div className="introduction-container">
                <div className="intro">
                    {/* <div className="opening-rectangle"></div> */}
                    <h1>{project.bannerName}</h1>
                    {/* <p>{project.bannerDescription}</p> */}

                    <div className="exp-content-container">
                        <div className="experience-container">
                            <div className="skills-container">
                                <div className="frontend">
                                    {allSkills}
                                </div>
                            </div>
                        </div>
                    </div>                    


                    
                </div>
            </div>
        </div>

        <Experience></Experience>
        
        </>

        
        :
        project.id === "contact" ? 

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

        null
        }



        

        

    </>

    ))


  return (
    <>

{bannerInfo}

    </>
  )
}
