import React, {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Footer from './site/Footer';
import Nav from './site/Nav';
import { fetchSiteReferences } from './features/siteReference/siteReferenceSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Hero from './pages/Hero';


// const Hero = lazy(() => import('./pages/Hero'));
const Projects = lazy(() => import('./pages/Projects'));
const Education = lazy(() => import('./pages/Education'));
const Resume = lazy(() => import('./pages/Resume'));
const SiteReference = lazy(() => import('./pages/SiteReference'));


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSiteReferences())
  }, [dispatch]);
  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<div className='fallback' id='fallback'>Please Wait, Loading page...</div>}>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/education' element={<Education />} />
        <Route path='/sitereference' element={<SiteReference />} />
      </Routes>
    </Suspense>
      <Footer />
    </div>
  );
}

export default App;
