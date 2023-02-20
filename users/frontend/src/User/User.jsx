import React, { useState, useEffect } from "react";
import "./user.css"


const  User=()=> {
  const [users, setUsers] = useState([]);
console.log(users)
  const getUser = async () =>{
    let res = await fetch(`http://localhost:2023/users`)
    let data = await res.json();
    console.log(data)
    setUsers(data)
  }


  useEffect(() => {
    getUser()
  }, []);

  console.log(users)

  function handleDelete(id) {
    const newUsers = users.filter((user) => user._id !== id);

    setUsers(newUsers);
  }

  return (
    <>
    <h1>Users Data</h1>

    <div className="Header">

      {users.map((user) => (
        <div key={user.id} className="card">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.gender}</p>
          <p>{user.phone}</p>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </div>
      ))}
    </div>
    </>
  );
}

export default User;