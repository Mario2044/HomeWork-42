import React, { Component } from 'react';
import './menu.css'; 

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  handleMenuEnter = () => {
    this.setState({
      isMenuOpen: true,
    });
  };

  handleMenuLeave = () => {
    this.setState({
      isMenuOpen: false,
    });
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div
        className={`menu-container ${isMenuOpen ? 'open' : ''}`}
        onMouseEnter={this.handleMenuEnter}
        onMouseLeave={this.handleMenuLeave}
      >
        <div className="menu-button">
          <div className="menu-icon">
            <span>Меню</span>
          </div>
        </div>
        <div className={`menu-content ${isMenuOpen ? 'open' : ''}`}>
          <p><a href="#">Главная</a></p>
          <p><a href="#">Погода в других городах</a></p>
          <p><a href="#">Новости</a></p>
          <p><a href="#">О Нас</a></p>
          <p><a href="#">Помощь</a></p>
        </div>
      </div>
    );
  }
}

export default Menu;