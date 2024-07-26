import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import SideMenu from './SideMenu'; // Import the new SideMenu component

function Navbar() {
  // const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleLogoClick = () => {
  //   navigate('/'); // Redirect to index page
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
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
        zIndex: 1,
      }}>
        <img 
          src={logo} 
          alt="Logo" 
          style={{ height: '50px', cursor: 'pointer' }} 
          // onClick={handleLogoClick} 
        />
        <div 
          className="w-12 h-12 relative cursor-pointer" 
          style={{ marginRight: '10px' }} 
          onClick={toggleMenu}
        >
          <span className="w-10 h-1 top-0 block absolute bg-white"></span>
          <span className="w-10 h-1 top-5 block absolute bg-white"></span>
          <span className="w-10 h-1 top-10 block absolute bg-white"></span>
        </div>
      </div>
      {/* Render SideMenu component and pass the open state */}
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}

export default Navbar;
