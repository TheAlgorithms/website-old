import './index.scss';

import React, { Component } from 'react';

export default class HeaderContainer extends Component {
  constructor() {
    super();
    this.state = {
      profileImageURL: 'https://d1r8m46oob3o9u.cloudfront.net/images/home-demo-photo-0c.jpg',
      isLoggedIn: false,
    };
  }


  render() {
    const { profileImageURL, isLoggedIn } = this.state;
    return (
      <div className="header-container">
        <div className="brand">
          <div className="logo-text">
            THE ALGORITHMS
          </div>
        </div>

        { isLoggedIn
          ? (
            <div className="profile-container">
              <img src={profileImageURL} alt="user-profile" className="profile-image" />
              <div className="user-display-name">Amy Song</div>
            </div>
          )
          : (
            <div className="menu-container">
              <div className="menu-item">Login</div>
              <div className="menu-item">SignUp</div>
            </div>
          )
      }

      </div>
    );
  }
}
