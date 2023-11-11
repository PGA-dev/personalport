import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './site/Header';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Footer from './site/Footer';

function App() {
  return (
    <div className="App">
    
        

        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />

        <Footer />
    </div>
  );
}

export default App;
