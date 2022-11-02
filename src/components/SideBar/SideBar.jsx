import React from 'react'
import UserChats from '../UserChats/UserChats';
import Search from '../Search/Search';
import './SideBar.scss';
import { UsergroupAddOutlined } from '@ant-design/icons';


const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="navbar">
        <h3 className='chatsTitle'>Chats</h3>
        <button className='addGroupChat'>
          <UsergroupAddOutlined className='addGroupChatIcon'/>
        </button>
      </div>
      

      {/* <Navbar/> */}
     <Search/>
      <UserChats/>
      
    </div>
  )
}

export default SideBar