import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useAuthContext } from '../context/authContext';
import './ContactMe.css';

const ContactMe = () => {
  const { isAuthenticated, user } = useAuthContext();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData({
        user_name: user.username || '',
        user_email: user.email || '',
        message: '',
      });
    }
  }, [isAuthenticated, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_j8qdz4i',
      'template_5176ker',
      form.current,
      'kRVEvtSVLOfhvdRFv'
    ).then(() => {
      setStateMessage('Успешно изпратено съобщение!');
      setIsSubmitting(false);
      setTimeout(() => setStateMessage(null), 5000);
    }, () => {
      setStateMessage('Неуспешно изпратено съобщение.');
      setIsSubmitting(false);
      setTimeout(() => setStateMessage(null), 5000);
    });

    e.target.reset();
  };

  return (
    <div className="contact-me-wrapper">
      <div className="contact-me-container">
        <div className="contact-me-form">
          <h2>Свържи се с мен</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="user_name">Потребителско име:</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                disabled={isAuthenticated}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">Email:</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                disabled={isAuthenticated}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Съобщение:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" disabled={isSubmitting}>Изпрати</button>
            {stateMessage && <p className="state-message">{stateMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
