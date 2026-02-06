import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../Services/api';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers().then(setUsers).finally(() => setLoading(false));
        
    }, []);
    
    if(loading) return <h3>Loading Users</h3>
  return (
    <div>
        {
            users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <h1>{user.username}</h1>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Users