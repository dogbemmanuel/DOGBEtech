import React from 'react';
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

// import { useRef } from 'react';
// import emailjs from 'emailjs-com';



const Contact = () => {

  // FOR EMAILJS WILL USE IT LATER

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_qea77s8', 'template_d32s7nh', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset()
  // };

  return (
    <section className='section-6' id='contact'>
      <h5 data-aos="fade-up">Get In Touch</h5>
      <h2 className='text-light' data-aos="fade-up">Contact Me</h2>

      <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option" data-aos="zoom-in-up">
              <MdOutlineMailOutline className='contact_option_icon'/>
              <a href="mailto:dogbemanuel@gmail.com" target='_blank' rel='noreferrer' className='contact_link'>
              <h4>Email</h4>
              <h5>dogbemanuel@gmail.com</h5>
                Send a message
              </a>
            </article>
            <article className="contact_option" data-aos="zoom-in-up">
              <RiMessengerLine className='contact_option_icon'/>
              <a href="https://m.me/zabio.henandez" target='_blank' rel='noreferrer' className='contact_link'>
              <h4>Messenger</h4>
              <h5>Emmanuel Dogbe</h5>
                Send a message</a>
            </article>
            <article className="contact_option" data-aos="zoom-in-up">
              <BsWhatsapp className='contact_option_icon'/>
              <a href="https://api.whatsapp.com/send?phone=+233559193660" target='_blank' rel='noreferrer' className='contact_link'>
              <h4>WhatsApp</h4>
              <h5>+123456789</h5>
                Send a message</a>
            </article>

          </div>

          {/* END OF CONTACT OPTIONS */}


                {/* FOR ACTION FIELD WILL USE LATER */}
          {/* ref={form} onSubmit={sendEmail} */}
          <form action='' data-aos="zoom-in-up">
            <input type="text" name='name' placeholder='Your full name' required />
            <input type="email" name='email' placeholder='Your email' required />
            <textarea name="message" rows="7" placeholder='Your message' required></textarea>
            <button type='submit' className='btn btn-primary' data-aos="fade-up">Send message</button>
          </form>

      </div>
    </section>
  )
}

export default Contact;