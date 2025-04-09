import aboutHero from '../assets/about-hero.png';
import Chef from '../assets/chef.png';
import Server from '../assets/server.png';
import Quote from '../assets/quote.png';


import './About.css';
function About() {
  return (
    <>
<section className="about-hero-section">
  <img src={aboutHero} alt="About hero" />
</section>

<section className="about-grid-section">
  <div className="grid-item image">
    <img src={Chef} alt="Chef preparing food" />
  </div>

  <div className="grid-item quote">
    <blockquote>
      <img src={Quote} alt="Quotation mark" className="quote-mark" />
      <hr className="quote-divider" />
      <p>
      Nestled in the heart of Paris, Éclaire is a celebration of timeless French elegance and culinary artistry. Inspired by the charm of Parisian cafés and the sophistication of fine dining, we craft each dish with passion, using only the finest ingredients. From delicate pastries to expertly prepared entrées, our menu reflects a deep respect for tradition while embracing modern creativity. Whether you're here for an intimate dinner, a leisurely lunch, or a moment of indulgence, Éclaire offers a dining experience that is both refined and inviting.
      </p>
      <hr className="quote-divider" />
    </blockquote>
  </div>

  <div className="grid-item quote">
    <blockquote>
      <img src={Quote} alt="Quotation mark" className="quote-mark" />
      <hr className="quote-divider" />
      <p>
      At Éclaire, we believe that dining is more than just a meal—it’s an experience meant to be savored. Our carefully curated ambiance, from soft candlelight to warm gold accents, sets the stage for unforgettable moments. Whether you're sipping on a glass of Bordeaux or enjoying a decadent dessert, every detail is designed to transport you to the heart of France. Join us and discover the art of French dining, where every bite tells a story.
      </p>
      <hr className="quote-divider" />
    </blockquote>
  </div>

  <div className="grid-item image">
    <img src={Server} alt="Server with drinks" />
  </div>
</section>
    </>
  
  );
}

export default About;