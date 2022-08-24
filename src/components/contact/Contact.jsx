import React, { useRef, useState } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Contact = () => {
  const [fullname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
    toast.success('Thanks for Contacting Promise Champion!');

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
            onChange={(event) => setName(event.target.value)}
            value={fullname}
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="user_email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            onChange={(event) => setMessage(event.target.value)}
            value={message}
            rows="7"
            placeholder="Leave a message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <ToastContainer />
        </form>
      </div>
    </section>
  );
};
