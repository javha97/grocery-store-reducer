import React from "react";
import { useParams } from "react-router-dom";
import { Itemdata } from "./Itemdata";
import { data } from "./utils/data";
import "./App.css";
export const Itemdatamap = ({ pass, setpass, love,idk, setidk,setlove }) => {
  const { slug } = useParams();
  // console.log(pass);
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
                setidk={setidk}
                idk={idk}
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
