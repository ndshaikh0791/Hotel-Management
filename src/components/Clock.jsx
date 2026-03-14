import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secondDegree = (seconds / 60) * 360;
  const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30;

  const formattedTime = time.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  });

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className={styles.clockContainer}>
      <div className={styles.analogClock}>
        <div 
          className={styles.hand + ' ' + styles.hour} 
          style={{ transform: `rotate(${hourDegree}deg)` }}
        />
        <div 
          className={styles.hand + ' ' + styles.minute} 
          style={{ transform: `rotate(${minuteDegree}deg)` }}
        />
        <div 
          className={styles.hand + ' ' + styles.second} 
          style={{ transform: `rotate(${secondDegree}deg)` }}
        />
        <div className={styles.center} />
      </div>

      <div className={styles.digitalTime}>
        <div className={styles.time}>{formattedTime}</div>
        <div className={styles.date}>{formattedDate}</div>
      </div>
    </div>
  );
};

export default Clock;
