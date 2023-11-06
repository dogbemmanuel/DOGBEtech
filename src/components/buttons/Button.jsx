import React from 'react'
import './button.css'
import EmmanuelDogb_Resume from '../../assets/CV.docx';


const Button = () => {
  return (
    <div className='CTA'>
        <a  href= {EmmanuelDogb_Resume} download className='btn'>Download CV</a>
        <a  href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Button