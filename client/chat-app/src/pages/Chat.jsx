import React from "react";
import ChatLeft from "../components/chat/ChatLeft";
import ChatRight from "../components/chat/ChatRight";

function Chat() {
  return (
    <div className="container">
      <div className="chat-body">
        <ChatLeft />
        <ChatRight />
      </div>
    </div>
  );
}

export default Chat;
