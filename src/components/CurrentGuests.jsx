import React from 'react';
import styles from './CurrentGuests.module.css';

const CurrentGuests = ({ rooms }) => {
  const guests = rooms.filter(r => r.status === 'occupied').map(r => ({
    id: r.id,
    name: r.guest,
    room: r.id,
    type: r.type,
    checkIn: r.checkIn,
    checkOut: r.checkOut
  }));

  return (
    <div className={`${styles.guestPanel} slide-in-left`}>
      <h4 className={styles.title}>Current Guests</h4>
      
      {guests.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No active guests at the moment</p>
        </div>
      ) : (
        <div className={styles.guestList}>
          {guests.map((guest) => (
            <div key={guest.id} className={styles.guestItem}>
              <div className={styles.guestAvatar}>
                {guest.name.charAt(0).toUpperCase()}
              </div>
              <div className={styles.guestDetails}>
                <p className={styles.guestName}>{guest.name}</p>
                <p className={styles.guestInfo}>Room {guest.room} • {guest.type}</p>
                <div className={styles.dates}>
                  <small>Check-out: {guest.checkOut}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrentGuests;
