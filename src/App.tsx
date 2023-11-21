import { useState } from 'react';
import Modal from './components/LoginScreen/Modal';
import LandingPage from './components/LandingPage/LandingPage';
import DashBoard from './components/DashBoard/DashBoard';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CreateNewUser from './components/LoginScreen/CreateNewUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Modal />} />
      <Route path="/createaccount" element={<CreateNewUser />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
}

export default App;
