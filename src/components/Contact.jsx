import { useState } from "react";
import "../styles/Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setSuccess("Message sent successfully! 🎉");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Send Message</button>

        {success && <p className="success-msg">{success}</p>}
      </form>
    </section>
  );
}

export default Contact;