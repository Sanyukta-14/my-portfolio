import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-heading">
        <span className="section-tag">LET'S CONNECT</span>
        <h1>Get In <span>Touch</span></h1>
        <p>
          Have an opportunity, project idea or simply want to connect?
          I'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's create something meaningful.</h2>
          <p>
            I'm always interested in learning, collaborating and
            exploring new opportunities in technology.
          </p>

          <div className="contact-detail">
            <span className="contact-icon">✉️</span>
            <div>
              <h3>Email</h3>
              <a href="mailto:sanyuktanagvekar7@gmail.com">
                sanyuktanagvekar7@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">💻</span>
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/Sanyukta-14"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Sanyukta-14
              </a>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          action="mailto:sanyuktanagvekar7@gmail.com"
          method="post"
          encType="text/plain"
        >
          <h2>Send a Message</h2>

          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="Name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="Message"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">Send Message ↗</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;