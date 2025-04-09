import './Home.css';
import heroImage from '../assets/hero.png';
import Michelin from '../assets/Michelin.png';
import feature1 from '../assets/feature-1.png';
import feature2 from '../assets/feature-2.png';
import feature3 from '../assets/feature-3.png';
import feature4 from '../assets/feature-4.png';


function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="image-wrapper">
          <img src={heroImage} alt="Hero" className="hero-image" />
          <div className="hero-reserve-box">
          <p className="reserve-text">welcome</p>
          <button className="reserve-button-mid">Reserve</button>
       </div>
          <div className="hero-overlay"></div>
        </div>
      </div>

      <section className="about-section">
        <p>
        Nestled in the heart of the city, Éclaire is more than just a restaurant—it’s an invitation to experience the timeless elegance of French cuisine. Inspired by the rich culinary traditions of Parisian bistros and the refined artistry of haute cuisine, we craft each dish with passion, precision, and an unwavering commitment to quality. From delicate pastries to exquisitely plated entrées, every bite tells a story of indulgence. Whether you’re savoring a quiet morning espresso or enjoying a candlelit dinner, Éclaire offers a warm, sophisticated ambiance where every moment feels special. Welcome to Éclaire, where taste meets tradition and every meal is a masterpiece.
        </p>
        <button className='learn-more-button'><a href='/about'>Learn More</a></button>
      </section>

      <section className="feature-section">
  {/* Top Left */}
  <div className="tile">
    <div className='tile image-row'>
    <img src={feature1} alt="Restaurant exterior" />
    <img src={feature2} alt="Inside the restaurant" />
    </div>
  </div>
  {/* Top Right */}
  <div className="tile offer-box">
    <h2>what we offer</h2>
    <hr className="offer-divider" />
    <div className='offer-content'>
    <p>
    Discover the flavors of Éclaire—where every dish is crafted with elegance and authenticity. From exquisite entrées to indulgent desserts, our menu is a celebration of French culinary artistry. Whether you're here for a light lunch, an intimate dinner, or a refreshing drink, you'll find something to savor. Explore our menu and let your taste buds embark on a journey through Parisian excellence.
    </p>
    <button className="menu-button">Menu</button>
    </div>
  </div>
  {/* Bottom Left */}
  <div className="tile recognition-tile">
    <h2 className="recognition-heading">recognition</h2>
    <div className="michelin-badge">
      <img src={Michelin} alt="Michelin Star 2024" />
    </div>
    <div className="divider"></div>
  </div>
  {/* Top Right */}
  <div className="tile image-row">
    <img src={feature3} alt="Dish two" />
    <img src={feature4} alt="Pouring wine" />
  </div>
</section>
    </>
  );
}

export default Home;