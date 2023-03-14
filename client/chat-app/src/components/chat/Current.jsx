import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";

function Current() {
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState({});

    useEffect( () => {
        if (!localStorage.getItem("token")){
            navigate("/chat");
        }else {
            setCurrentUser(JSON.parse(localStorage.getItem("token")));
        }
    }, [setCurrentUser, currentUser])

    console.log(currentUser);
  return (
    <div className='current-user'>
      <h1>{currentUser.username}</h1>
    </div>
  )
}

export default Current
