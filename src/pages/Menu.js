import React, { useState } from 'react';
import './Menu.css';
import MenuHero from '../assets/menu-hero.png';

function Menu() {
  const [activeTab, setActiveTab] = useState('lunch');

  const menuData = {
    lunch: (
      <>
        <div className="menu-column">
          <p class='menu-heading'>entrées</p>
          <p><strong>Soupe À l’Oignon Gratinée</strong><br />Traditional French onion soup, slow-cooked with caramelized onions, rich beef broth, and topped with melted Gruyère cheese. 
$14</p>
          <p><strong>Saumon Fumé sur Blini</strong><br />Smoked salmon... — $18</p>
        </div>
        <div className="menu-column">
        <p class='menu-heading'>mains</p>
          <p><strong>Croque Madame</strong><br />Buttery toasted brioche... — $21</p>
          <p><strong>Quiche Lorraine</strong><br />Classic French quiche... — $19</p>
        </div>
      </>
    ),
    dinner: (
      <>
        <div className="menu-column">
        <p class='menu-heading'>entrées</p>
          <p><strong>Foie Gras au Cognac</strong><br />Seared foie gras... — $28</p>
          <p><strong>Tartare de Boeuf</strong><br />Hand-chopped prime beef... — $26</p>
        </div>
        <div className="menu-column">
        <p class='menu-heading'>salads</p>
          <p><strong>Salade de Homard</strong><br />Lobster salad... — $25</p>
          <p><strong>Salade Lyonnaise</strong><br />Frisée lettuce with poached egg... — $20</p>
        </div>
      </>
    ),
    drinks: (
      <>
        <div className="menu-column">
        <p class='menu-heading'>juices</p>
          <p><strong>Château Margaux</strong><br />Bordeaux — $25/glass</p>
        </div>
        <div className="menu-column">
        <p class='menu-heading'>sodas & water</p>
          <p><strong>French 75</strong><br />Gin, lemon, champagne — $16</p>
        </div>
      </>
    )
  };

  return (
    <section className="menu-section">
      <img src={MenuHero} alt="Menu Header" className="menu-hero-img" />

      <h2 className="menu-title">what we offer...</h2>

      <div className="tab-buttons">
        <button
          className={activeTab === 'lunch' ? 'active' : ''}
          onClick={() => setActiveTab('lunch')}
        >
          Lunch
        </button>
        <button
          className={activeTab === 'dinner' ? 'active' : ''}
          onClick={() => setActiveTab('dinner')}
        >
          Dinner
        </button>
        <button
          className={activeTab === 'drinks' ? 'active' : ''}
          onClick={() => setActiveTab('drinks')}
        >
          Drinks
        </button>
      </div>

      <div className="menu-items">
        {menuData[activeTab]}
      </div>
    </section>
  );
}

export default Menu;