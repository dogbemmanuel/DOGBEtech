import React from 'react';
import './services.css'
import {BsCheck2All} from 'react-icons/bs';


const Services = () => {
    return(
        <section className='section_4' id='service'>
            <h5>What I offer</h5>
            <h2 className='text-light'>SERVICES</h2>
            <div className="container service_container">
                <article className='service'>
                    <div className="service_head">
                        <h3>UI/UX DESIGN</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Website Designe.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Powerpoint template and slides.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>CV (Curricullume Vitae template)/ Resume.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Portfolio Website.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Personal Website.</p>
                        </li>
                    </ul>
                </article>

                {/* END OF UI/UX */}

                <article className='service'>
                    <div className="service_head">
                        <h3>WEB DEVELOPMENT</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Web Application Development.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Business Website.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Portfolio Website.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Events Website.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Lorem ipsum dolor sit amet consectetur, elit.</p>
                        </li>
                    </ul>
                </article>

                {/* END OF WEB DEVELOPMENT */}

                <article className='service'>
                    <div className="service_head">
                        <h3>CONTENT CREATION</h3>
                    </div>
                    <ul className='service_list'>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Relationship.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Human management.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Leadership.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Sacrifices/Determinations.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Endurance.</p>
                        </li>
                        <li>
                            <BsCheck2All className='services_list_icons'/>
                            <p>Lorem ipsum dolor sit amet consectetur, elit..</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services;