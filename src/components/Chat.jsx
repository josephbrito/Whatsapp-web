import React from "react";
import ChatMain from "./ChatMain";
import HeaderRightBar from "./HeaderRightBar";
import SendMessage from "./Send";

const Chat = () => {
  return (
    <div className="chat">
      <HeaderRightBar />
      <ChatMain />
      <SendMessage />
    </div>
  );
};

export default Chat;
