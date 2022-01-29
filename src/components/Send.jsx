import React, { useState } from "react";
import { BsEmojiLaughing } from "react-icons/bs";
import { FaPaperclip } from "react-icons/fa";
import { AiFillAudio, AiOutlineSend } from "react-icons/ai";

import "./Send.css";

const SendMessage = () => {
  const [inpText, setInpText] = useState("");
  return (
    <div className="send-message-container">
      <div className="emoji">
        <BsEmojiLaughing />
      </div>
      <div className="anex">
        <FaPaperclip />
      </div>
      <div className="send-input">
        <input
          type="text"
          className="send-input-message"
          placeholder="Message"
          onChange={(e) => setInpText(e.target.value)}
          value={inpText}
        />
      </div>
      <div className="audio-or-send">
        {inpText ? <AiOutlineSend /> : <AiFillAudio />}
      </div>
    </div>
  );
};

export default SendMessage;
