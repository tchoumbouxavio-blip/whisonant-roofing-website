// ==================================
// index.html
// ==================================

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Whisonant Roofing Co.</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <header>
    <div class="container nav">
      <h1>Whisonant Roofing Co.</h1>

      <nav>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container hero-content">
      <div>
        <p class="tag">Trusted Roofing Services in Maryland</p>

        <h2>
          Strong Roofs.<br>
          Reliable Service.
        </h2>

        <p class="hero-text">
          Residential and commercial roofing services in Upper Marlboro and surrounding Maryland communities.
        </p>

        <div class="buttons">
          <a href="tel:3019521933" class="btn primary">Call Now</a>
          <a href="#contact" class="btn secondary">Free Estimate</a>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1632759145351-1d5928c1b1c4?q=80&w=1400&auto=format&fit=crop"
        alt="Roofing"
      />
    </div>
  </section>

  <section id="about" class="section light">
    <div class="container grid">
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
        alt="Roof Installation"
      />

      <div>
        <h3>About Our Company</h3>

        <p>
          Whisonant Roofing Co. is a roofing contractor based in Upper Marlboro, Maryland, serving homeowners and businesses with dependable roofing and exterior services.
        </p>

        <p>
          The company focuses on quality workmanship, professional communication, and long-lasting roofing solutions.
        </p>

        <div class="features">
          <div class="feature-card">
            <h4>Licensed</h4>
            <p>Maryland Roofing Contractor</p>
          </div>

          <div class="feature-card">
            <h4>Experienced</h4>
            <p>Residential & Commercial Services</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="section">
    <div class="container">
      <div class="section-header">
        <h3>Our Services</h3>
        <p>Roofing and exterior solutions built for durability and protection.</p>
      </div>

      <div id="services-container" class="cards"></div>
    </div>
  </section>

  <section id="reviews" class="section dark">
    <div class="container">
      <div class="section-header white-text">
        <h3>Customer Reviews</h3>
        <p>Feedback from local homeowners and clients.</p>
      </div>

      <div id="reviews-container" class="cards"></div>
    </div>
  </section>

  <section id="contact" class="section">
    <div class="container contact-grid">
      <div>
        <h3>Contact Us</h3>

        <div class="contact-item">
          <strong>Phone:</strong>
          <a href="tel:3019521933">(301) 952-1933</a>
        </div>

        <div class="contact-item">
          <strong>Address:</strong>
          <p>3305 Geaton Drive, Upper Marlboro, MD 20774</p>
        </div>
      </div>

      <form class="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number" required />
        <textarea placeholder="Tell us about your roofing project"></textarea>

        <button type="submit">Submit Request</button>
      </form>
    </div>
  </section>

  <footer>
    <div class="container footer-content">
      <div>
        <h4>Whisonant Roofing Co.</h4>
        <p>Professional Roofing Services in Maryland</p>
      </div>

      <div>
        <p>(301) 952-1933</p>
        <p>Upper Marlboro, Maryland</p>
      </div>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>

// ==================================
// style.css
// ==================================

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  color: #111827;
  line-height: 1.6;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  z-index: 1000;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: #111827;
  font-weight: 600;
}

.hero {
  background: linear-gradient(to right, #020617, #1e293b);
  color: white;
  padding: 140px 0 80px;
}

.hero-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  align-items: center;
}

.hero img,
.grid img {
  width: 100%;
  border-radius: 24px;
}

.tag {
  color: #facc15;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 20px;
}

.hero h2 {
  font-size: 4rem;
  line-height: 1.1;
  margin-bottom: 20px;
}

.hero-text {
  color: #cbd5e1;
  margin-bottom: 30px;
  font-size: 1.2rem;
}

.buttons {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 14px 28px;
  border-radius: 14px;
  text-decoration: none;
  font-weight: bold;
}

.primary {
  background: #facc15;
  color: black;
}

.secondary {
  border: 2px solid white;
  color: white;
}

.section {
  padding: 100px 0;
}

.light {
  background: #f8fafc;
}

.dark {
  background: #0f172a;
  color: white;
}

.grid,
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  align-items: center;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h3 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.card-content {
  padding: 25px;
}

.card-content h4 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.review-card {
  background: #1e293b;
  padding: 30px;
  border-radius: 24px;
}

.features {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.feature-card {
  background: white;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.contact-form {
  background: #f8fafc;
  padding: 30px;
  border-radius: 24px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 14px;
  margin-bottom: 15px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
}

.contact-form button {
  width: 100%;
  padding: 16px;
  background: #111827;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
}

footer {
  background: black;
  color: #cbd5e1;
  padding: 40px 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

@media (max-width: 768px) {
  .hero h2 {
    font-size: 2.8rem;
  }

  nav {
    display: none;
  }
}

// ==================================
// script.js
// ==================================

const services = [
  {
    title: 'Roof Replacement',
    description: 'Durable roof replacement solutions for residential and commercial properties.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Roof Repair',
    description: 'Leak repairs, storm restoration, and preventative roofing maintenance.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Roof Inspections',
    description: 'Professional inspections that help detect roofing issues early.',
    image: 'https://images.unsplash.com/photo-1523419409543-a5e549c1f6a6?q=80&w=1200&auto=format&fit=crop'
  }
];

const reviews = [
  'Professional in conversations before the work and during the project.',
  'Very knowledgeable and professional. Would call again.',
  'Courteous people and excellent workmanship.'
];

const servicesContainer = document.getElementById('services-container');
const reviewsContainer = document.getElementById('reviews-container');

services.forEach(service => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${service.image}" alt="${service.title}">
    <div class="card-content">
      <h4>${service.title}</h4>
      <p>${service.description}</p>
    </div>
  `;

  servicesContainer.appendChild(card);
});

reviews.forEach(review => {
  const card = document.createElement('div');
  card.classList.add('review-card');

  card.innerHTML = `
    <p>★★★★★</p>
    <br>
    <p>${review}</p>
  `;

  reviewsContainer.appendChild(card);
});

// ==================================
// HOW TO RUN
// ==================================
//
// 1. Create a folder
// 2. Add these files:
//    - index.html
//    - style.css
//    - script.js
// 3. Open index.html in a browser
//
// Optional deployment:
// Upload to Netlify, Vercel, or GitHub Pages.
