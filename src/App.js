import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Footer from './site/Footer';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import GitHub from './pages/GitHub';

function App() {
  return (
    <div className="App">  

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/GitHub' element={<GitHub />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
