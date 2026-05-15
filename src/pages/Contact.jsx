import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import { useState } from 'react';
import Carousel from './Carousel';


const Contact = () => {
      
    const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    console.log(form);
  };



  return (
    <div>
        <Carousel/>
        <div className="contact-section py-5">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="fw-bold text-warning">Contact Trendy Swag</h2>
          <p className="text-light">We’d love to hear from you!</p>
        </div>

        <div className="row g-4">

          {/* Contact Form */}
          <div className="col-12 col-md-7">
            <form className="p-4 contact-form" onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label text-light">Name</label>
                <input
                  type="text"
                  className="form-control contact-input"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Email</label>
                <input
                  type="email"
                  className="form-control contact-input"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Phone</label>
                <input
                  type="tel"
                  className="form-control contact-input"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Subject</label>
                <input
                  type="text"
                  className="form-control contact-input"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light">Message</label>
                <textarea
                  className="form-control contact-input"
                  rows="4"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button className="btn btn-warning w-100 fw-bold">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-5">
            <div className="p-4 contact-info h-100">

              <h5 className="text-warning fw-bold mb-3">
                Get in Touch
              </h5>

              <p className="text-light">
                📍 Location: Coimbatore, Tamil Nadu, India
              </p>

              <p className="text-light">
                📞 Phone: +91 98765 43210
              </p>

              <p className="text-light">
                📧 Email: support@trendyswag.com
              </p>

              <hr className="border-secondary" />

              <p className="text-light small">
                Trendy Swag – Your style, your swag 😎
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact