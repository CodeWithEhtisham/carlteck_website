
import React from 'react';

function Navbar (){
    return (
        <div className="nav-bar m-5" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            // background: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            zIndex: 1, // Ensure navigation bar is in front of video
          }}>
            <img src="/path/to/your/logo.png" alt="Logo" style={{ height: '30px' }} />
            <button style={{ background: 'none', border: '1px solid #fff', padding: '5px 10px', cursor: 'pointer' }}>
              Button
            </button>
          </div>
    )
}

export default Navbar