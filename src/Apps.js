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
import { useReducer } from "react";

const initialarrofcart = { cart: [], favourite: [] };
const reducer = (arrofcart, action) => {
  switch (action.type) {
    case "Increment":
      let newarrplus = []
      arrofcart.cart.map((el) => {
        if (el.id === action.data.id) {
          newarrplus.push({
            ...el,
            num: el.num + 1
          })
        }
        else {
          newarrplus.push(el)
        }
      })
      return {
        ...arrofcart,
        cart: newarrplus
      }
    case "Decrement":
      let myarr = []
      arrofcart.cart.map((el) => {
        if (el.id === action.data.id) {
          myarr.push({
            ...el,
            num: el.num - 1
          })
        } else {
          myarr.push(el)
        }
      })
      return {
        ...arrofcart,
        cart: myarr.filter(({ num }) => num > 0)
      }
    case "Addtobasket":
      const newarr = []
      let isAdded = false
      arrofcart.cart.map((el) => {
        if (el.id === action.data.id) {
          newarr.push({
            ...el,
            num: el.num + action.data.num
          })
          isAdded = true
        } else {
          newarr.push(el)
        }
      })
      if (!isAdded) {
        newarr.push({
          num: action.data.num,
          id: action.data.id,
          data: action.data.el,
          price: action.data.price,
        })
      }
      return {
        ...arrofcart,
        cart: newarr
      }
    case "Delete":
      let a = arrofcart.cart.filter(({ id }) => {
        return id !== action.id
      })
      return {
        ...arrofcart,
        cart: a
      }
    case "Addfav":
      let myfav = []
      let del = false
      arrofcart.favourite.map((el) => {
        if (el.id === action.id) {
          myfav.push()
          del = true
        } else {
          myfav.push(el)
        }
      })
      if (!del) {
        myfav.push({
          id: action.id,
          price: action.price,
          image: action.image,
          rate: action.rate,
          title: action.title,
        })
      }
      return {
        ...arrofcart,
        favourite: myfav
      }
  }
};
export const Apps = () => {
  const [arrofcart, dispatch] = useReducer(reducer, initialarrofcart);
  const Increment = (id) => {
    dispatch({ type: "Increment", data: { id } });
  };
  const Decrement = (id) => {
    dispatch({ type: "Decrement", data: { id } });
  };
  const Addtobasket = (id, num, el, price, title, description) => {
    dispatch({ type: "Addtobasket", data: { id, num, el, price, title, description } });
  };
  const Del = (id) => {
    dispatch({ type: "Delete", id })
  }
  const fav = (id, image, price, rate, title) => {
    dispatch({ type: "Addfav", id, image, price, rate, title })
  }
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
          element={<Itemdatamap Addtobasket={Addtobasket} fav={fav} />}  ></Route>
        <Route path="/cart/acceptorder" element={<Orderaccep />}></Route>
        <Route
          path="/cart"
          element={<Itemsonsnap arrofcart={arrofcart} Increment={Increment} Decrement={Decrement} Del={Del} />}
        ></Route>
        <Route
          path="/favorites"
          element={<Favorites arrofcart={arrofcart} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
