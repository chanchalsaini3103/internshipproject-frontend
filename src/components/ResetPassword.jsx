import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../services/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/PasswordResetStyles.css";

function ResetPassword() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { token } = useParams(); // ✅ Get token from URL

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/reset-password", { password }, {
        params: { token } // ✅ Send token in query
      });

      toast.success("Password reset successful!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      toast.error("Invalid or expired link.");
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
