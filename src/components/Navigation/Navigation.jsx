import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthIsSignedIn } from 'redux/auth.selectors';

const Navigation = () => {
  const isSignedIn = useSelector(selectAuthIsSignedIn);

  return (
    <header>
      <NavLink to="/">Home</NavLink>

      {isSignedIn ? (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          <button>Log Out</button>
        </>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </header>
  );
};

export default Navigation;
