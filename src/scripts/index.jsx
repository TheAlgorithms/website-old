import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Cards from './Components/Card';
import Footer from './Components/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = { pageTitle: '' };
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Hero />
        <Cards />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
