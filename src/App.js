import React, {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Footer from './site/Footer';
import Header from './site/Header';
import Nav from './site/Nav';


const HomePage = lazy(() => import('./pages/HomePage'));
const Contact = lazy(() => import('./pages/Contact'));
const Projects = lazy(() => import('./pages/Projects'));
const History = lazy(() => import('./pages/History'));
const Resume = lazy(() => import('./pages/Resume'));
const SiteReference = lazy(() => import('./pages/SiteReference'));


function App() {
  return (
    <div className="App">
      <Nav />
    <Header /> 
      <Suspense fallback={<div className='fallback' id='fallback'>Please Wait, Loading page...</div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/history' element={<History />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/sitereference' element={<SiteReference />} />
      </Routes>
    </Suspense>
      <Footer />
    </div>
  );
}

export default App;
