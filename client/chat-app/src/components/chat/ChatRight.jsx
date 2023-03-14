import React from 'react'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'

function ChatRight() {
  return (
    <div className='chat-right'>
      <ChatMessages/>
      <ChatInput/>
    </div>
  )
}

export default ChatRight
