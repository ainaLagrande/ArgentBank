// Assets 
import logo from '../img/argentBankLogo.png'
// React 
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router';
// Redux 
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../services/actionReducer/UserReducer';
import { logout } from '../services/actionReducer/loginRequest';

/**
* create Sign in nav
*
* @param Hooks - 
* @return  redirection, reducer function, the state .
* @param dispatchLogout - 
* @return user log out 
* @return html - sign in nav
*/
const NavSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {firstname} = useSelector(state => state.user);
  
  const dispatchLogout = () => {
    dispatch(userLogout());
    dispatch(logout());
    navigate("/");
  }

  return (
  <nav className="main-nav">
    <NavLink to={'/'} className="main-nav-logo">
      <img
        className="main-nav-logo-image"
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
    <div>
      <NavLink  to={'/profil'} className="main-nav-item" >
        <i className="fa fa-user-circle"></i>
        {firstname}
      </NavLink>
        
      <NavLink onClick={dispatchLogout} to={'/'}  className="main-nav-item" >
        <i className="fa fa-sign-out"></i>
        Sign Out
      </NavLink>
    </div>
  </nav>
  );
};

export default NavSignIn;