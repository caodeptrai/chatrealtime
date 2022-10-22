import React, { useContext } from 'react'
import Input from './Input'
import Messages from './Messages'
import { ChatContext } from "../context/ChatContext";

import { VideoCameraOutlined,UserAddOutlined,MoreOutlined } from '@ant-design/icons';

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span className='chatName'>{data.user?.displayName}</span>
        <div className="chatIcons">
          <span>
            <VideoCameraOutlined />
          </span>
          <span>
            <UserAddOutlined />
          </span>
          <span>
            <MoreOutlined />
          </span>
        
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat