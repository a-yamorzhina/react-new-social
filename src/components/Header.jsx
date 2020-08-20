import React from "react";
import s from "./Header.module.css";


const Header = () => {
  return (
    <header className={s.header}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Wikivoyage_Logo_-_White_on_violet.svg/250px-Wikivoyage_Logo_-_White_on_violet.svg.png'/>
    </header>
  )
};

export default Header;
