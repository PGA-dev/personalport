import React, {lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Footer from './site/Footer';
import Header from './site/Header';
import Nav from './site/Nav';
import { fetchSiteReferences } from './features/siteReference/siteReferenceSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


const HomePage = lazy(() => import('./pages/HomePage'));
const Projects = lazy(() => import('./pages/Projects'));
const History = lazy(() => import('./pages/History'));
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
    <Header /> 
      <Suspense fallback={<div className='fallback' id='fallback'>Please Wait, Loading page...</div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
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
