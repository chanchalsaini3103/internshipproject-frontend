import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({ fullName: '', email: '', passwordHash: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(user);
      alert('Registration Successful!');
      navigate('/login');
    } catch (error) {
      alert('Registration Failed! Try Again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input type="text" placeholder="Full Name" onChange={(e) => setUser({ ...user, fullName: e.target.value })} required />
      <input type="email" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })} required />
      <input type="password" placeholder="Password" onChange={(e) => setUser({ ...user, passwordHash: e.target.value })} required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
