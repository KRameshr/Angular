import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  template: `
    <p>{{ title }}</p>
    <section class="product-section">
      <div class="container">
        <h2>My Products</h2>
        <p class="intro">
          Explore the creative assets and tools I offer, crafted using Adobe and
          web technologies.
        </p>

        <div class="product-grid">
          <!-- Product Card 1 -->
          <div class="product-card">
            <img src="photoshop-template.jpg" alt="Photoshop Template" />
            <h3>Photoshop Template</h3>
            <p>
              High-quality PSD template for banners and social media posts.
              Fully editable and layered.
            </p>
            <a href="#" class="btn">View Details</a>
          </div>

          <!-- Product Card 2 -->
          <div class="product-card">
            <img src="logo-pack.jpg" alt="Logo Pack" />
            <h3>Logo Pack</h3>
            <p>
              A set of 10 vector logos designed in Adobe Illustrator — ideal for
              branding projects.
            </p>
            <a href="#" class="btn">View Details</a>
          </div>

          <!-- Product Card 3 -->
          <div class="product-card">
            <img src="portfolio-template.jpg" alt="Web Template" />
            <h3>React Portfolio Template</h3>
            <p>
              A modern portfolio website template built with React and Tailwind
              CSS. Clean and responsive.
            </p>
            <a href="#" class="btn">View Details</a>
          </div>

          <!-- Product Card 4 -->
          <div class="product-card">
            <img src="video-promo.jpg" alt="Video Promo" />
            <h3>Video Promo</h3>
            <p>
              Editable Adobe Premiere Pro project file for product promo videos
              or intros.
            </p>
            <a href="#" class="btn">View Details</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `.product-section {
  padding: 60px 20px;
  background-color: #f4f4f4;
  max-width: 1200px;
  margin: auto;
}

.product-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.intro {
  text-align: center;
  color: #555;
  margin-bottom: 40px;
}

.product-grid {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.product-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.07);
  overflow: hidden;
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 15px;
}

.product-card h3 {
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #007bff;
}

.product-card p {
  font-size: 1rem;
  color: #333;
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.95rem;
}

.btn:hover {
  background-color: #0056b3;
}
`,
})
export class ProductsComponent {
  title = 'Product';
}
