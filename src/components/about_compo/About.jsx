import React from "react";
import "./about.css";
import me2 from "../../assets/me2.jpg";
import Card from "../card_folder/Card";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";


const About = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);
  return (
    <section className="section-2" id="about">
      <h5 data-aos="fade-up">Get To Know</h5>
      <h2 className='text-light' data-aos="fade-up">About Me</h2>
      <div className="container about__contianer">
        <div className="about__me" data-aos="fade-up">
          <div className="about__me-image">
            <img src={me2} alt="Emma" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards" data-aos="fade-up">
            <Card
              the_about_icon={<FaAward className="about_icon" />}
              card_hearder="Experience"
              card_sub="0+ year working"
            />
            <Card
              the_about_icon={<FiUsers className="about_icon" />}
              card_hearder="Clients"
              card_sub="1+ clients"
            />
            <Card
              the_about_icon={<VscFolderLibrary className="about_icon" />}
              card_hearder="Projects"
              card_sub="2+ completed"
            />
          </div>
          <p data-aos="fade-up">
            Energetic and interactive young man with excellent multitasking
            ability. With knowledge in software development process, website
            development and design. Supportive, hardworking and enthusiastic
            team player, dedicated and has perseverance to resolving projects
            issues. It would be a greater challenge and a boost to be part of
            any team and support with my ideas, skills and build together.
          </p>
          <a href="#contact" className="btn btn-primary" data-aos="fade-up">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
