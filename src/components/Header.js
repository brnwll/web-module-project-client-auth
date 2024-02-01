import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Friends Database</h1>
      <nav>
        <Link to="/login">Login.</Link>
        <Link to="/friends">FriendList.</Link>
        <Link to="/friends/add">AddFriend.</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  );
}

export default Header;
