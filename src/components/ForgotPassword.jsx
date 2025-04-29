import { useState } from 'react';
import axios from '../services/axios'; // using your axios instance with base URL
import '../styles/PasswordResetStyles.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      await axios.post('/auth/forgot-password', { email });
      alert('Password reset email sent!');
    } catch (error) {
      alert('Email sending failed.');
    }
  };

  return (
    <div className="container reset-container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="reset-card">
            <h2>Forgot Password</h2>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-primary w-100" onClick={handleForgotPassword}>
              Send Reset Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
