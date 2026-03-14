import React, { useState, useEffect } from 'react';
import styles from './Login.module.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const backgroundImages = [
    'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80")',
    'url("https://images.unsplash.com/photo-1571896349842-b08586b5db0f?w=1200&q=80")',
    'url("https://images.unsplash.com/photo-1595950653106-6c9000c7a028?w=1200&q=80")',
    'url("https://images.unsplash.com/photo-1583969212109-e4d3567eb6ae?w=1200&q=80")',
    'url("https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80")',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (email && password) {
        onLogin({ email, password });
      } else {
        setError('Please fill in all fields');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className={styles.loginContainer}>
      <div 
        className={styles.backgroundSlide}
        style={{ backgroundImage: backgroundImages[bgIndex] }}
      />
      <div className={styles.overlay} />
      
      <div className={`${styles.formContainer} slide-in-up`}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoText}>🏨</span>
          </div>
          <h1>Pranaus</h1>
          <p>Hotel Management System</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <button 
            type="submit" 
            className={styles.loginBtn}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className={styles.spinner}></span>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className={styles.footer}>
          <p>© 2024 Pranaus Hotel. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
