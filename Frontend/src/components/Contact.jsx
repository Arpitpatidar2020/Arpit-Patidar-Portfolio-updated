import React, { useRef, useState } from 'react';
import '../styles/Contact.css';

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

const Contact = () => {
  const formRef = useRef(null);
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    let nextErrors = { name: '', email: '', phone: '', subject: '', message: '' };
    const fullNameRegex = /^[A-Za-z]{2,}(?:\s+[A-Za-z]{2,})+$/;
    if (!fullNameRegex.test(values.name.trim())) {
      nextErrors.name = 'Please enter your full name (first and last).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const phoneDigits = values.phone.replace(/\D/g, '');
    if (!/^\d{10}$/.test(phoneDigits)) {
      nextErrors.phone = 'Please enter a 10-digit mobile number.';
    }
    if (!values.subject.trim()) {
      nextErrors.subject = 'Please enter a subject.';
    }
    if (values.message.trim().length < 10) {
      nextErrors.message = 'Please enter at least 10 characters.';
    }
    setErrors(nextErrors);
    return (
      !nextErrors.name &&
      !nextErrors.email &&
      !nextErrors.phone &&
      !nextErrors.subject &&
      !nextErrors.message
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Message sent successfully! Please check your email.");
        setValues({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        alert("❌ Error: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Server error! Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>
      
      <div className="contact-info-row">
        <div className="contact-meta">
          <div className="contact-meta__content">
            <span className="contact-meta__icon"><i className="fa-solid fa-envelope"></i></span>
            <div className="contact-meta__details">
              <h3 className="contact-meta__title">Email</h3> 
              <a href="mailto:arpitpatidar851@gmail.com" className="contact-meta__value">
                <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>arpitpatidar851@gmail.com
              </a>
            </div>
          </div>
        </div>
      
        <div className="contact-meta">
          <div className="contact-meta__content">
            <span className="contact-meta__icon"><i className="fa fa-share-alt"></i></span>
            <div className="contact-meta__details">
              <h3 className="contact-meta__title">Social Profiles</h3> 
              <div className="social-links">
                <a href="https://www.facebook.com/arpit.patidar.7311?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                <a href="https://github.com/Arpitpatidar2020"><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/arpit_patidar2020?igsh=MW8yaTl5Y210MDNlag=="><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/arpit-patidar-32205724b"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://t.me/Arpitpatidar_2020"><i className="fab fa-telegram-plane"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>     

      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        <div className="input-box">
          <div className="field-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={values.name}
              onChange={handleChange}
              required
              className={errors.name ? 'field-error' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="field-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={values.email}
              onChange={handleChange}
              required
              className={errors.email ? 'field-error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
        </div>

        <div className="input-box">
          <div className="field-group">
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={values.phone}
              onChange={handleChange}
              required
              className={errors.phone ? 'field-error' : ''}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <div className="field-group">
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              value={values.subject}
              onChange={handleChange}
              required
              className={errors.subject ? 'field-error' : ''}
            />
            {errors.subject && <span className="error-text">{errors.subject}</span>}
          </div>
        </div>

        <div className="field-group full-width">
          <textarea
            name="message"
            placeholder="Your Message"
            value={values.message}
            onChange={handleChange}
            required
            className={errors.message ? 'field-error' : ''}
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        <input type="submit" value={loading ? "Sending..." : "Send Message"} className="btn" disabled={loading} />
      </form>
    </section>
  );
};

export default Contact;

