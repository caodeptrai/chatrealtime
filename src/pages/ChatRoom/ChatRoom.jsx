import React, { useContext } from 'react'
import Input from '../../components/Input/Input'
import Messages from '../../components/Messages/Messages'
import { ChatContext } from "../../context/ChatContext";

import { VideoCameraOutlined, PhoneOutlined, InfoCircleOutlined } from '@ant-design/icons';
import './ChatRoom.scss';

const ChatRoom = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatHeader">
        <div className="chatInfo">
          
          <img className='chatAvatar' src={data.user?.photoURL} alt="" />
          <span className='chatName'>{data.user?.displayName}</span>
        </div>
        <div className="chatIcons">
          <span>
            <VideoCameraOutlined className='chatIcon'/>
          </span>
          <span>
            <PhoneOutlined className='chatIcon'/>
          </span>
          <span>
          <InfoCircleOutlined className='chatIcon'/>
          </span>
        
        </div>
      </div>
      
        
      <Messages/>
      <Input/>
    </div>
    
  )
}

export default ChatRoom;