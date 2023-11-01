import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth.selectors';

const UserMenu = () => {
    const userState = useSelector(selectAuthUserData)
   
  return (
    <div>
      <p>{userState.email}</p>
      <button>Logout</button>
    </div>
  );
}

export default UserMenu;
