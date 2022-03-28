import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
export const Nav = () => {
  return (
    <div className="navcont flex">
      <Link to="/">
        {" "}
        <button id="shopbtn">
          <div className="Shopicon"></div>
          Shop
        </button>
      </Link>

      <Link to="/explore">
        {" "}
        <button id="expbtn">
          <div className="expicon fontnav "></div>Explore
        </button>
      </Link>
      <Link to="/cart">
        <button id="cartbtn">
          <div className="carticon fontnav "></div>Cart
        </button>
      </Link>
      <Link to="/favorites">
        <button id="favbtn">
          <div className="loveicon fontnav "></div>Favourite
        </button>
      </Link>
      <button id="accbtn">
        <div className="accicon fontnav "></div>Account
      </button>
    </div>
  );
};
