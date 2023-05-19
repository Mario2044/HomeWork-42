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
          <p><a href="#">Головна</a></p>
          <p><a href="#">Погода в інших містах</a></p>
          <p><a href="#">Новини</a></p>
          <p><a href="#">Про Нас</a></p>
          <p><a href="#">Допомога</a></p>
        </div>
      </div>
    );
  }
}

export default Menu;