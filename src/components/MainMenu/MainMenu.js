import React from "react";
import {Link} from 'react-router-dom'

const MainMenu = () => {
  return (
    <div class="ui inverted vertical masthead center aligned segment">
        <div class="ui container">
          <div class="ui large secondary inverted pointing menu">
            <a className="toc item">
              <i class="sidebar icon"></i>
            </a>
            <Link to="/" class="active item">Home</Link>
            <Link to="/Price" class="item">Price</Link>
            <Link to="/AddList" class="item">Add List</Link>
            <Link to ="/add/carrier" class="item">Add Carrier</Link>
            <Link to = "/add/trip" class="item"> Add Trip </Link>
            <div class="right item">
              <Link to="/LogIn" class="ui inverted button">Log in</Link>
              <Link to="/Singup"class="ui inverted button">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
  );
};
export default MainMenu;
