#!/bin/bash

# Configure git
git config user.email "hotel-management@pranaus.com"
git config user.name "Pranaus Hotel Management"

# Add all changes
git add .

# Commit changes
git commit -m "Add Pranaus Hotel Management System - Complete Frontend Build

- Login page with animated backgrounds
- Professional dashboard with room management
- Real-time occupancy tracking
- Guest check-in/checkout system
- Responsive design with smooth animations
- 14 React components with CSS modules
- Complete styling system with color palette
- Live clock component
- Room grid organized by floors
- Statistics and occupancy panels
- Comprehensive README documentation"

# Push to current branch
git push origin HEAD

echo "Code successfully pushed to GitHub!"
