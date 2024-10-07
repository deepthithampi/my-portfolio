
import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers'; 
import '../styles/Contact.css';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage('Name is required');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    if (!message) {
      setErrorMessage('Message is required');
      return;
    }

    alert(`Thank you, ${name}, for your message!`);
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div className="container text-center">
      <h1>Contact Me</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
         
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <br>
        </br>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <br>
        </br>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Your message"
        />
        <br>
        </br>
        <button type="submit">Send Message</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: <a href="mailto:deepthi_thampi@hotmail.com">deepthi_thampi@hotmail.com</a></p>
        <p>Phone: <a href="tel:+3145859891">+1-314-585-9891</a></p>
      </div>
    </div>
  );
}

export default Contact;