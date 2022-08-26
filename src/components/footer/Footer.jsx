import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Promise Champion
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Promisead" target="_blank">
          <FaGithub />
        </a>
        <a href="https://twitter.com/promisedukeac" target="_blank">
          <AiFillTwitterSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/promise-duke-a0020656/"
          target="_blank"
        >
          <AiOutlineLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Promise Champion. All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
