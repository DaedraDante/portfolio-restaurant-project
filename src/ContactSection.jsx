function ContactSection() {
  return (
    <section className="contact-section" id="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactSection;
