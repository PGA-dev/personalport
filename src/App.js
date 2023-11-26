import React, {Component, lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Footer from './site/Footer';
// import HomePage from './pages/HomePage';
// import Contact from './pages/Contact';
// import Projects from './pages/Projects';
// import History from './pages/History';
// import Resume from './pages/Resume';
// import SiteMap from './pages/SiteMap';
import Header from './site/Header';
import Nav from './site/Nav';


const HomePage = lazy(() => import('./pages/HomePage'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const History = lazy(() => import('./pages/Resume'));
const Resume = lazy(() => import('./pages/HomePage'));
const SiteMap = lazy(() => import('./pages/SiteMap'));


function App() {
  return (
    <div className="App">
      <Nav />
    <Header /> 
      <Suspense fallback={<div>Please Wait, Loading...</div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/history' element={<History />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/sitemap' element={<SiteMap />} />
      </Routes>
    </Suspense>
      <Footer />
    </div>
  );
}

export default App;
