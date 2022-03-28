import React from "react";
import { Women } from "../eachcategory/women's clothing";
import { Link } from "react-router-dom";
export const Womencategory = () => {
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
              <div className="font">Women's clothing</div>
              <div className="idk"></div>
            </div>
          </div>
          <Women />
        </div>
      </div>
    </>
  );
};
