import React, { useState } from 'react';
import './Menu.css';
import MenuHero from '../assets/menu-hero.png';

function Menu() {
  const [activeTab, setActiveTab] = useState('lunch');

  const menuData = {
    lunch: (
      <>
      <div className="menu-columns">
        <div className="menu-column">
          <p className="menu-heading">entrées</p>
          <hr className="menu-divider" />
    
          <div className="menu-item">
            <p className="dish-name"><strong>Soupe à l'Oignon Gratinée</strong></p>
            <p>Traditional French onion soup, slow-cooked with caramelized onions, rich beef broth, and topped with melted Gruyère cheese.</p>
            <p><strong>$14</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Tartelette de Chèvre et Miel</strong></p>
            <p>Warm goat cheese tart with a drizzle of lavender honey, served on a bed of arugula.</p>
            <p><strong>$16</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Saumon Fumé sur Blini</strong></p>
            <p>Smoked salmon on delicate buckwheat blinis, with crème fraîche and fresh dill.</p>
            <p><strong>$18</strong></p>
          </div>
    
          <p className="menu-heading">salads</p>
          <hr className="menu-divider" />
    
          <div className="menu-item">
            <p className="dish-name"><strong>Salade Niçoise</strong></p>
            <p>Seared tuna, haricots verts, olives, and heirloom tomatoes with a Dijon vinaigrette.</p>
            <p><strong>$22</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Salade Éclaire</strong></p>
            <p>Baby greens, poached pears, candied walnuts, and Roquefort cheese, tossed in a champagne vinaigrette.</p>
            <p><strong>$19</strong></p>
          </div>
        </div>

        <div className="menu-divider-vertical"></div> {/* this is the line */}
    
        <div className="menu-column">
          <div className="menu-item">
            <p className="dish-name"><strong>Ratatouille Provençale</strong></p>
            <p>A slow-roasted medley of zucchini, eggplant, and bell peppers in a rich tomato basil sauce.</p>
            <p><strong>$17</strong></p>
          </div>
    
          <p className="menu-heading">mains</p>
          <hr className="menu-divider" />
    
          <div className="menu-item">
            <p className="dish-name"><strong>Croque Madame</strong></p>
            <p>Buttery toasted brioche, layered with ham, melted Gruyère, béchamel, and topped with a sunny-side-up egg.</p>
            <p><strong>$21</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Quiche Lorraine</strong></p>
            <p>Classic French quiche with bacon, caramelized onions, and Emmental cheese, served with a side salad.</p>
            <p><strong>$19</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Steak Frites</strong></p>
            <p>Seared bavette steak, served with a red wine shallot sauce and crispy hand-cut frites.</p>
            <p><strong>$28</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Sandwich Parisien</strong></p>
            <p>Baguette with prosciutto, brie, arugula, and fig jam, served with a side of house-made cornichons.</p>
            <p><strong>$18</strong></p>
          </div>
        </div>
      </div>
      </>
    ),
    dinner: (
      <>
      <div className="menu-columns">
        <div className="menu-column">
          <p className="menu-heading">entrées</p>
          <hr className="menu-divider" />
    
          <div className="menu-item">
            <p className="dish-name"><strong>Foie Gras au Cognac</strong></p>
            <p>Seared foie gras with fig compote and toasted brioche, finished with a drizzle of aged balsamic.</p>
            <p><strong>$28</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Tartare de Bœuf</strong></p>
            <p>Hand-chopped prime beef tartare with capers, shallots, Dijon mustard, and quail egg.</p>
            <p><strong>$26</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Bisque de Homard</strong></p>
            <p>Rich and creamy lobster bisque with a touch of Cognac, served with a delicate chive crème fraîche.</p>
            <p><strong>$21</strong></p>
          </div>
    
          <p className="menu-heading">salads</p>
          <hr className="menu-divider" />
    
          <div className="menu-item">
            <p className="dish-name"><strong>Salade d'Éclaire</strong></p>
            <p>Arugula, endive, roasted pears, blue cheese, and candied pecans with champagne vinaigrette.</p>
            <p><strong>$19</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Salade Lyonnaise</strong></p>
            <p>Frisée lettuce, crispy lardons, poached egg, and warm Dijon vinaigrette.</p>
            <p><strong>$20</strong></p>
          </div>
        </div>

        <div className="menu-divider-vertical"></div> {/* this is the line */}

        <div className="menu-column">
          <div className="menu-item">
            <p className="dish-name"><strong>Asperges Rôties au Beurre Noisette</strong></p>
            <p>Roasted asparagus in brown butter, topped with shaved Parmesan and lemon zest.</p>
            <p><strong>$17</strong></p>
          </div>
    
          <p className="menu-heading">mains</p>
          <hr className="menu-divider" />
    
          <div className="menu-item">
            <p className="dish-name"><strong>Filet de Bœuf Rossini</strong></p>
            <p>Prime filet mignon topped with foie gras and truffle demi-glace, served with pommes purée.</p>
            <p><strong>$52</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Canard à l'Orange</strong></p>
            <p>Crispy duck breast with a citrus-infused Grand Marnier sauce, served with gratin dauphinois.</p>
            <p><strong>$46</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Coquilles Saint-Jacques</strong></p>
            <p>Seared scallops in a saffron beurre blanc, served with wild mushroom risotto.</p>
            <p><strong>$48</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Loup de Mer Meunière</strong></p>
            <p>Mediterranean sea bass pan-seared in brown butter, with haricots verts and lemon confit.</p>
            <p><strong>$42</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Ratatouille Provençale</strong></p>
            <p>Classic slow-roasted vegetables in a rich tomato basil sauce, served with herbed couscous.</p>
            <p><strong>$29</strong></p>
          </div>
        </div>
      </div>
      </>
    ),
    drinks: (
      <>
      <div className="menu-columns">
        <div className="menu-column">
          <p className="menu-heading">juices</p>
          <hr className="menu-divider" />
    
          <div className="menu-item">
            <p className="dish-name"><strong>Jus d’Orange Fraîchement Pressé</strong></p>
            <p>Freshly squeezed orange juice.</p>
            <p><strong>$8</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Jus de Pomme Artisanal</strong></p>
            <p>Cold-pressed French apple juice.</p>
            <p><strong>$8</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Jus de Pamplemousse Rosé</strong></p>
            <p>Fresh pink grapefruit juice.</p>
            <p><strong>$9</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Jus de Fruits Rouges</strong></p>
            <p>A blend of raspberry, strawberry, and blueberry juice.</p>
            <p><strong>$10</strong></p>
          </div>
    
          <p className="menu-heading">mocktails</p>
          <hr className="menu-divider" />
    
          <div className="menu-item">
            <p className="dish-name"><strong>Parisian Sunset</strong></p>
            <p>Fresh grapefruit juice, elderflower syrup, and a splash of sparkling water.</p>
            <p><strong>$12</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Lavande Royale</strong></p>
            <p>Lavender, honey, and lemon, topped with soda water.</p>
            <p><strong>$11</strong></p>
          </div>
        </div>

        <div className="menu-divider-vertical"></div> {/* this is the line */}

        <div className="menu-column">
          <div className="menu-item">
            <p className="dish-name"><strong>Le Jardin Vert</strong></p>
            <p>Cucumber, basil, lime, and tonic.</p>
            <p><strong>$12</strong></p>
          </div>
    
          <p className="menu-heading">sodas & water</p>
          <hr className="menu-divider" />
    
          <div className="menu-item">
            <p className="dish-name"><strong>Perrier</strong></p>
            <p>French sparkling mineral water.</p>
            <p><strong>$6</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>San Pellegrino</strong></p>
            <p>Lightly sparkling Italian mineral water.</p>
            <p><strong>$7</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Evian</strong></p>
            <p>Still mineral water from the French Alps.</p>
            <p><strong>$6</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Cheers Cola / Orange / Grape</strong></p>
            <p>Classic Cheers drinks.</p>
            <p><strong>$5</strong></p>
          </div>
    
          <div className="menu-item">
            <p className="dish-name"><strong>Limonade Artisanale</strong></p>
            <p>French-style sparkling lemonade.</p>
            <p><strong>$8</strong></p>
          </div>
        </div>
      </div>
      </>
    )
  };

  return (
    <section className="menu-section">
      <img src={MenuHero} alt="Menu Header" className="menu-hero-img" />
      <p className="menu-title">what we offer...</p>

      <div className="tab-buttons">
        <button className={activeTab === 'lunch' ? 'active' : ''} onClick={() => setActiveTab('lunch')}>Lunch</button>
        <button className={activeTab === 'dinner' ? 'active' : ''} onClick={() => setActiveTab('dinner')}>Dinner</button>
        <button className={activeTab === 'drinks' ? 'active' : ''} onClick={() => setActiveTab('drinks')}>Drinks</button>
      </div>

      <div className="menu-items">
        {menuData[activeTab]}
      </div>
    </section>
  );
}

export default Menu;