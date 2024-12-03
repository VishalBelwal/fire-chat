import "./addUser.css"

import React from 'react'

const AddUser = () => {
  return (
    <div className="addUser">
        <form action="">
            <input type="text" placeholder="UserName" name="username" className="text-black" />
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src="./avatar.png" alt="" />
                <span>Dough Doe</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default AddUser