import logo from '../img/argentBankLogo.png'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router';
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
    <NavLink className="main-nav-logo" to="/">
      <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </NavLink>
    <div className='display_flex'>
      <NavLink to={'/profil'} className="main-nav-item" >
        <i className="fa-2x fa fa-user-circle"></i>
        {firstname}
      </NavLink>
      
      <div onClick={dispatchLogout} className="main-nav-item">
      <NavLink to={'/'} className="main-nav-item" >Sign Out</NavLink>
      </div>
    </div>
  </nav>
  );
};

export default NavSignIn;