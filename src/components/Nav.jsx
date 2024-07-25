import React from 'react';
import logo from '../assets/logo.svg';
function Navbar() {
  return (
    <div className="nav-bar m-10" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      color: '#fff',
      zIndex: 1, // Ensure navigation bar is in front of video
    }}>
      <img src={logo} alt="Logo" style={{ height: '50px' }} />
      <div className="w-12 h-12 relative cursor-pointer" style={{ marginRight: '10px' }}>
        <span className="w-10 h-1 top-0 block absolute bg-white"></span>
        <span className="w-10 h-1 top-5 block absolute bg-white"></span>
        <span className="w-10 h-1 top-10 block absolute bg-white"></span>
      </div>
    </div>
  )
}

export default Navbar;
