import React, { useState } from 'react';
import styles from './Header.module.css';
import Clock from './Clock';

const Header = ({ user, onLogout }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🏨</span>
          <h1>Pranaus</h1>
        </div>

        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Dashboard</a>
          <a href="#" className={styles.navLink}>Bookings</a>
          <a href="#" className={styles.navLink}>Guests</a>
          <a href="#" className={styles.navLink}>Reports</a>
        </nav>

        <div className={styles.clockWrapper}>
          <Clock />
        </div>

        <div className={styles.userSection}>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>
              {user.email.charAt(0).toUpperCase()}
            </div>
            <div className={styles.userDetails}>
              <p className={styles.userName}>{user.email.split('@')[0]}</p>
              <p className={styles.userEmail}>{user.email}</p>
            </div>
          </div>

          <button 
            className={styles.menuBtn}
            onClick={() => setShowMenu(!showMenu)}
          >
            ⋮
          </button>

          {showMenu && (
            <div className={`${styles.dropdown} slide-in-down`}>
              <a href="#" className={styles.dropdownItem}>Profile</a>
              <a href="#" className={styles.dropdownItem}>Settings</a>
              <hr />
              <button 
                className={styles.logoutBtn}
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
