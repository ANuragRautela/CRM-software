import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost/backend/controllers/admin_login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('Login successful! Redirecting to leads...');
        navigate('/leads');
      } else {
        setError(data.message || 'Login failed');
      }

    } catch (err) {
      setError('Server error. Please try again later.');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="logo-placeholder">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path fill="#4F46E5" d="M12 2L2 7l10 5 10-5-10-5zm0 7L2 14l10 5 10-5-10-5z" />
          </svg>
        </div>
        <h2 className="login-title">Admin Portal</h2>
        <p className="login-subtitle">Enter your credentials to access the dashboard.</p>

        {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="admin@example.com"
          value={credentials.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
