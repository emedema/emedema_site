import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './components/header/headerDinner';
import Dinner from './components/dinner/dinner';
import Footer from './components/footer/footer';

class DinnerSelection extends Component {
  render() {
    return (
      <div className="Dinner">
        <Header />
        <Dinner />
        <Footer />
      </div>
    );
  }
}export default DinnerSelection;
