import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../services/axios'; // ✅ using custom axios instance
import '../styles/AuthStyles.css';
import axios from '../services/axios'; // ✅ custom axios with render backend URL


function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Salesperson');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('/auth/register', {
        fullName,
        email,
        passwordHash: password,
        role,
      });
      alert('Registered Successfully');
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed.');
    }
  };

  return (
    <div className="container auth-container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="auth-card">
            <h2>Register</h2>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              className="form-select mb-3"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="Salesperson">Salesperson</option>
            </select>
            <button className="btn btn-success w-100" onClick={handleRegister}>
              Register
            </button>
            <div className="auth-links">
              <Link to="/">Already have an account? Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
