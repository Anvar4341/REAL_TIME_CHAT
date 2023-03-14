import React from "react";

function ChatInput() {
  return (
    <div className="send-message-div">
      <form >
        <div className="box-input">
          <input type="text" placeholder="Enter a message" name="message" />
          <button>Send</button>
        </div>
      </form>
    </div>
  );
}

export default ChatInput;
