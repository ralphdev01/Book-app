import React, {Component} from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Header from '../books/header';



const Layout = (props) => {
    return(
        <div>
            <Navbar />
            <Sidebar />
            <div>
                {props.children}  
            </div>
          
        </div>
    )
}

export default Layout;