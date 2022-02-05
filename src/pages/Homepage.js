import React from 'react';
import backgroundIMG from '../assets/images/florensis.png';
import '../assets/styles/Homepage.css';

function Homepage() {
    

    return (
        <div className='homepage'>
           <header className='header'>
               <img src={backgroundIMG} alt="background image" className='bgImage'/>
           </header>
        </div>
    )
}

export default Homepage;