import React from "react";
import "./portfolio.css";
import port8 from "../../assets/port8.jpg";
import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.jpg";
import food from "../../assets/food.webp";
import port9 from "../../assets/port9.png";
import port5 from "../../assets/port5.jpg";
import powerpoint from "../../assets/powerpoint.png";


const data = [
  {
    id: 1,
    image: food,
    title: "Mini breakfast website",
    github: "https://github.com/dogbemmanuel",
    demo: "https://github.com/dogbemmanuel/mini_food_site.git",
  },
  {
    id: 2,
    image: port9,
    title: "Powerpoint Template",
    github: "https://github.com/dogbemmanuel",
    demo: powerpoint,
  },
  {
    id: 3,
    image: port5,
    title: "Content Created",
    github: "https://github.com/dogbemmanuel",
    demo: '#',
  },
  {
    id: 4,
    image: port8,
    title: "Tailoring measurement system",
    github: "https://github.com/dogbemmanuel",
    demo: "#",
  },
  {
    id: 5,
    image: port1,
    title: "Designed Portfolio",
    github: "https://github.com/dogbemmanuel",
    demo: "#",
  },
  {
    id: 6,
    image: port2,
    title: "Media Marketing Platform",
    github: "https://github.com/dogbemmanuel",
    demo: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="section-4">
      <h5 data-aos="fade-up">My recent works</h5>
      <h2 className="text-light" data-aos="fade-up">PORTFOLIO</h2>
      <div className="contianer portfolio_container" id="portfolio">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_items" data-aos="zoom-in-up">
              <div className="portfolio_item_image">
                <img className="pic" src={image} alt="BANK" />
              </div>
              <h3>{title}</h3>
              <a
                href={github}
                className="btn1"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a href={demo} className="btn2" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

