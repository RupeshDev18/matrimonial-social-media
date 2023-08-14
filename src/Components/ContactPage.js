import React from 'react';

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to get in touch with us:</p>
      <div className="contact-info">
        <p>Email: your@email.com</p>
        <p>Phone: +123456789</p>
        <p>Address: 123 Main St, City</p>
      </div>
      <form className="contact-form">
        {/* Implement your contact form */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
