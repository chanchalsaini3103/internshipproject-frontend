import { useState } from "react";
import axios from "../services/axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/AuthStyles.css";

function ResetPassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/reset-password", null, {
        params: { token, newPassword },
      });
      toast.success('Password reset successful!');
      setTimeout(() => navigate('/success'), 2000);
    } catch (error) {
      toast.error('Failed to reset password.');
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <form onSubmit={handleResetPassword} className="auth-form">
        <h2>Reset Password</h2>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
