import React from 'react';
import styles from './StatsPanel.module.css';

const StatsPanel = ({ stats }) => {
  return (
    <div className={styles.statsGrid}>
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className={`${styles.statCard} slide-in-up`}
          style={{ 
            animationDelay: `${index * 0.1}s`,
            '--stat-color': stat.color 
          }}
        >
          <div className={styles.statIcon}>{stat.icon}</div>
          <div className={styles.statContent}>
            <p className={styles.statLabel}>{stat.label}</p>
            <p className={styles.statValue}>{stat.value}</p>
          </div>
          <div className={styles.statBg} style={{ background: stat.color }}></div>
        </div>
      ))}
    </div>
  );
};

export default StatsPanel;
