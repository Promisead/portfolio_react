import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './Services.css';
const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>IT TRAINING</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Identifying client's educational needs and delivering according
                to their expected skillsets requirements.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Designing educational materials and ensuring clients take basic
                computer training.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Teaching technical experts about new skills, such as new
                programming languages, and information security measures.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Coach, Mentor and impact young minds on the neccessity of Tech
                skills on science, technology, engineering, and mathematics
                (STEM).
              </p>
            </li>
          </ul>
        </article>
        {/* End of IT Trainer */}

        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Writing and reviewing codes for dynamic websites.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Applied unit and integration testing methodologies for CRUD
                Applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Handling and logging Errors,Test-driven Testing (TDD) for Web
                Applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Managed data validation, authentication and authorization for
                complex Websites.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Handled deployments, commits and updates based on standard
                version control systems.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Troubleshooting problems with performance or user experience.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Collaborating with designers, developers, and stakeholders.{' '}
              </p>
            </li>
          </ul>
        </article>
        {/* End of  Web Development */}

        <article className="services">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {' '}
                Writing high-quality code to program complete applications on
                schedule.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Understanding client requirements and how they translate to new
                application features.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Responsible for developing, coding, testing, and maintaining new
                and existing mobile applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                {' '}
                partner with other developers (internal and contract) when
                applicable.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Collaborate with Ecommerce, Marketing, and Creative departments
                to identify and plan for new features.
              </p>
            </li>
          </ul>
        </article>
        {/* End of Mobile Development */}
      </div>
    </section>
  );
};

export default services;
