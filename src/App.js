import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Works from './components/works/works';
import Home from  './components/home/home';
import ContactUs from './components/contact/contact';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Works />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}export default App;
