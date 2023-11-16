import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Counter } from './features/counter/Counter';
import './App.css';
import Footer from './site/Footer';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">  

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

        <Footer />
    </div>
  );
}

export default App;
