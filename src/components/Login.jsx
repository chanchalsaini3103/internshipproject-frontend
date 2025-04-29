import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";


function Login() {
  const [user, setUser] = useState({ email: '', passwordHash: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(user);
      localStorage.setItem('token', res.data); // Save JWT Token
      alert('Login Successful!');
      navigate('/dashboard'); // after login, move to dashboard
    } catch (error) {
      alert('Login Failed! Check Credentials.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={user.passwordHash}
          onChange={(e) => setUser({ ...user, passwordHash: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>

      {/* ✅ New Register Button */}
      <p>Don't have an account?</p>
      <button onClick={() => navigate('/register')}>
        Register
      </button>
    </div>
  );
}

export default Login;
