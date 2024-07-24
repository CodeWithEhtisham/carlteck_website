// App.jsx

import React from 'react';
import Slider from './components/slider'; // Updated import statement
import './App.css';

function App() {
    return (
        <div className='bg-black h-full opacity-2'>
            <Slider /> {/* Render the Ads component */}
        </div>
    );
}

export default App;
