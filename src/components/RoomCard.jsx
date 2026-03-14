import React from 'react';
import styles from './RoomCard.module.css';

const RoomCard = ({ room, isSelected, onSelect, onCheckInOut }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'occupied': return '#ef4444';
      case 'available': return '#22c55e';
      case 'maintenance': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'occupied': return '👥';
      case 'available': return '✓';
      case 'maintenance': return '🔧';
      default: return '?';
    }
  };

  const handleClick = () => {
    onSelect();
    if (isSelected) {
      onCheckInOut();
    }
  };

  return (
    <div
      className={`${styles.roomCard} ${isSelected ? styles.selected : ''} slide-in-up`}
      onClick={handleClick}
      style={{ '--status-color': getStatusColor(room.status) }}
    >
      <div className={styles.statusBadge}>
        <span className={styles.statusIcon}>{getStatusIcon(room.status)}</span>
        <span className={styles.statusText}>{room.status}</span>
      </div>

      <div className={styles.roomNumber}>
        <span className={styles.number}>{room.id}</span>
      </div>

      <div className={styles.roomInfo}>
        <p className={styles.roomType}>{room.type}</p>
        <p className={styles.roomPrice}>${room.price}/night</p>
      </div>

      {room.status === 'occupied' && (
        <div className={styles.guestInfo}>
          <p className={styles.guestLabel}>Guest:</p>
          <p className={styles.guestName}>{room.guest}</p>
          <div className={styles.dates}>
            <small>In: {room.checkIn}</small>
            <small>Out: {room.checkOut}</small>
          </div>
        </div>
      )}

      {isSelected && (
        <div className={styles.actionHint}>
          <span className={styles.hint}>Click to {room.status === 'occupied' ? 'check out' : 'check in'}</span>
        </div>
      )}
    </div>
  );
};

export default RoomCard;
