import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  template: `
    <p>{{ title }}</p>
    <section class="hero-only">
      <div class="hero-content">
        <h1>Welcome!</h1>
        <p>I’m Ramesh, a Full Stack Developer and Adobe Creative Expert.</p>
        <a href="contact.html" class="btn">Contact Me</a>
      </div>
    </section>
    <section class="about-section">
      <div class="about-wrapper">
        <h2>About Me</h2>
        <p>
          Hi! I’m <strong>Ramesh</strong>, a B.Tech student in Electrical and
          Electronics Engineering at MITS with a CGPA of 7.8. I'm passionate
          about technology, full stack web development, and digital design.
        </p>

        <p>
          I’ve worked with the MERN stack and have hands-on experience using
          Adobe Photoshop, Illustrator, and Premiere Pro to create visually
          compelling content and interfaces.
        </p>

        <p>
          My goal is to combine logic with creativity to build engaging and
          functional digital experiences.
        </p>
      </div>
    </section>
  `,
  styles: `body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.hero-only {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #007bff, #00c6ff);
  color: white;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.about-section {
  max-width: 800px;
  margin: 60px auto;
  padding: 0 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
}

.about-wrapper h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

.about-wrapper p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  color: #007bff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #e6e6e6;
}
`,
})
export class HomeComponent {
  title = 'Home';
}
