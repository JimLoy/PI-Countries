import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavBar () {
  return (
    <nav>
      <NavLink to={'/home'}>Home</NavLink>
      <NavLink to={'/home/create'}>Create your own activities</NavLink>
    </nav>
  )
}
