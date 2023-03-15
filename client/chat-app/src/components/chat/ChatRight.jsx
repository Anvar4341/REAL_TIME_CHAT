import React from 'react'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'

function ChatRight({currentChat}) {
  return (
    <div className='chat-right'>
      <ChatMessages currentChat={currentChat}/>
      <ChatInput/>
    </div>
  )
}

export default ChatRight
