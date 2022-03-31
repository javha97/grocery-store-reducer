import React, { useEffect } from "react";
import App from "./App";
import { data } from "./utils/data";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Explorecat } from "./Explore.jsx";
import { Jewelerycategory } from "./category/Jewelerycategory";
import { Mencategory } from "./category/Mencategory";
import { Electronicscategory } from "./category/electronicscategory";
import { Womencategory } from "./category/Womencategory";
import { Itemdatamap } from "./Itemdatamap";
import { Itemsonsnap } from "./Cart/Items.jsx";
import { Favorites } from "./favorites/Favorites";
import { Orderaccep } from "./Orderaccept";
import { useState, useReducer } from "react";

const initialarrofcart = { cart: [], count: 0 };
const reducer = (arrofcart, action) => {
  switch (action.type) {
    case "Increment":
      return { count: arrofcart.count + 1 };
    case "Decrement":
      return { count: action.count - 1 };
    case "Addtobasket":
      return {
        ...arrofcart,
        cart: [...arrofcart.cart, { id: action.data }],
      };
  }
};

// function additemtocart() {
//   const Addtobasket = () => {
//     if (pass.length !== 0) {
//       let a = pass.filter((el) => {
//         return el.id === id;
//       });
//       if (a.length !== 0) {
//         const b = pass.filter((el) => {
//           return el.id !== id;
//         });
//         setpass([
//           ...b,
//           {
//             count: count2 + a[0].count,
//             price: price,
//             title: title,
//             id: id,
//             image: image,
//           },
//         ]);
//       } else {
//         setpass([
//           ...pass,
//           { count: count2, price: price, title: title, id: id, image: image },
//         ]);
//       }
//     } else {
//       setpass([
//         ...pass,
//         { count: count2, price: price, title: title, id: id, image: image },
//       ]);
//     }
//   };
// }
export const Apps = () => {
  const [arrofcart, dispatch] = useReducer(reducer, initialarrofcart);
  const [cartarr, setcartarr] = useState([]);
  const [pass, setpass] = useState([]);
  console.log(arrofcart);
  // console.log(arrofcart);

  // const [count2, setcount] = useState(1);
  const Increment = () => {
    dispatch({ type: "Increment", count: 1 });
  };
  const Decrement = () => {
    dispatch({ type: "Decrement" });
  };
  const Addtobasket = (id) => {
    console.log("id:", id);
    dispatch({ type: "Addtobasket", data: { id } });
  };
  const [love, setlove] = useState([]);
  // console.log(additemtocart);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        {/* <Route path="/explore" element={<Explorecat />}></Route> */}
        {/* <Route path="/explore/mencat" element={<Mencategory />}></Route> */}
        {/* <Route path="/explore/jewcat" element={<Jewelerycategory />}></Route> */}
        {/* <Route
          path="/explore/eleccat"
          element={<Electronicscategory />}
        ></Route> */}
        {/* <Route path="/explore/womencat" element={<Womencategory />}></Route> */}
        <Route
          path="/favorites/:slug"
          element={
            <Itemdatamap
              Addtobasket={Addtobasket}
              arrofcart={arrofcart}
              Decrement={Decrement}
              Increment={Increment}
              love={love}
              setlove={setlove}
              pass={pass}
              setpass={setpass}
            />
          }
        ></Route>
        {/* <Route path="/cart/acceptorder" element={<Orderaccep />}></Route> */}
         <Route
          path="/cart"
          element={<Itemsonsnap arrofcart={arrofcart} />}
        ></Route> 
        {/* <Route
          path="/favorites"
          element={<Favorites love={love} setlove={setlove} />}
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
};
