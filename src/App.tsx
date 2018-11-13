import React, { Component } from 'react';
import Header from './Blocks/Header/Header';
import Footer from './Blocks/Footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <Footer/>
      </div>
    );
  }
}

export default App;
