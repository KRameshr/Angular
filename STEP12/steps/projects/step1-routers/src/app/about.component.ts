import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  template: `
    <section class="about-section">
      <div class="container">
        <h2>About Me</h2>
        <div class="about-content">
          <img src="your-photo.jpg" alt="Ramesh Profile" class="profile-img" />
          <div class="about-text">
            <p>
              Hello! I’m <strong>Ramesh</strong>, a B.Tech student in Electrical
              and Electronics Engineering at MITS with a CGPA of 7.8. I'm
              passionate about web development and emerging technologies.
            </p>

            <p>
              I have hands-on experience with the MERN stack—MongoDB,
              Express.js, React, and Node.js. I recently interned at Intellipaat
              as a Full Stack Developer, where I contributed to dynamic web
              application development and UI design.
            </p>

            <p>
              My goal is to build impactful digital solutions and continuously
              grow as a developer by learning new tools and frameworks. Outside
              coding, I enjoy exploring new tech, participating in hackathons,
              and collaborating on open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <address>
      <a href="mailto:roodang@smail.com">roodang{{ email }}</a
      ><br />
      <a href="tel:+13165552398">(316).555.2398 </a>
      Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br />
      Visit us at:<br />
      Example.com<br />
      Box 564, Disneyland<br />
      USA
    </address>
  `,
  styles: `.about-section {
  padding: 50px 20px;
  background-color: #fff;
  max-width: 900px;
  margin: auto;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0,0,0,0.05);
}

.about-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.profile-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #007bff;
}

.about-text {
  max-width: 700px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  text-align: center;
}

@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
    text-align: left;
  }

  .about-text {
    text-align: left;
  }
}
`,
})
export class AboutComponent {
  title = 'Components';
  email = '@smail.com';
}
