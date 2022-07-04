// React 
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
//Components
import NavSignIn from '../Components/NavSignIn';
import UserHeader from '../Components/UserHeader';
import Transactions from '../Components/Transactions';
// Redux 
import { accessProfile } from "../services/actionReducer/userProfileRequest";
import { userLogout } from '../services/actionReducer/UserReducer';
import { logout } from '../services/actionReducer/loginRequest';

export default function Profil() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {status} = useSelector((state) => state.login)
  const {token} = useSelector(state => state.user);

  const dispatchLogout = () => {
    dispatch(userLogout());
    dispatch(logout());
    navigate("/");
  }

  const loadProfile = async () =>{
    const profile = async () => dispatch(accessProfile());
    await profile();
  }
  loadProfile();

  useEffect(() => {if(status === "rejected") { dispatchLogout() }},[])
  useEffect(() => {if(token === "") { dispatchLogout() }},[])

  return (
    <div>
    <NavSignIn/>
    <main className="main bg-dark">
      <UserHeader/>
      <Transactions/>
    </main>
    </div>
  );
}