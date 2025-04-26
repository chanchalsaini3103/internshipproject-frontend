import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    
    const logoutTimer = setTimeout(() => {
      alert('Session expired due to inactivity!');
      localStorage.removeItem("auth"); 
      navigate('/'); 
    }, 0.5 * 60 * 1000); 

    return () => clearTimeout(logoutTimer); 
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Welcome to Dashboard</h2>
      <button className="btn btn-danger mt-3" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
