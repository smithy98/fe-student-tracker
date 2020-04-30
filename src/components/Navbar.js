import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbox">Home</div>
      </Link>
      <Link to="/students">
        <div className="navbox">All Students</div>
      </Link>
      <Link to="/students/block">
        <div className="navbox">Block</div>
      </Link>
    </nav>
  );
};

export default Navbar;
