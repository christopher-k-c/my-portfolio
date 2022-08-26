import React from 'react'
import './about.css'
import JoJo from './assets/5a1c3e51f65d84088faf144c.png'
import GA from './assets/kindpng_6753376.png'

export default function About() {
  return (
    
    <>
    <section className="about-content-container">
        <div className="content" id="ga">
            <div className="about-image-container" >
                <img src={GA} alt='General-Assembly-logo' />
            </div> 
            <div className="p-container">
                <p className='date'>May 2022 - July 2022</p>
                <br />
                <p>
                
                The Software Engineering Immersive course with General Assembly has exposed me to industry standard
                methodologies, technologies and more. Working in groups as well as on our own, we participated in daily 
                stand ups, lectures and project presentations.
                
                </p>
                <br />
                <ul>
                    <li>Developed agile work flows within our group projects</li>
                    <li>Developed a confidence in HTML, CSS and JAVASCRIPT</li>
                    <li>Most morning sessions would begin with a warm up challenge</li>
                    <li>Built four projects, ranging from static sites to dynamic applications</li>
                    <li>Responsible for handing in our homework on time</li>
                    <li>Problem solved in groups via pair programming</li>
                </ul>
            </div>
        </div>
    </section>

    <br />

    <section className="about-content-container">
        <div className="content" id="jojo">
            <div className="about-image-container">
                <img src={JoJo} alt='jojo-maman-bebe-logo' />
            </div>
            <div className="p-container">
                <p className='date'>May 2015 - May 2022</p>
                <br />
                <p>
                During my time at Jojo, I was promoted to Senior Retoucher, 
                where I built an efficient team and implemented an agile inspired workflow. 
                Regularly communicated at all levels across the company, to ensure my team 
                delivered on short and long term deadlines.                
                </p>
<br />
                <ul>
                    <li>Processing, editing, compositing and grading images using Photoshop and Capture One.</li>
                    <li>Automated Photoshop processes.</li>
                    <li>Working with Buying and Design on image amendments and colour correction.</li>
                    <br />
                    <li>Used Exiftool and Crontab to build a CSV database of image metadata.</li>
                    <li>Built a file finding application using Python, Tkinter, and OS modules.</li>
                    <li>Transferred files using Rsync and Fillezilla.</li>
                    <br />
                    <li>Working in Illustrator and Indesign to collaborate with Digital and Print Design on campaigns and promotional material.</li>
                    <li>Working with the Ecommerce team to ensure consistency of product and campaign images.</li>
                    <li>Using Magento One to upload simple and configurable products. Flushing webpage caches.</li>
                    <br />
                    <li>Managed a team of 2 retouchers and 1 photographer. This included, but was not limited to, interviewing, training, personal development reviews.</li>
                    <li>Managed the production process from beginning to end, delegating to the team, and ensuring KPIs and deadlines are met.</li>
                    <li>Coordinated with freelancers and outsourcing agencies.</li>
                    <li>Implemented trello into my teams workflow</li>
                    <li>Utilised Unito to connect multiple trello boards</li>
                </ul>
            </div>

        </div>
    </section>
    </>
  )
}
