import './index.scss';
import React, { Component } from 'react';


export default class HeroContainer extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Hello, Algorithms',
      subtitle: 'this is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content on information',
      placeholder: 'Enter name / topic',
    };
  }

  render() {
    const {
      title,
      subtitle,
      placeholder,
    } = this.state;
    return (
      <div className="hero-container">
        <div className="hero-content">
          <div className="title">
            {title}
          </div>
          <div className="subtitle">
            {subtitle}
          </div>
          <div className="input-container">
            <input type="text" placeholder={placeholder} autoComplete="off" aria-label="Search box" />
            <i className="material-icons">search</i>
          </div>
          <img className="bg-image" src="https://images.unsplash.com/photo-1527234639945-70d78416bd7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=721783d6df00ea979608158fd776675e&auto=format&fit=crop&w=1319&q=80" alt="jumbotron background" />
          <div className="bg-image-filter" />
        </div>
      </div>
    );
  }
}
