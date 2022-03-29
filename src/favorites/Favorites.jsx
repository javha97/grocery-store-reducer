import React from "react";
import { Favorite } from "./Favorite";
import { Nav } from "../Navigation";
export const Favorites = ({ love, idk ,setidk }) => {
  // console.log(love);
  // console.log(idk)
 const b= love.filter(({id})=>{
    return id===idk
  });
  // console.log(b);
  return (
    <div className="App flex">
      <div className="favcontainer">
        <div className="btm">Favorites</div>
        {love &&
          
        //   love.filter(({id})=>{
        //   return id !== idk
        // })
          love.map(({ title, price ,id, image, rate: {rate}}, i) => {
            return <Favorite key={i} id={id} price={price} rate={rate} image={image} title={title} />;
          })}
      </div>
      <Nav />
    </div>
  );
};
