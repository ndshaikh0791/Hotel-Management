import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import Header from './Header';
import RoomGrid from './RoomGrid';
import StatsPanel from './StatsPanel';
import CheckInOutPanel from './CheckInOutPanel';
import OccupancyStats from './OccupancyStats';
import CurrentGuests from './CurrentGuests';
import Footer from './Footer';

const Dashboard = ({ user, onLogout }) => {
  const [rooms, setRooms] = useState([
    { id: 101, type: 'Deluxe', status: 'occupied', guest: 'John Doe', checkIn: '2024-03-10', checkOut: '2024-03-15', price: 150 },
    { id: 102, type: 'Standard', status: 'available', guest: null, checkIn: null, checkOut: null, price: 100 },
    { id: 103, type: 'Suite', status: 'occupied', guest: 'Jane Smith', checkIn: '2024-03-09', checkOut: '2024-03-16', price: 250 },
    { id: 104, type: 'Standard', status: 'available', guest: null, checkIn: null, checkOut: null, price: 100 },
    { id: 105, type: 'Deluxe', status: 'maintenance', guest: null, checkIn: null, checkOut: null, price: 150 },
    { id: 106, type: 'Standard', status: 'occupied', guest: 'Mike Johnson', checkIn: '2024-03-11', checkOut: '2024-03-13', price: 100 },
    { id: 201, type: 'Suite', status: 'available', guest: null, checkIn: null, checkOut: null, price: 250 },
    { id: 202, type: 'Deluxe', status: 'occupied', guest: 'Sarah Williams', checkIn: '2024-03-08', checkOut: '2024-03-18', price: 150 },
    { id: 203, type: 'Standard', status: 'available', guest: null, checkIn: null, checkOut: null, price: 100 },
    { id: 204, type: 'Suite', status: 'occupied', guest: 'Robert Brown', checkIn: '2024-03-12', checkOut: '2024-03-14', price: 250 },
    { id: 205, type: 'Standard', status: 'maintenance', guest: null, checkIn: null, checkOut: null, price: 100 },
    { id: 206, type: 'Deluxe', status: 'available', guest: null, checkIn: null, checkOut: null, price: 150 },
  ]);

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showCheckInOut, setShowCheckInOut] = useState(false);

  const totalRooms = rooms.length;
  const occupiedRooms = rooms.filter(r => r.status === 'occupied').length;
  const availableRooms = rooms.filter(r => r.status === 'available').length;
  const maintenanceRooms = rooms.filter(r => r.status === 'maintenance').length;

  const stats = [
    { label: 'Total Rooms', value: totalRooms, color: '#1a472a', icon: '🏢' },
    { label: 'Occupied', value: occupiedRooms, color: '#ef4444', icon: '👥' },
    { label: 'Available', value: availableRooms, color: '#22c55e', icon: '✓' },
    { label: 'Maintenance', value: maintenanceRooms, color: '#f59e0b', icon: '🔧' },
  ];

  const handleRoomClick = (room) => {
    setSelectedRoom(room);
  };

  const handleCheckInOut = (data) => {
    if (selectedRoom) {
      setRooms(rooms.map(r => 
        r.id === selectedRoom.id 
          ? {
              ...r,
              status: data.type === 'checkin' ? 'occupied' : 'available',
              guest: data.type === 'checkin' ? data.guestName : null,
              checkIn: data.type === 'checkin' ? data.checkInDate : null,
              checkOut: data.type === 'checkin' ? data.checkOutDate : null,
            }
          : r
      ));
      setSelectedRoom(null);
      setShowCheckInOut(false);
    }
  };

  return (
    <div className={styles.dashboard}>
      <Header user={user} onLogout={onLogout} />
      
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.titleSection}>
            <h2>Welcome back, {user.email.split('@')[0]}!</h2>
            <p>Manage your hotel operations efficiently</p>
          </div>

          <StatsPanel stats={stats} />

          <div className={styles.occupancySection}>
            <OccupancyStats rooms={rooms} />
            <CurrentGuests rooms={rooms} />
          </div>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>Room Management</h3>
              <button 
                className={styles.filterBtn}
                onClick={() => window.alert('Filter functionality coming soon!')}
              >
                Filter
              </button>
            </div>
            <RoomGrid 
              rooms={rooms} 
              selectedRoom={selectedRoom}
              onRoomClick={handleRoomClick}
              onCheckInOut={() => setShowCheckInOut(!showCheckInOut)}
            />
          </div>

          {showCheckInOut && selectedRoom && (
            <CheckInOutPanel 
              room={selectedRoom}
              onSubmit={handleCheckInOut}
              onClose={() => {
                setShowCheckInOut(false);
                setSelectedRoom(null);
              }}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
