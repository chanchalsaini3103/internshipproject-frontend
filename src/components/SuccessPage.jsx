import { useNavigate } from "react-router-dom";
import "../styles/AuthStyles.css";

function SuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Password Reset Successful!</h2>
        <p>You can now login with your new password.</p>
        <button onClick={() => navigate('/login')}>Go to Login</button>
      </div>
    </div>
  );
}

export default SuccessPage;
