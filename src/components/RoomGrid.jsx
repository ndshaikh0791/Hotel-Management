import React from 'react';
import styles from './RoomGrid.module.css';
import RoomCard from './RoomCard';

const RoomGrid = ({ rooms, selectedRoom, onRoomClick, onCheckInOut }) => {
  const roomsByFloor = {
    '1st Floor': rooms.filter(r => r.id < 200),
    '2nd Floor': rooms.filter(r => r.id >= 200)
  };

  return (
    <div className={styles.floorContainer}>
      {Object.entries(roomsByFloor).map(([floor, floorRooms]) => (
        <div key={floor} className={styles.floorSection}>
          <h4 className={styles.floorTitle}>{floor}</h4>
          <div className={styles.roomsGrid}>
            {floorRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                isSelected={selectedRoom?.id === room.id}
                onSelect={() => onRoomClick(room)}
                onCheckInOut={onCheckInOut}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomGrid;
