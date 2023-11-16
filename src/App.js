import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import './App.css';
import Footer from './site/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">  

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

        <Footer />
    </div>
  );
}

export default App;
