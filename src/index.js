import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Explorecat } from "./Explore.jsx";
import { Jewelerycategory } from "./category/Jewelerycategory";
import { Mencategory } from "./category/Mencategory";
import { Electronicscategory } from "./category/electronicscategory";
import { Womencategory } from "./category/Womencategory";
import { Itemdatamap } from "./Itemdatamap";
import { Itemsonsnap } from "./Cart/Items.jsx";
import { Favorites } from "./favorites/Favorites";
import {Orderaccep} from './Orderaccept'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/explore" element={<Explorecat />}></Route>
        <Route path="/explore/mencat" element={<Mencategory />}></Route>
        <Route path="/explore/jewcat" element={<Jewelerycategory />}></Route>
        <Route
          path="/explore/eleccat"
          element={<Electronicscategory />}
        ></Route>
        <Route path="/explore/womencat" element={<Womencategory />}></Route>
        <Route path="/favorites/:slug" element={<Itemdatamap />}></Route>
        <Route path="/cart/acceptorder" element={<Orderaccep/>}></Route>

        <Route path="/cart" element={<Itemsonsnap />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
