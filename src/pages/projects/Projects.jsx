import React from 'react'
import './projects.css'
import Project from './Project'

export default function Projects(props) {


// console.log(typeof(props.allProjects))

  return (
    <>
    
    <div className="background-container" id="projects">
      <div className="introduction-container">
        <div className="intro">
        {/* <div className="opening-rectangle"></div> */}
        <h1>{`{ Projects }`}</h1>
        <p>Received 13 weeks of training in full-stack web development, through a combination of lectures and projects. Working individually and in groups, I have furthered my understanding in programmatic thinking and web development.</p>
        </div>
      </div>
    </div>


<Project></Project>


      


    
    
    </>
  )
}
