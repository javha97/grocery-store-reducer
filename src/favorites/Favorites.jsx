import React from "react";
import { Favorite } from "./Favorite";
import { Nav } from "../Navigation";
export const Favorites = ({ arrofcart }) => {

  return (
    <div className="App flex">
      <div className="favcontainer">
        <div className="btm">Favorites</div>
        {arrofcart.favourite &&
          arrofcart.favourite.map(({ title, price, id, image, rate }, i) => {
            return <Favorite key={i} id={id} price={price} rate={rate} image={image} title={title} />;
          })}
      </div>
      <Nav />
    </div>
  );
};
