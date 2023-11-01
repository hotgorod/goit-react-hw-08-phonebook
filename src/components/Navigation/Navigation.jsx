import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </header>
  );
}

export default Navigation;
