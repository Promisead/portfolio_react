import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Youtube Clone',
    github: 'https://github.com/Promisead/youtube_clone2',
    demo: 'https://youtube-clone-promisead.vercel.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Musical Ecommerce Website',
    github: 'https://github.com/Promisead/cloudinary-ecommerce',
    demo: 'https://solidlinks.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'NFT Crypto Tracker',
    github: 'https://github.com/Promisead/crypto_tracker',
    demo: 'https://crypto-tracker-phi-five.vercel.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'AGENCY WEB APP (NEXTJS) ',
    github: 'https://github.com/Promisead/next_agency',
    demo: 'https://next-agency-iota.vercel.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'CHAT APP',
    github: 'https://github.com/Promisead/mern_chat',
    demo: 'https://avatar-chat.netlify.app/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'INSTAGRAM FEATURES',
    github: 'https://github.com/Promisead/chatapp_instagram_features',
    demo: '#',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div portfolio__item-image>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
