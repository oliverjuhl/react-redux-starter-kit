import React from 'react';
import { Link } from 'react-router';

const MainMenu = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/posts">Posts</Link></li>
  </ul>
);

export default MainMenu;
