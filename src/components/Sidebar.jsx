import React from 'react';
import './Sidebar.css';
import fexLogo from '../assets/fex.png';
import toggleIcon from '../assets/toggle.svg';

import overviewIcon from '../assets/overview.svg';
import suppliersIcon from '../assets/suppliers.svg';
import ordersIcon from '../assets/orders.svg';
import checkoutIcon from '../assets/checkout.svg';
import settingsIcon from '../assets/settings.svg';

const sidebarItems = [
  { icon: overviewIcon, label: 'Overview' },
  { icon: suppliersIcon, label: 'Suppliers' },
  { icon: ordersIcon, label: 'Orders' },
  { icon: checkoutIcon, label: 'Checkout' },
  { icon: settingsIcon, label: 'Settings' },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header-elements">
        <img src={fexLogo} alt="Fex Logo" className="fex-logo" />
        <img src={toggleIcon} alt="Toggle Icon" className="toggle-icon" />
      </div>

      <div className="sidebar-box-container">
        {sidebarItems.map((item, index) => (
          <div className="sidebar-box" key={index}>
            <img src={item.icon} alt={item.label} className="sidebar-icon" />
            <span className="sidebar-text">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
