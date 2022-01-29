import React from "react";
import { peopleData } from "./DataPerson";
import { useParams } from "react-router-dom";

import "./ChatMain.css";

const ChatMain = () => {
  const { id } = useParams();
  const personID = peopleData.filter((personId) => personId.id == id)[0];
  return (
    <div className="chat-main">
      <div className="lMessage-container">
        <div className="lMessage">
          <p>{personID.message}</p>
        </div>
      </div>
      <div className="rMessage-container">
        <div className="rMessage">{/* <p>Coming soon</p> */}</div>
      </div>
    </div>
  );
};

export default ChatMain;
