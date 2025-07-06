import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: false,
  template: `
    <p>{{ title }}</p>
    <h3>Qutity : {{ stock === '' ? 'not sent' : stock }}</h3>

    <section class="services-section">
      <div class="container">
        <h2>My Services</h2>
        <p class="intro">
          Here are some of the services I offer, combining technical skills with
          creativity.
        </p>

        <div class="services-grid">
          <div class="service-card">
            <img src="photoshop-icon.png" alt="Photoshop" />
            <h3>Adobe Photoshop</h3>
            <p>
              Professional image editing, retouching, UI mockups, and banner
              designs using Photoshop.
            </p>
          </div>

          <div class="service-card">
            <img src="illustrator-icon.png" alt="Illustrator" />
            <h3>Adobe Illustrator</h3>
            <p>
              Logo creation, vector illustrations, posters, and branding assets
              with clean and modern design.
            </p>
          </div>

          <div class="service-card">
            <img src="premierepro-icon.png" alt="Premiere Pro" />
            <h3>Video Editing</h3>
            <p>
              High-quality video editing for reels, promos, and presentations
              using Adobe Premiere Pro.
            </p>
          </div>

          <div class="service-card">
            <img src="webdev-icon.png" alt="Web Development" />
            <h3>Full Stack Web Development</h3>
            <p>
              Building responsive and dynamic websites using the MERN stack
              (MongoDB, Express, React, Node.js).
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `.services-section {
  padding: 60px 20px;
  background-color: #f9f9f9;
  max-width: 1100px;
  margin: auto;
}

.services-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.intro {
  text-align: center;
  color: #555;
  margin-bottom: 40px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.service-card {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0,0,0,0.05);
  text-align: center;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
}

.service-card img {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
}

.service-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #007bff;
}

.service-card p {
  font-size: 1rem;
  color: #333;
}
`,
})
export class ServicesComponent {
  title = 'Service';
  stock = '';
  constructor(private ar: ActivatedRoute) {}
  ngOnInit() {
    this.stock = this.ar.snapshot.params['quantity'];
  }
}
