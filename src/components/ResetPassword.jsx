import { useState } from 'react';
import axios from '../services/axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/PasswordResetStyles.css';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      await axios.post(`/auth/reset-password/${token}`, { newPassword });
      alert('Password reset successfully!');
      navigate('/');
    } catch (error) {
      alert('Reset password failed.');
    }
  };

  return (
    <div className="container reset-container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="reset-card">
            <h2>Reset Password</h2>
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button className="btn btn-success w-100" onClick={handleResetPassword}>
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
