import React from 'react';
import './topsocials.css'
import {FaLinkedin} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa';


const TopSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/emmanuel-dogbe-0bb33a236' target={'_blank'} rel="noreferrer"><FaLinkedin/></a>
        <a href='https://github.com/dogbemmanuel' target={'_blank'} rel="noreferrer"><FaGithubSquare/></a>
        <a href='https://www.facebook.com/zabio.henandez' target={'_blank'} rel="noreferrer"><FaFacebookSquare/></a>
    </div>
  )
};

export default TopSocials;