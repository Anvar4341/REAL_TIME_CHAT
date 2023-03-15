import React, { useState } from "react";
import ChatUser from "./ChatUser";
import Current from "./Current";

function ChatUsers({ users, user, changeChat }) {
  const [selectUser, setSelectUser] = useState({});

  const handleClick = (index, user) => {
    setSelectUser(index);
    changeChat(user);
  };

  return (
    <div className="chat-left">
      <h1 style={{ textAlign: "center" }}>Users</h1>

      <div className="users">
        {users.map((user, index) => {
          return (
            <div key={user._id} className="" onClick={() => handleClick(index, user)}>
              <ChatUser user={user} />
            </div>
          )
        })}
      </div>
      <Current user={user}  />
    </div>
  );
}

export default ChatUsers;
