import { useState } from "react";
import axios from "../services/axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/AuthStyles.css";

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/forgot-password", null, {
        params: { email },
      });
      toast.success('Reset link sent to your email!');
      navigate('/login');
    } catch (error) {
      toast.error('Failed to send reset link. Try again.');
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <form onSubmit={handleForgotPassword} className="auth-form">
        <h2>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
