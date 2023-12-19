import React from "react";
import "../styles/changeCurrency.css";
import { spiral } from "ldrs";

spiral.register();

// Default values shown

const Disabledbutton = () => {
  return (
    <div>
      <button disabled type="button" className="disabled-btn">
        <l-spiral size="35" speed="0.9" color="white"></l-spiral>
      </button>
    </div>
  );
};

export default Disabledbutton;
