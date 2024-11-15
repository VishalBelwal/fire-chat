import React from 'react'
import './sideBar.css'
import { UserInfo } from './userInfo/UserInfo'
import { ChatList } from './chatList/ChatList'

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}
