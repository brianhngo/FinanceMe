import { useState } from 'react';
import LoginScreen from './components/LoginScreen/LoginScreen';
import LandingPage from './components/LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}

export default App;
