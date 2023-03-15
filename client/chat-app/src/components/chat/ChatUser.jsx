import React from "react";

function ChatUser({ user }) {

  return (
    <div className="chat-user">
      <img
        src="https://picsum.photos/45/45?random=12"
        style={{ borderRadius: "50%" }}
        alt=""
      />
      <h3>{user.username}</h3>
    </div>
  );
}

export default ChatUser;
