import React from "react";

import "./People.css";
import Person from "./Person";
import { peopleData } from "./DataPerson";

const People = () => {
  return (
    <div className="main-chat">
      {peopleData.map((person) => (
        <Person
          name={person.name}
          photo={person.photo}
          message={person.message}
          id={person.id}
        />
      ))}
    </div>
  );
};

export default People;
