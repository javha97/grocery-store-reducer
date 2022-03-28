import React from "react";
import { Link } from "react-router-dom";

import { Jewelery } from "../eachcategory/jewelery";
export const Jewelerycategory = () => {
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
              <div className="font">Jewelery</div>
              <div className="idk"></div>
            </div>
          </div>
          <Jewelery />
        </div>
      </div>
    </>
  );
};
