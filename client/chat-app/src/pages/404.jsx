import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-fount'>
      <h1>NotFound page</h1>
      <Link className='home-link-404' to="/">Home</Link>
    </div>
  )
}

export default NotFound
