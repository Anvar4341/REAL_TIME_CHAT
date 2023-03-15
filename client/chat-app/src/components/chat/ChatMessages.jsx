import React from 'react'
import ChatContainer from './ChatContainer'

function ChatMessages({currentChat}) {
  return (
    <div className='messages'>
      <div style={{display:"flex", justifyContent: "space-between", alignItems:"center"}}>
      
      <h1>{currentChat.username}</h1>
      
      <button type='button' 
        style={{border:"1px solid #eee", padding: "7px", borderRadius: "4px", cursor: "pointer"}}
      >Exit</button>
      </div>
      <ChatContainer />
    </div>
  )
}

export default ChatMessages
