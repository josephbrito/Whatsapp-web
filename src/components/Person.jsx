import React from "react";
import { Link } from "react-router-dom";

import "./Person.css";

const Person = ({ photo, name, message, id }) => {
  return (
    <Link className="link" to={`/chat/${id}`}>
      <div className="person">
        <div className="photo-person">
          <img src={photo} alt="profile" />
        </div>

        <div className="data">
          <div className="name-person">{name}</div>
          <div className="message">{message}</div>
        </div>
      </div>
    </Link>
  );
};

export default Person;
