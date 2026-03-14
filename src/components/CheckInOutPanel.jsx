import React, { useState } from 'react';
import styles from './CheckInOutPanel.module.css';

const CheckInOutPanel = ({ room, onSubmit, onClose }) => {
  const isOccupied = room.status === 'occupied';
  const [formData, setFormData] = useState({
    type: isOccupied ? 'checkout' : 'checkin',
    guestName: room.guest || '',
    checkInDate: room.checkIn || '',
    checkOutDate: room.checkOut || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} slide-in-up`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>{isOccupied ? 'Check Out' : 'Check In'} - Room {room.id}</h3>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {!isOccupied && (
            <>
              <div className={styles.formGroup}>
                <label htmlFor="guestName">Guest Name *</label>
                <input
                  type="text"
                  id="guestName"
                  name="guestName"
                  placeholder="Enter guest name"
                  value={formData.guestName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.dateRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="checkInDate">Check In Date *</label>
                  <input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="checkOutDate">Check Out Date *</label>
                  <input
                    type="date"
                    id="checkOutDate"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </>
          )}

          {isOccupied && (
            <div className={styles.infoBox}>
              <p><strong>Guest:</strong> {room.guest}</p>
              <p><strong>Check In:</strong> {room.checkIn}</p>
              <p><strong>Check Out:</strong> {room.checkOut}</p>
              <p className={styles.confirmation}>Are you sure you want to check out this guest?</p>
            </div>
          )}

          <div className={styles.buttonGroup}>
            <button 
              type="button" 
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className={`${styles.submitBtn} ${isOccupied ? styles.danger : styles.success}`}
            >
              {isOccupied ? 'Check Out' : 'Check In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckInOutPanel;
