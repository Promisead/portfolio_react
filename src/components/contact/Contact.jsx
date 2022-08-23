import React, { useRef } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const handleClick = (e) => {
    alert('Message Sent!');
  };

  const sendEmail = (e) => {
    e.preventDefault();
    //  form.current.reset(e);
    // e.target.reset();

    emailjs
      .sendForm(
        'service_xwxc4ui',
        'template_y2deibh',
        form.current,
        's5XWvVJMHRbTuB8Em'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>promiseduke@gmail.com</h5>
            <a
              href="mailto:promiseduke@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send a mail
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Promise Champion</h5>
            <a
              href="https://m.me/promisedukeac"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2348106530608</h5>
            <a
              href="https://api.whatsapp.com/send?phone=2348106530608&text=Welcome%2C%20from%20Promise%20Champion"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* End Of Contact Option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Leave a message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => handleClick()}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
