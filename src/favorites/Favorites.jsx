import React from "react";
import { Favorite } from "./Favorite";
import { Nav } from "../Navigation";
import { useContext } from "react";
import { mycontext } from "../Apps";
export const Favorites = () => {
  const myval=useContext(mycontext)
  return (
    <div className="App flex">
      <div className="favcontainer">
        <div className="btm">Favorites</div>
        {myval.arrofcart.favourite &&
          myval.arrofcart.favourite.map(({ title, price, id, image, rate }, i) => {
            return <Favorite key={i} id={id} price={price} rate={rate} image={image} title={title} />;
          })}
      </div>
      <Nav />
    </div>
  );
};
