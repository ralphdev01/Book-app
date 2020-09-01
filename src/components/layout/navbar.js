import React, {Component} from 'react';
import './index.css';
import logo from '../books/Asset/logo.webp'

const Navbar = () => {
    return(
        <React.Fragment>

            <div className="navbar-wraper">
                <div className='logo'>
                    <img src={logo}/>
                </div>
                <span className='menu-wrapper'>
                    <h4 className='menu'>MENU</h4>
                    <h4 className='menu'>ABOUT</h4>
                    <h4 className='menu'>SUPPORT</h4>
                    <h4 className='menu'>LOGIN</h4>
                </span> 
            </div>
            

            
        </React.Fragment>
    )
}

export default Navbar;