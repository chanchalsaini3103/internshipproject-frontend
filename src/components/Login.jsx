import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/AuthStyles.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:8081/auth/login', { email, password });
      alert('Login Successful');
      navigate('/dashboard');
    } catch (error) {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="container auth-container">
  <div className="row justify-content-center">
    <div className="col-md-4">
      <div className="auth-card">
        <h2>Login</h2>
        <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
        <div className="auth-links">
          <Link to="/forgot-password">Forgot Password?</Link><br />
          <Link to="/register">New user? Register</Link>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;
