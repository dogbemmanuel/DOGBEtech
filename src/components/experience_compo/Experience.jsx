import React from 'react';
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs';


const Experience = () => {
  return (
    <section className='section-3' id='experience'>
      <h5>What skills I have</h5>
      <h2 className='text-light'>My Experience</h2>
      <div className='container experience_container'>
        <div className="experience-frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div >    
            <h4>HTML</h4>
            <small className='expe_level'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>              
            <h4>CSS</h4>
            <small className='expe_level'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>              
            <h4>SASS</h4>
            <small className='expe_level'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>              
            <h4>Bootstrap</h4>
            <small className='expe_level'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>              
            <h4>GIT</h4>
            <small className='expe_level'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>
            <h4>React.JS</h4>
            <small className='expe_level'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>
        
        {/* END OF FRONTEND */}

        <div className="experience_backend">
        <h3>BackEnd Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>
            <h4>Python</h4>
            <small className='expe_level'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>
            <h4>JavaScript</h4>
            <small className='expe_level'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>
            <h4>SQL</h4>
            <small className='expe_level'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>
            <h4>MySQL</h4>
            <small className='expe_level'>Intermediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_icons'/>
            <div>
            <h4>Python</h4>
            <small className='expe_level'>Intermediate</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience