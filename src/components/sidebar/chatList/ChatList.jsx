import React, { useState } from 'react'
import './chatList.css'
import AddUser from './addUser/AddUser'

export const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='search' className=' text-md placeholder:text-md' />
        </div>
        <img src={addMode? "./minus.png" :"./plus.png"} alt="" className='add transition-all duration-300' onClick={() => setAddMode((prev) => !prev)} />
      </div>

      <div className='item'>
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>John Doe</span>
          <p>hello</p>
        </div>
      </div>
      <div className='item'>
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>John Doe</span>
          <p>hello</p>
        </div>
      </div>
      <div className='item'>
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>John Doe</span>
          <p>hello</p>
        </div>
      </div>
      {
        addMode && <AddUser />
      }
    </div>
  )
}
