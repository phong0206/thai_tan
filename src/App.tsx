import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Info from './components/Info';
import React, { Suspense, lazy } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';

import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const Home = lazy(() => import('./components/Home'));
  return (
    <div className="App">
      <CssBaseline />
      <Suspense fallback={<CircularProgress className="loading" />}>
        <Router>
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
