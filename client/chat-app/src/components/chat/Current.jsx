import React, { useContext } from "react";

function Current({user}) {
  return (
    <div className="current-user">
      <h1>{user.username}</h1>
    </div>
  );
}

export default Current;
