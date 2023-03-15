import {useState, useEffect} from 'react'
import { allUsersRoute } from './utils/ApiRoute'
import axios from 'axios';

function DatasApi() {
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("token")))
    }, [])

    useEffect( () => {
        const asyncFun = async () => {
            const {data} = await axios.get(allUsersRoute);
            return data
        }
        asyncFun().then(data => {
            setUsers(data);
        })
    }, [])

    
  return {
    user: {setUser, user},
    users: {users, setUsers}
  }
}

export default DatasApi
