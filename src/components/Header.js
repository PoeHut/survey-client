import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const auth = useSelector((state) => state.auth);

  const handleMenu = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  };

  return (
    <nav>
      <div class="nav-wrapper">
        <Link to={auth ? "/survey" : "/"} class="brand-logo">
          Emaily
        </Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          {handleMenu()}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
