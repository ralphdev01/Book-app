import React, {Component} from 'react';
import './index.css';
import Form from '../form';
import {Link} from 'react-router-dom';


class Sidebar extends Component {
    render(){
        return(
            <React.Fragment>
            <div className="layout-wrap">
             <div className="sidebar">
                <ul className="ul">
                    <li className='home'>Home</li>
                    <li className='books'>Books</li>
                    <li className='currently'>
                        <Link to={`/edit-book/${1}`}>Currently Reading</Link>
                    </li>
                    <li className= 'logout'>
                        <Link to="/login">Log Out</Link>
                    </li>
                </ul>
             </div>
            </div>
            </React.Fragment>
        )
    }
}


export default Sidebar;