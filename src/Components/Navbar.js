import React from 'react'
import plane from "../assets/airplane.png";
import './styles.css';

const Navbar = () => {
  return (
    <div>
        
        <nav class="navbar">
        <div className="logo-container">
          <div className="logo-box"></div>
          <img src={plane} alt='logo' className='logo'/>
        </div>
        <ul class="nav-menu">
            <li><a href='/'>Holiday Packages</a></li>
            <li><a href='/'>Flight Schedule</a></li>
            <li><a href='/'>Account Settings</a></li>
            <li><a href='/'>Manage Booking</a></li>
        </ul>
        <ul class="nav-userSetting">
            <li className='register'><a href='/'>Registter</a></li>
            <li  className='sign-in'><a href='/'>Sign in</a></li>
        </ul>
    </nav>

    
    </div>
  )
}

export default Navbar