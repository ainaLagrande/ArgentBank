// Assets 
import logo from '../img/argentBankLogo.png'
// React 
import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
// Components 
import LoggedInNav from './LoggedInNav';
import LoggedOutNav from './LoggedOutNav';


export default function NavBar() {
    const selectUserInfos = (type) => (state) => state.user[type];
    const token = useSelector(selectUserInfos("token"));
    
    return (
      <nav className="main-nav">
        <Link to={"/"}>
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {token === "" ? <LoggedOutNav /> : <LoggedInNav />}
      </nav>
    );

}

