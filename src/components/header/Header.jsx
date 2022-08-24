import React from 'react';
import Typical from 'react-typical';

import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Promise Duke</h1>
        <div style={{ color: 'whitesmoke' }} className="text-light">
          {''}
          <Typical
            steps={[
              'Enthusiatic Dev 🌝',
              1000,
              'Fullstack Developer ⌨️',
              1000,
              'MERN Dev 😎',
              1000,
              'Cross Platform Dev 🌐',
              1000,
              'Mobile App Dev 📱',
              1000,
              'IT Trainer 📖',
              1000,
            ]}
            loop={Infinity}
            wrapper="h3"
          />
        </div>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
