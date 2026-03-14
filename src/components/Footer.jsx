import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.branding}>
            <span className={styles.logo}>🏨</span>
            <div className={styles.brandText}>
              <h4>Pranaus Hotel Management</h4>
              <p>Professional hospitality solutions</p>
            </div>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statIcon}>⭐</span>
              <span>24/7 Support</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statIcon}>🔒</span>
              <span>Secure & Reliable</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statIcon}>⚡</span>
              <span>Real-time Updates</span>
            </div>
          </div>

          <div className={styles.copyright}>
            <p>&copy; {currentYear} Pranaus Hotel Management System. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
