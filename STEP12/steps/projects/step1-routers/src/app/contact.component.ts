import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  template: `
    <section class="contact-section">
      <div class="container">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out via the form below or through my email and
          social profiles.
        </p>

        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          class="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div class="contact-info">
          <p>
            Email:
            <a href="mailto:youremail@example.com">youremail{{ emial }}</a>
          </p>
          <p>
            LinkedIn:
            <a href="https://linkedin.com/in/yourprofile" target="_blank"
              >linkedin.com/in/yourprofile</a
            >
          </p>
          <p>
            GitHub:
            <a href="https://github.com/yourusername" target="_blank"
              >github.com/yourusername</a
            >
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }

      .contact-section {
        padding: 40px 20px;
        background-color: #fff;
        max-width: 700px;
        margin: 0 auto;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      }

      .container {
        text-align: center;
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 20px;
      }

      .contact-form input,
      .contact-form textarea {
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 6px;
        width: 100%;
        font-size: 16px;
      }

      .contact-form button {
        background-color: #007bff;
        color: #fff;
        padding: 12px;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
      }

      .contact-form button:hover {
        background-color: #0056b3;
      }

      .contact-info {
        margin-top: 30px;
        font-size: 16px;
      }

      .contact-info a {
        color: #007bff;
        text-decoration: none;
      }

      .contact-info a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class ContactComponent {
  title = 'Contact';
  emial = '@example.com';
}
