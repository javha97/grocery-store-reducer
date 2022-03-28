import React from "react";
import { Electronics } from "../eachcategory/electronics";
import { Link } from "react-router-dom";

export const Electronicscategory = () => {
  return (
    <>
      <div className="App flex">
        <div className="submaincontainer">
        <div style={{ width: "100%" }}>
            <div className="flex title">
              <Link to="../explore">
                {" "}
                <div className="leftarrow"></div>
              </Link>
              <div className="font">Electronics</div>
              <div className="idk"></div>
            </div>
          </div>
          <Electronics />
        </div>
      </div>
    </>
  );
};
