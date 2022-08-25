import React from 'react';
import './Testimonials.css';
import avt1 from '../../assets/avatar1.jpg';
import avt2 from '../../assets/avatar2.jpg';
import avt3 from '../../assets/avatar3.jpg';
import avt4 from '../../assets/avatar4.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const data = [
  {
    avatar: avt1,
    name: 'Lister Mwewah',
    review:
      'With Champion’s help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Promise Champion!',
  },
  {
    avatar: avt2,
    name: 'Blissful B',
    review:
      'From the start of the project, through to completion, Promise Champion supported us and exceeded our expectations in every way.His great ability to identify and present our key messages in an imaginative and creative way gave us a huge amount of confidence in him. He is reliable, professional and easy to work with. I can’t recommend him highly enough and we look forward to continuing our working relationship together.',
  },
  {
    avatar: avt4,
    name: 'Sean Diapper',
    review:
      'Thank you Team Champion for the outstanding professional job you did for us! I highly recommend you for the quality and professionalism that I experienced',
  },
  {
    avatar: avt3,
    name: 'Isaac Wondaz',
    review:
      'Working with The Champions Academy as a  tutor and UI/UX Designer has been one of the most important decisions I have taken. The team has been wonderful and responsible. I am able to work conveniently especially when I get to meet with the most amazing set of kids. This is the highlight of my work. Also I need to say The Champions  has the best tech trainers you can find.',
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__review"> {name} </h5>
              <small>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
