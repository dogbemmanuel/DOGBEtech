import React from "react";
import "./testimonials.css";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";


import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const testimonial_data = [
  {
    Avatar: avatar1,
    c_name: "Dzifa Dzobo Titilayo",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimavoluptate voluptates numquam iste quae similique neque Tempore veniam sint recusandae nisi sapiente assumenda explicabo ex omnis,ratione alias magni quisquam.",
  },
  {
    Avatar: avatar2,
    c_name: "Mrs Mary Leticia Kumasah",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimavoluptate voluptates numquam iste quae similique neque Tempore veniam sint recusandae nisi sapiente assumenda explicabo ex omnis,ratione alias magni quisquam.",
  },
  {
    Avatar: avatar3,
    c_name: "Miss Grace Ohene",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimavoluptate voluptates numquam iste quae similique neque Tempore veniam sint recusandae nisi sapiente assumenda explicabo ex omnis,ratione alias magni quisquam.",
  },
  {
    Avatar: avatar4,
    c_name: "Rev. Kofi Ameko",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimavoluptate voluptates numquam iste quae similique neque Tempore veniam sint recusandae nisi sapiente assumenda explicabo ex omnis,ratione alias magni quisquam.",
  },
  {
    Avatar: avatar5,
    c_name: "Mr Prince Daniels",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimavoluptate voluptates numquam iste quae similique neque Tempore veniam sint recusandae nisi sapiente assumenda explicabo ex omnis,ratione alias magni quisquam.",
  },
  {
    Avatar: avatar6,
    c_name: "Mr Selasi Worledzi",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minimavoluptate voluptates numquam iste quae similique neque Tempore veniam sint recusandae nisi sapiente assumenda explicabo ex omnis,ratione alias magni quisquam.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-5" id="testimonial">
      <h5>Review from clients</h5>
      <h2 className="text-light">Testimonials</h2>

      <Swiper className="container testimonial_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
            testimonial_data.map(({Avatar, c_name, review}, index) =>{
                return(
                    <SwiperSlide key={index} className="testimonials">   
                    <div className="client_avatar">
                      <img src={Avatar} alt="avatar" />
                    </div>
                    <h5 className="client_name">{c_name}</h5>
                    <small className="client_review">
                      {review}
                    </small>
                  </SwiperSlide>
                )
            })
        }

      </Swiper>
    </section>
  );
};

export default Testimonials;
