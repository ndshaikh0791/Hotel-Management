import React, { useEffect, useState } from 'react';
import styles from './OccupancyStats.module.css';

const OccupancyStats = ({ rooms }) => {
  const [occupancyPercentage, setOccupancyPercentage] = useState(0);

  useEffect(() => {
    const total = rooms.length;
    const occupied = rooms.filter(r => r.status === 'occupied').length;
    const percentage = Math.round((occupied / total) * 100);
    setOccupancyPercentage(percentage);
  }, [rooms]);

  const occupiedRooms = rooms.filter(r => r.status === 'occupied').length;
  const availableRooms = rooms.filter(r => r.status === 'available').length;
  const maintenanceRooms = rooms.filter(r => r.status === 'maintenance').length;

  return (
    <div className={`${styles.occupancyCard} slide-in-right`}>
      <h4 className={styles.title}>Occupancy Overview</h4>
      
      <div className={styles.circleChart}>
        <svg viewBox="0 0 100 100" className={styles.svg}>
          <circle
            cx="50"
            cy="50"
            r="45"
            className={styles.background}
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            className={styles.progress}
            style={{
              strokeDashoffset: 282.74 - (282.74 * occupancyPercentage) / 100
            }}
          />
        </svg>
        <div className={styles.centerText}>
          <span className={styles.percentage}>{occupancyPercentage}%</span>
          <span className={styles.label}>Occupied</span>
        </div>
      </div>

      <div className={styles.breakdown}>
        <div className={styles.breakdownItem}>
          <span className={styles.dot} style={{ background: '#ef4444' }}></span>
          <span className={styles.label}>Occupied: {occupiedRooms}</span>
        </div>
        <div className={styles.breakdownItem}>
          <span className={styles.dot} style={{ background: '#22c55e' }}></span>
          <span className={styles.label}>Available: {availableRooms}</span>
        </div>
        <div className={styles.breakdownItem}>
          <span className={styles.dot} style={{ background: '#f59e0b' }}></span>
          <span className={styles.label}>Maintenance: {maintenanceRooms}</span>
        </div>
      </div>

      <div className={styles.quickStats}>
        <div className={styles.stat}>
          <p className={styles.statValue}>{rooms.length}</p>
          <p className={styles.statLabel}>Total Rooms</p>
        </div>
        <div className={styles.stat}>
          <p className={styles.statValue}>${rooms.filter(r => r.status === 'occupied').reduce((sum, r) => sum + r.price, 0)}</p>
          <p className={styles.statLabel}>Daily Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default OccupancyStats;
