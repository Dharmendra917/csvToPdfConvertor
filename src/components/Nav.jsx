import React, { useEffect } from "react";
import "remixicon/fonts/remixicon.css";
import "../App.css";

const Nav = () => {
  const [toggle, settoggle] = React.useState(true);

  const toogleHandler = (e) => {
    e.stopPropagation();
    {
      toggle ? settoggle(false) : settoggle(true);
    }
  };

  const handleClick = () => {
    if (toggle) {
      settoggle(false);
    }
  };
  useEffect(() => {
    if (toggle) {
      window.addEventListener("click", handleClick);
    }
  }, [toggle]);
  return (
    <>
      <div className="nav">
        <h2>Csv File Converter</h2>
        <i className="ri-contrast-2-line"></i>

        <div onClick={toogleHandler} className="imgDiv">
          <img
            className="img"
            src="https://img.freepik.com/free-psd/comic-bubbles-element-isolated_23-2150339332.jpg?w=740&t=st=1707125138~exp=1707125738~hmac=e371e2dc29541ff813e46e039608ff8bdce9a48782e3166b45ab7e501b00fbac"
            alt="nothing"
          />
        </div>

        <div
          style={toggle ? { display: "block" } : { display: "none" }}
          className="hint"
        >
          <div className="innerHint">
            <h3>Instructions</h3>
            <ul>
              <li>It Accept .CSV File Only</li>
              <li>It Convert CSV File to PDF Format</li>
              <li>
                The first row of the csv file contains name, age, class,
                address_street, address_zipcode, address_city, address_state,
                hobby1, hobby2.
              </li>
              <li>You can use Browse a file(choose) or Drag'n drop</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
