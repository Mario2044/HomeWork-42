import React, { useState } from 'react';
import './menu.css'; 

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMenuLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`menu-container ${isMenuOpen ? 'open' : ''}`}
      onMouseEnter={handleMenuEnter}
      onMouseLeave={handleMenuLeave}
    >
      <div className="menu-button">
        <div className="menu-icon">
          <span>Меню</span>
        </div>
      </div>
      <div className={`menu-content ${isMenuOpen ? 'open' : ''}`}>
        <p><a href="#">Головна</a></p>
        <p><a href="#">Погода в інших містах</a></p>
        <p><a href="#">Новини</a></p>
        <p><a href="#">Про Нас</a></p>
        <p><a href="#">Допомога</a></p>
      </div>
    </div>
  );
}

export default Menu