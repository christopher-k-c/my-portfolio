import React from 'react'
import ImgOne from './assets/project_01.jpg'
import ImgTwo from './assets/project_02.jpg'
import ImgThree from './assets/project_03.jpg'
import ImgFour from './assets/project_04.jpg'
import './project.css'

export default function Project() {

    // Create an array of objects containing each project and it's respective information
    const projectsArray = [

      {'name': 'Bootleg Bill', 'git': 'https://github.com/christopher-k-c/SEI-64_PROJECT_FOUR_FRONT-END', 'site': 'https://bootlegbills.herokuapp.com/index', 'image': ImgFour, 'description': 'Over the course of 9 days, through harnessing the MERN Stack, and as a group of three, we built an ecommerce inspired store front for bootlegged cassette tapes. '},
      {'name': 'The Phonograph', 'git': 'https://github.com/christopher-k-c/SEI-64_PROJECT_THREE/tree/main/thephonograph','site': 'https://hydro-keener-88414.herokuapp.com/' ,'image': ImgThree, 'description': 'Inspired by Discogs.com, the full-stack record collection app was built in 4 days on a Django Framework, connected to a PostgreSQL database which utilised vanilla CSS, Tailwind and JavaScript to style its front-end. '},
      {'name': 'Inventory Control App', 'git': 'https://github.com/christopher-k-c/SEI-64_PROJECT_TWO','site': 'https://inventorycontrolsystem02.herokuapp.com/' ,'image': ImgTwo, 'description': 'We set out to develop an inventory control web application in 4 days with full CRUD operations, User Authentication and Association.'},
      {"name": "Tic Tac Toe", 'git': 'https://github.com/christopher-k-c/SEI-64_PROJECT_ONE','site': 'https://christopher-k-c.github.io/SEI-64_PROJECT_ONE/' ,'image': ImgOne, 'description': 'This project was built with HTML, CSS, JavaScript, JQuery and the SweetAlert Library. This app was my first experience programming in javascript and the project took 4 days to complete.'}
    
    ]
    
    console.log(projectsArray[0].git)

    

    // Map the projects to the Project Component 
      
    const allProjects = projectsArray.map((project, index) => (
      
    
      <div className="project-container" key={index}>
        
        <div className="image-container">

          <a >
            <span className="image-text-overlay">            
              <a href={project.git} target="_blank"><img src='https://svgshare.com/i/kB9.svg' title='' />Repo</a>
              {/* <a href={project.site} target="_blank"><img src='https://svgshare.com/i/kB9.svg' title='' />Site</a> */}

              <a href={project.site} target="_blank"><img src='https://svgshare.com/i/kEV.svg' className="thumb-icon" title='' />Site</a>

              {/* I THINK MEDIA QUERY IS EFFECTING THE HOVER AND SIZING OF IMAGE OVERLAY, ICONS, HOVER AND MORE  */}


            </span>
            
            <img src={project.image} alt="project"/>
          </a>
          
          
        
        </div>

        <div className="description-container">

          <div className="rectangle"></div>

          <h1>{project.name}</h1>

          <p>{project.description}</p>
          
        </div>

        
      </div>
    
    ))

  return (

    <>
    
{allProjects}

    
    </>
  )
}
