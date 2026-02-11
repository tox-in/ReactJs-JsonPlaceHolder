import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/users">Users</Link>
        <Link to="/photos">Photos</Link>
      </nav>
    </div>
  );
};

export default Navbar;
