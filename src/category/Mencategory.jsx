import React from "react";
import { Men } from "../eachcategory/Men";
import { Link } from "react-router-dom";

export const Mencategory = () => {
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
              <div className="font">Men's clothing</div>
              <div className="idk"></div>
            </div>
          </div>
           <Men />
        </div>
      </div>
    
    </>
  );
};
