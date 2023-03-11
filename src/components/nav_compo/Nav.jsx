import React from 'react';
import './nav.css'
import {FaHome} from 'react-icons/fa';
import {HiUserCircle} from 'react-icons/hi';
import {BsFillBookmarkStarFill} from 'react-icons/bs';
import {MdOutlineMiscellaneousServices} from 'react-icons/md';
import {HiUserAdd} from 'react-icons/hi';
import { useState } from 'react';



const Nav = () => {
  const [activeNav, setAtiveNav] = useState('#')
  return (
    <nav>
      <a href='#home' onClick={()=> setAtiveNav('#')} className={activeNav === '#' ? 'active': ''}><FaHome/></a>
      <a href='#about' onClick={()=> setAtiveNav('#about')} className={activeNav === '#about' ? "active" : ''}><HiUserAdd/></a>
      <a href='#experience'onClick={()=> setAtiveNav('#experience')} className={activeNav === '#experience' ? "active" : ''}><BsFillBookmarkStarFill/></a>
      <a href='#service'onClick={()=> setAtiveNav('#service')} className={activeNav === '#service' ? "active" : ''}><MdOutlineMiscellaneousServices/></a>
      <a href='#contact'onClick={()=> setAtiveNav('#contact')} className={activeNav === '#contact' ? "active" : ''}><HiUserCircle/></a> 
    </nav>
  )
};

export default Nav;
