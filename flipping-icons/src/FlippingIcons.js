import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaEnvelope, FaBell } from 'react-icons/fa';
import './FlippingIcons.css';

const FlippingIcons = () => {
  const [flippedIcons, setFlippedIcons] = useState({});

  const icons = [
    { id: 1, icon: <FaHome />, name: 'Home' },
    { id: 2, icon: <FaUser />, name: 'Profile' },
    { id: 3, icon: <FaCog />, name: 'Settings' },
    { id: 4, icon: <FaEnvelope />, name: 'Messages' },
    { id: 5, icon: <FaBell />, name: 'Notifications' },
  ];

  const handleIconClick = (id) => {
    setFlippedIcons(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="icons-container">
      {icons.map((icon) => (
        <div 
          key={icon.id}
          className={`icon-card ${flippedIcons[icon.id] ? 'flipped' : ''}`}
          onClick={() => handleIconClick(icon.id)}
        >
          <div className="icon-front">
            <div className="icon-back">?</div>
          </div>
          <div className="icon-content">
            {icon.icon}
            <span>{icon.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlippingIcons;