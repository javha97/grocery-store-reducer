import React from "react";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { Favorite } from "./Favorite";
import { Nav } from "../Navigation";
export const Favorites = () => {
  const [boolean, setboolean] = useState([]);
  useEffect(() => {
    db.collection("hi").onSnapshot((onSnapshot) => {
      setboolean([]);
      onSnapshot.forEach((doc) => {
        setboolean((boolean) => [
          ...boolean,
          {
            bool: doc.data().bool,
            title: doc.data().title,
            price: doc.data().price,
          },
        ]);
      });
    });
  }, []);
  // console.log(boolean);
  return (
    <div className="App flex">
      <div className="favcontainer">
        <div className="btm">Favorites</div>
        {boolean.map(({ title, bool, price }, i) => {
          return (!bool && <Favorite key={i} price={price} etitle={title} bool={bool} />);
        })}
      </div>
      <Nav />
    </div>
  );
};
