// src/components/Header.jsx
import React from 'react';
import './Header.css';
import notificationIcon from '../assets/notification.svg';
import cartIcon from '../assets/cart.svg';
import profileImage from '../assets/profile.jpg';

const Header = () => {
  return (
    <div className="header">
      <h1>Purchase request</h1>
      <div className="header-icons">
        <img src={cartIcon} alt="Cart" className="icon-24-second" />
        <img src={notificationIcon} alt="Notifications" className="icon-24" />
        <div className="profile-container">
          <img src={profileImage} alt="Profile" className="icon-32" />
          <span className="profile-name">Anthony</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
