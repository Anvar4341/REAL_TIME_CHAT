import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ChatLeft from "../components/chat/ChatLeft";
import ChatRight from "../components/chat/ChatRight";


function Chat() {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/login")
    }else {
      navigate("/chat");
    }
  }, [])
  
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
