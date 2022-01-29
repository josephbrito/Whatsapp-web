import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaEllipsisV } from "react-icons/fa";
import { peopleData } from "./DataPerson";
import { useParams } from "react-router-dom";

import "./HeaderRightBar.css";
import Naruto from "../assets/images/naruto.jpg";

const HeaderRightBar = () => {
  const { id } = useParams();
  const personID = peopleData.filter((personId) => personId.id == id)[0];
  return (
    <header className="header-right">
      <nav className="nav-list-right">
        <div className="photo-right">
          <img src={personID.photo} alt="perfil" className="profile-photo" />
          <h3 className="name-person">{personID.name}</h3>
        </div>
        <ul className="list-tools-right">
          <li>
            <FiSearch />
          </li>
          <li>
            <FaEllipsisV />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderRightBar;
