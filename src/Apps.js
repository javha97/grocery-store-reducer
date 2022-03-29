import React from "react";
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
import { Orderaccep } from "./Orderaccept";
import { useState } from "react";
export const Apps = () => {
  const [pass, setpass] = useState([]);
  const [love,setlove]=useState([])
  const [idk,setidk]=useState([])

  return (
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
        <Route
          path="/favorites/:slug"
          element={<Itemdatamap love={love} setlove={setlove} idk={idk} setidk={setidk} pass={pass} setpass={setpass} />}
        ></Route>
        <Route path="/cart/acceptorder" element={<Orderaccep />}></Route>
        <Route
          path="/cart"
          element={<Itemsonsnap  pass={pass} setpass={setpass} />}
        ></Route>
        <Route path="/favorites" element={<Favorites love={love} idk={idk} setidk={setidk} setlove={setlove} />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
