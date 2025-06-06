import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import ForgotPassword from './pages/auth/ForgotPassword.jsx';
import ResetPassword from './pages/auth/ResetPassword.jsx';
import PasswordComplete from './pages/auth/PasswordComplete.jsx';
import ConfirmReset from './pages/auth/ConfirmReset.jsx';
import Verify from './pages/auth/Verify.jsx';
import Verification from './pages/auth/Verification.jsx';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/request-password-reset" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/password-complete" element={<PasswordComplete />} />
          <Route path="/confirm-reset" element={<ConfirmReset />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
        <ToastContainer position="top-right" hideProgressBar={true} newestOnTop closeOnClick pauseOnHover theme="dark"/>
      </div>
    </Router>
  )
}

export default App
