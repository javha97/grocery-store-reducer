import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { db } from "./firebase";
const Singleitem = ({ id, title, image, category, description, price }) => {

  return (
    <>
      <div className="eachitem flex">
        <div className="subcontainer">
          <img src={image} alt="#"></img>
          <div className="title">{title}</div>
          <div className="flex space-around">
            <div className="flex center">
              ${price}
            </div>
            <Link to={"/favorites/" + id + "i"}>
              {" "}
              <button id={id} className="itembtn">
                <div className="whiteplus"></div>
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Singleitem;
