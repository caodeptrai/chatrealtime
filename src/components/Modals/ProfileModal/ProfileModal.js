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
  import { Button, Tooltip, Avatar, Form, Input, Alert } from 'antd';
  import { Link } from 'react-router-dom';
  import { AuthContext } from "../../../context/AuthContext";
import { AppContext } from '../../../context/AppContext';
import './Profile.scss'
function ProfileModal() {
    const { currentUser } = useContext(AuthContext);
    const {isProfileVisible,setIsProfileVisible} = useContext(AppContext)

    const handleOk = ()=> {
        setIsProfileVisible(false)
    }

    const handleCancel = ()=> {
        setIsProfileVisible(false)
    }
  return (
    <Modal  
    open={isProfileVisible}
    onOk={handleOk}
    onCancel={handleCancel}
    destroyOnClose={true}>
         <div className='pro'>
      <div className="pro-header">
        <div className="sideRight">
          <div className="rightAvatarWrap">
            <img className='rightAvatar' src={currentUser.photoURL} alt="" />
            <button className='updateAvatarBtn'>
              <CameraOutlined />
            </button>
          </div>
          
          <div className="rightInfo">
            <h3 className='rightInfo-name'>{currentUser.displayName}</h3>
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
            <button className='editbtn'>
              <EditOutlined className='profileIcon'/>
              Chỉnh sửa trang cá nhân
              </button>
        </div>
      </div>
      <div className="pro-content">
        <h3 className='introduce'>Giới thiệu</h3>
        <button className='addStory'>Thêm tiểu sử</button>
        <div className="pro-contentWrap">
          <HomeOutlined className='profileIcon'/>
          <span>Sống tại <b>Thái Nguyên</b></span>
          
        </div>
        <div className="pro-contentWrap">
        <EnvironmentOutlined className='profileIcon'/>
          <span>Đến từ <b>Thái Nguyên</b></span>
        </div>
        <div className="pro-contentWrap">
          <MailOutlined className='profileIcon'/>
          <span>{currentUser.email}</span>
        </div>
        <div className="pro-contentWrap">
          <PhoneOutlined className='profileIcon'/>
          <span>0868876059</span>
        </div>
        <div className="pro-contentWrap">
          <CalendarOutlined className='profileIcon'/>
          <span>30/04/2001</span>
        </div>
        <div className="pro-contentWrap">
          <FacebookOutlined  className='profileIcon'/>
          <Link to='/https://www.facebook.com/cao.h147'>https://www.facebook.com/cao.h147</Link >
        </div>
        <div className="pro-contentWrap">
          <InstagramOutlined className='profileIcon'/>
          <Link to='/https://www.instagram.com/cao.h147'>https://www.instagram.com/cao.h147</Link>
        </div>

      </div>
      
    </div>
    </Modal>
  )
}

export default ProfileModal