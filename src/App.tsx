import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Info from './components/Info';
import React, { Suspense, lazy } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  const Home = lazy(() => import('./pages/Home'));
  const Login = lazy(() => import('./pages/Login'));
  const theme = createTheme();

  return (
    
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<CircularProgress className="loading" />}>
          <Router>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Info />} path="/info" />
              <Route element={<Login />} path="/login" />
            </Routes>
          </Router>
        </Suspense>
      </ThemeProvider>
  
  );
}

export default App;
