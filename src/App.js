import "./App.css";
import { Nav } from "./Navigation";
import { Women } from "./eachcategory/women's clothing";
import { Men } from "./eachcategory/Men";
import { Electronics } from "./eachcategory/electronics";
import { Jewelery } from "./eachcategory/jewelery";
import { useState } from "react";
import { data } from "./utils/data";
import Singleitem from "./Singleitem";
function App() {
  const [value, setvalue] = useState("");
  const onchange = (e) => {
    setvalue(e.target.value);
  };
  return (
    <>
      {!value ? (
        <div className="App flex">
          <div className="maincontainer">
            <div className="searchcont flex">
              <div className="searchicon"></div>
              <input
                value={value}
                onChange={onchange}
                className="input"
                placeholder="Search Store"
              ></input>
            </div>
            <div
              style={{ height: "720px", marginTop: "20px", overflow: "scroll" }}
            >
              <div className="font l">Women's clothing</div>
              <div className="itemcontainer flex">
                <Women />
              </div>
              <div className="font l">Men's clothing</div>
              <div className="itemcontainer flex">
                <Men />
              </div>
              <div className="font l">Electronics</div>
              <div className="itemcontainer flex">
                <Electronics />
              </div>
              <div className="font l">Jewelery</div>
              <div className="itemcontainer flex">
                <Jewelery />
              </div>
            </div>
            <Nav />
          </div>
        </div>
      ) : (
        <div className="App flex">
          <div className="imaincontainer">
            <div className="searchcont flex">
              <div className="searchicon"></div>
              <input
                value={value}
                onChange={onchange}
                className="input"
                placeholder="Search Store"
              ></input>
            </div>
            {data
              .filter((el) => {
                const a = el.title.toLowerCase();
                if (a.includes(value)) {
                  return el;
                }
              })
              .map(({ id, title, image, price }, i) => {
                return (
                  <Singleitem
                    id={id}
                    title={title}
                    key={i}
                    price={price}
                    image={image}
                  />
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
