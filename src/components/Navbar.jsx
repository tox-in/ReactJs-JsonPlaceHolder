import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/todos">Todos</Link>
      </nav>
    </div>
  );
};

export default Navbar;
