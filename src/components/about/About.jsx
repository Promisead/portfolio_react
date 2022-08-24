import React from 'react';
import './About.css';
import ME from '../../assets/about3.png';
import { FiAward } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
import { VscProject } from 'react-icons/vsc';

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about-icon" />
              <h5>Experience</h5>
              <small>4+ Years Working </small>
            </article>

            <article className="about__card">
              <FaUsers className="about-icon" />
              <h5>Clients</h5>
              <small>10+ Nationwide </small>
            </article>

            <article className="about__card">
              <VscProject className="about-icon" />
              <h5>Projects</h5>
              <small>20+ completed </small>
            </article>
          </div>

          <p>
            Experienced web developer with a strong background in developing
            award-winning applications for a diverse clientele. 4+ years of
            industry experience includes programming, debugging, and IT
            training. Received 80%+ experience scores on every web application
            built.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
