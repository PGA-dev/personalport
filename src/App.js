import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './site/Header';
import { Counter } from './features/counter/Counter';
import './App.css';
import Footer from './site/Footer';

function App() {
  return (
    <div className="App">
    
        

        <Header />

        <Counter />

        <Footer />
    </div>
  );
}

export default App;
