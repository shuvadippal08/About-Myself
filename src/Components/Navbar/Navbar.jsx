import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/3d-square-logo/logo.jpg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

function Navbar() {
  const [menu, setMenu] = useState('');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0px';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className='navbar'>
      <img src={logo} alt='logo' style={{ width: '50px', height: 'auto' }} />

      {/* 📱 Mobile menu open button */}
      <img src={menu_open} alt='open' className='nav-mob-open' onClick={openMenu} />

      {/* 🚪 Slide Menu */}
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} alt='close' className='nav-mob-close' onClick={closeMenu} />
        
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu('about')}>About Me</p>
          </AnchorLink>
          {menu === 'about' && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => setMenu('work')}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' && <img src={underline} alt='' />}
        </li>
      </ul>

      {/* Desktop CTA */}
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Contact With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
