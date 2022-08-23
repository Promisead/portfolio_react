import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/promise-duke-a0020656/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Promisead" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/promisedukeac" target="_blank">
        <FaTwitterSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
