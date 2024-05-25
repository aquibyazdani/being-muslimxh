import React from "react";
import "./Header.css";
import SearchIco from "../../assests/icons/search.svg";
import MenuIco from "../../assests/icons/menu.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="icons">
        <img src={MenuIco} alt={"menu"} />
      </div>
      <div className="logo">Being muslimxh</div>
      <div className="icons">
        <img src={SearchIco} alt={"menu"} />
      </div>
    </div>
  );
};

export default Header;
