import { useState } from 'react';
import Modal from './components/LoginScreen/Modal';
import LandingPage from './components/LandingPage/LandingPage';
import DashBoard from './components/DashBoard/DashBoard';
import ForgetPassword from './components/LoginScreen/ForgetPassword';
import ForgetPasswordEmailSent from './components/LoginScreen/ForgetPasswordEmailSent';
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
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/forgetpasswordnext" element={<ForgetPasswordEmailSent />} />
    </Routes>
  );
}

export default App;
