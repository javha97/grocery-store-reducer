import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Nav } from "./Navigation";
export const Explorecat = () => {
  return (
    <div>
      <div className="App flex">
        <div className="containerofcat">
          <div style={{ width: "100%", height: "80px" }}>
            <div className="font  catcenter">Category</div>
          </div>
          <div className="flex cat">
            <Link to="/explore/womencat">
              <div className="cate1 f">
                <div className="cat1"></div>
                <div className="font">women's clothing</div>
              </div>
            </Link>
            <Link to="/explore/mencat">
              <div className="cate2 f">
                <div className="cat2"></div>
                <div className="font">men's clothing</div>
              </div>
            </Link>
          </div>
          <div className="flex cat">
            <Link to="/explore/eleccat">
              <div className="cate3 f">
                <div className="cat3"></div>
                <div className="font">electronics </div>
              </div>
            </Link>
            <Link to="/explore/jewcat">
              <div className="cate4 f">
                <div className="cat4"></div>
                <div className="font">jewelery</div>
              </div>
            </Link>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
};
