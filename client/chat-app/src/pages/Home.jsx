import React, {useEffect} from 'react'
import {Link, useNavigate} from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/login")
    }else {
      navigate("/chat");
    }
  }, [])

  return (
    <div>
      <h1>Home page</h1>
      <Link to="/chat">Chat</Link>
    </div>
  )
}

export default Home
