import React, {useEffect, useState, useRef, useContext} from "react";
import {useNavigate} from "react-router-dom";
import ChatRight from "../components/chat/ChatRight";
import ChatUsers from "../components/chat/ChatUsers";
import { Store } from "../ContexStore";
import {io} from "socket.io-client";
import { host } from "../utils/ApiRoute";

function Chat() {
  const store = useContext(Store);
  const { users } = store.datas.users;
  const socket = useRef();
  const navigate = useNavigate();
  const [currentChat, setCurrentChat] = useState(undefined);
  const {user} = store.datas.user;

  useEffect(() => {
    if (user) {
      socket.current = io(host)
      socket.current.emit("newuser", user._id)
    }
  }, [user]);

  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/login");
    }else {
      navigate("/chat");
    }
  }, [navigate])

  const changeChat = (chat) => {
    setCurrentChat(chat)
  }

  return (
    <div className="container">
      <div className="chat-body">
        <ChatUsers users={users} user={user} changeChat={changeChat}/>
        
        {currentChat === undefined ? 
        <div className="select-not-user">
          <h1>Select any user</h1>
        </div> :
        <ChatRight currentChat={currentChat} socket={socket}/>
        }
      </div>
    </div>
  );
}

export default Chat;
