
import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import user from '../services/actionReducer/UserReducer';

export default   function LoggedInNav({ firstname }) {
    const selectUserInfos = (type) => (state) => state.user[type];
    firstname = useSelector(selectUserInfos("firstname"));
    const dispatch = useDispatch()
  
    return (
      <div>
        <Link to={"/profile"} className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {firstname}
        </Link>
        <Link to={"/"} onClick={() =>dispatch(user.actions.logout())} className="main-nav-item">
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    );
  }