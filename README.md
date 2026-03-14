# Pranaus - Hotel Management System

A professional, modern hotel management system built with React. Pranaus provides comprehensive room management, guest tracking, and real-time occupancy monitoring with an elegant, animated user interface.

## Features

### 🏨 Core Functionality
- **User Authentication**: Secure login system with beautiful animated backgrounds
- **Dashboard**: Comprehensive overview of all hotel operations
- **Room Management**: Visual grid display of all rooms with status tracking
- **Real-time Occupancy**: Live occupancy percentage and breakdowns
- **Check-in/Check-out**: Complete guest management system
- **Guest List**: Current guests with details and check-out times
- **Room Status Tracking**: Visual indicators for available, occupied, and maintenance rooms

### 🎨 Design Features
- **Nature-themed backgrounds**: Rotating hotel imagery on login page
- **Animated UI**: Smooth transitions and micro-interactions throughout
- **Professional color scheme**: 
  - Primary: Deep forest green (#1a472a)
  - Accent: Gold (#d4af37)
  - Status colors: Green (available), Red (occupied), Orange (maintenance)
- **Responsive design**: Fully responsive from mobile to desktop
- **Live clock**: Analog and digital clock display
- **Colorful statistics**: Dashboard with real-time metrics

### 🚀 Technical Features
- **React 19.2**: Latest React features and patterns
- **CSS Modules**: Scoped styling for each component
- **Smooth animations**: CSS keyframe animations throughout
- **Modular architecture**: Well-organized component structure

## Project Structure

```
src/
├── components/
│   ├── Login.jsx              # Login page with authentication
│   ├── Dashboard.jsx          # Main dashboard container
│   ├── Header.jsx             # Top navigation header
│   ├── Footer.jsx             # Footer component
│   ├── RoomGrid.jsx           # Room display grid
│   ├── RoomCard.jsx           # Individual room card
│   ├── StatsPanel.jsx         # Statistics cards
│   ├── OccupancyStats.jsx     # Occupancy chart and breakdown
│   ├── CurrentGuests.jsx      # Active guests list
│   ├── CheckInOutPanel.jsx    # Modal for check-in/checkout
│   ├── Clock.jsx              # Analog + digital clock
│   └── *.module.css           # Component styles
├── utils/
│   └── constants.js           # Application constants
├── App.jsx                    # Main application component
├── App.css                    # Application styles
├── index.css                  # Global styles
└── main.jsx                   # Entry point
```

## Color Palette

| Purpose | Color | Hex Code |
|---------|-------|----------|
| Primary | Forest Green | #1a472a |
| Primary Light | Garden Green | #2d6a42 |
| Primary Dark | Deep Green | #0f2e1a |
| Accent | Gold | #d4af37 |
| Accent Light | Bright Gold | #e8c547 |
| Success | Green | #22c55e |
| Danger | Red | #ef4444 |
| Warning | Orange | #f59e0b |
| Info | Blue | #3b82f6 |

## Animations

All animations are CSS-based for optimal performance:
- **Fade In**: Smooth opacity transitions
- **Slide In**: Directional entrance animations (up, down, left, right)
- **Bounce**: Playful motion on interactive elements
- **Pulse**: Continuous rhythm for attention
- **Glow**: Golden accent glow effect

## Room Management

### Room Statuses
1. **Available** - Room is clean and ready for guests (Green)
2. **Occupied** - Room is currently booked (Red)
3. **Maintenance** - Room requires maintenance (Orange)

### Room Types
- Standard: $100/night
- Deluxe: $150/night
- Suite: $250/night

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Usage

1. **Login**: Access the application using any email/password combination
2. **Dashboard**: View all hotel statistics and current operations
3. **Room Management**: Click on any room to perform check-in/checkout
4. **Guest Tracking**: View all current guests with their check-out times
5. **Occupancy**: Monitor real-time occupancy percentage and room breakdowns

## Features Showcase

### Login Page
- Rotating background images of luxury hotels
- Animated form with validation
- Smooth loading states
- Professional branding with Pranaus logo

### Dashboard
- Real-time statistics dashboard
- Occupancy tracking with visual charts
- Current guest list with details
- Room grid organized by floor
- Live analog and digital clock
- Comprehensive header and footer

### Room Management
- Color-coded status indicators
- Guest information display
- Check-in/checkout modals
- Real-time updates
- Responsive grid layout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 Pranaus Hotel Management. All rights reserved.

---

Built with React 19.2 and modern CSS3 technologies.
