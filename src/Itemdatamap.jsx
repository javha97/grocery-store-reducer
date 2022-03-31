import React from "react";
import { useParams } from "react-router-dom";
import { Itemdata } from "./Itemdata";
import { data } from "./utils/data";
import "./App.css";
export const Itemdatamap = ({
  pass,
  setcount,
  setpass,
  love,
  setlove,
  Increment,
  Decrement,
  arrofcart,
  Addtobasket,
}) => {
  const { slug } = useParams();
  return (
    <div className="App flex">
      <div className="maincontainer">
        {data
          .filter(({ id }) => {
            return id + "i" === slug;
          })
          .map(
            ({ title, image, price, id, description, rating: { rate } }, i) => {
              return (
                <Itemdata
                  Addtobasket={Addtobasket}
                  Decrement={Decrement}
                  Increment={Increment}
                  setcount={setcount}
                  arrofcart={arrofcart}
                  love={love}
                  setlove={setlove}
                  id={id}
                  pass={pass}
                  setpass={setpass}
                  key={i}
                  title={title}
                  price={price}
                  rate={rate}
                  description={description}
                  image={image}
                />
              );
            }
          )}
      </div>
    </div>
  );
};
