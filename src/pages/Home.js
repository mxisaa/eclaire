import './Home.css';
import heroImage from '../assets/hero.png';

function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="image-wrapper">
          <img src={heroImage} alt="Hero" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
      </div>

      <section className="about-section">
        <p>
        Nestled in the heart of the city, Éclaire is more than just a restaurant—it’s an invitation to experience the timeless elegance of French cuisine. Inspired by the rich culinary traditions of Parisian bistros and the refined artistry of haute cuisine, we craft each dish with passion, precision, and an unwavering commitment to quality. From delicate pastries to exquisitely plated entrées, every bite tells a story of indulgence. Whether you’re savoring a quiet morning espresso or enjoying a candlelit dinner, Éclaire offers a warm, sophisticated ambiance where every moment feels special. Welcome to Éclaire, where taste meets tradition and every meal is a masterpiece.
        </p>
        <button className='learn-more-button'><a href='/about'>Learn More</a></button>
      </section>

      <section className='more-info-section'>
        
      </section>
    </>
  );
}

export default Home;