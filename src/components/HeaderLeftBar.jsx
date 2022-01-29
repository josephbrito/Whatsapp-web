import React from "react";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FaCircleNotch, FaEllipsisV } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import edinaldo from "../assets/images/edinaldo.png";
import "./HeaderLeftBar.css";

const HeaderLeftBar = () => {
  return (
    <header className="header-left">
      <nav className="nav-list">
        <div className="photo">
          <img src={edinaldo} alt="perfil" className="profile-photo" />
        </div>
        <ul className="list-tools">
          <li>
            <FaCircleNotch />
          </li>
          <li>
            <BsFillChatLeftTextFill />
          </li>
          <li>
            <FaEllipsisV />
          </li>
        </ul>
      </nav>
      <div className="header-left-input-container">
        <div className="header-left-input">
          <FiSearch />
          <input
            type="search"
            className="inp-header-left"
            placeholder="Search or start new chat"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderLeftBar;
