import React, { useContext } from 'react'
import {Modal} from 'antd'
import { 
    CalendarOutlined, 
    CameraOutlined, 
    EditOutlined, 
    EnvironmentOutlined, 
    FacebookOutlined, 
    HomeOutlined, 
    InstagramOutlined, 
    MailOutlined, 
    PhoneOutlined} from '@ant-design/icons';
  import { Tooltip, Avatar} from 'antd';
  import { Link } from 'react-router-dom';
  import { AuthContext } from "../../../context/AuthContext";
import { AppContext } from '../../../context/AppContext';
import './Profile.scss'
import { ChatContext } from '../../../context/ChatContext';

function ProfileOwnerModal() {
    const { data } = useContext(ChatContext);
    const {isVisibleProfileUser,setIsProfileVisibleUser} = useContext(AppContext)

    const handleOk = ()=> {
        setIsProfileVisibleUser(false)
    }

    const handleCancel = ()=> {
        setIsProfileVisibleUser(false)
    }
  return (
    <Modal  
    open={isVisibleProfileUser}
    onOk={handleOk}
    onCancel={handleCancel}
    destroyOnClose={true}>
         <div className='pro'>
      <div className="pro-header">
        <div className="sideRight">
          <div className="rightAvatarWrap">
            <img className='rightAvatar' src={data.user.photoURL} alt="" />
            <button className='updateAvatarBtn'>
              <CameraOutlined />
            </button>
          </div>
          
          <div className="rightInfo">
            <h3 className='rightInfo-name'>{data.user.displayName}</h3>
            <span>1,9K bạn bè</span>
            <div className="rightInfo-friendAvatar">
              
            <Avatar.Group size='small' maxCount={2}>
              <Tooltip title='A'>
              <Avatar></Avatar>
              </Tooltip>
              <Tooltip title='A'>
              <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_4aDv5qEw9vo4eEBkDQADW7xUNEAlCW_sY4T94s&s'></Avatar>
              </Tooltip>
              <Tooltip title='A'>
              <Avatar></Avatar>
              </Tooltip>
              <Tooltip title='A'>
              <Avatar></Avatar>
              </Tooltip>
              <Tooltip title='A'>
              <Avatar></Avatar>
              </Tooltip>
            </Avatar.Group>
            </div>
          </div>
        </div>
        <div className="sideLeft">
            
        </div>
      </div>
      <div className="pro-content">
        <h3 className='introduce'>Giới thiệu</h3>
        <div className="pro-contentWrap">
          <HomeOutlined className='profileIcon'/>
          <span>Sống tại <b>Thái Nguyên</b></span>
          
        </div>
        <div className="pro-contentWrap">
          <MailOutlined className='profileIcon'/>
          <span>{data.user.email}</span>
        </div>
        <div className="pro-contentWrap">
          <PhoneOutlined className='profileIcon'/>
          <span>0868876059</span>
        </div>
        <div className="pro-contentWrap">
          <CalendarOutlined className='profileIcon'/>
          <span>30/04/2001</span>
        </div>
        {/* <div className="pro-contentWrap">
          <FacebookOutlined  className='profileIcon'/>
          <Link to='/https://www.facebook.com/cao.h147'>https://www.facebook.com/cao.h147</Link >
        </div>
        <div className="pro-contentWrap">
          <InstagramOutlined className='profileIcon'/>
          <Link to='/https://www.instagram.com/cao.h147'>https://www.instagram.com/cao.h147</Link>
        </div> */}

      </div>
      
    </div>
    </Modal>
  )
}

export default ProfileOwnerModal