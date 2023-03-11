import React from 'react';
import './header.css';
import Button from '../buttons/Button';
import me1 from '../../assets/me1.png';
import TopSocials from './TopSocials';


const Header = () => {
    return(
        <section className='section-1'>
            <div className='container header__container' id='home'>
                <h5><span>Hello,</span> I'm</h5>
                <h1>Emmanuel Dogbe</h1>
                <h5 className='text-light'>FrontEnd Software Developer</h5>
                <Button/>
                <TopSocials/>
                <div className="me">
                    <img src={me1} alt='emma'/>
                </div>
                <a href='#footer1'  className='scroll__down'>Scroll down</a>
            </div>
        </section>
    )
}

export default Header;