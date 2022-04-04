import React from "react";
import "../App.css";
import { useContext } from "react";
import { mycontext } from "../Apps";
export const EachItem = ({ price, id, image, title, num }) => {
    const myval = useContext(mycontext)
    return (
        <div className="cartcont">
            <div className="flex cartitem">
                <img src={image} alt="#"></img>
                <div className="gg">
                    <p>{title}</p>
                    <div className="flex style">
                        <button className="minus" onClick={() => myval.Decrement(id)}>
                            <div className="minusicon"></div>
                        </button>
                        <div className="margin-top">{num}</div>
                        <button className="plus" onClick={() => myval.Increment(id)}>
                            <div className="plusicon"></div>
                        </button>
                    </div>
                </div>
                <div className="delprice">
                    <div className="x" onClick={() => myval.Del(id)}></div>
                    <div>${(num * price).toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
};
