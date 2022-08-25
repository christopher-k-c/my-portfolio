import React from 'react'
import './experience.css'
export default function Experience() {

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

  return (
    <>
      <div className="experience-container">
        <div className="skills-container">
          <div className="frontend">
            {allSkills}
          </div>
        </div>
      </div>
    </>
  )
}
