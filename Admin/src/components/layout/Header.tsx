import React from 'react';
import './Header.css';
import { Bell, UserCircle2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-right">
        <Bell className="icon" />
        <img
          alt="User Avatar"
          className="avatar"
        />
      </div>
    </header>
  );
};

export default Header;
