import React from "react";
import banner from "./banner.png";

function Header() {
  return (
    <header className="header">
      <img src={banner} alt="Employee Directory banner"></img>
    </header>
  );
}

export default Header;
