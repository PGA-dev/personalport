import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Footer from './site/Footer';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import History from './pages/History';
import Resume from './pages/Resume';
import SiteMap from './pages/SiteMap';
import Header from './site/Header';

function App() {
  return (
    <div className="App">
    <Header /> 
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/history' element={<History />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/sitemap' element={<SiteMap />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
