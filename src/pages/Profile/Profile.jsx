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
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

import './Profile.scss'

const Profile = ()=> {
  const { currentUser } = useContext(AuthContext);
  return (
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
              <img className='friendAvatar' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/308476054_1103307597057379_870838083421102790_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_MeKrdoDd9oAX_4PAQP&_nc_ht=scontent.fhan5-9.fna&oh=00_AfByf0oDajWUe-rqoPIuiYBmMCHYxTsbF3n0bfNwxFzLlw&oe=63684D1D" alt="" />
              <img className='friendAvatar' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/308476054_1103307597057379_870838083421102790_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_MeKrdoDd9oAX_4PAQP&_nc_ht=scontent.fhan5-9.fna&oh=00_AfByf0oDajWUe-rqoPIuiYBmMCHYxTsbF3n0bfNwxFzLlw&oe=63684D1D" alt="" />
              <img className='friendAvatar' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/308476054_1103307597057379_870838083421102790_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_MeKrdoDd9oAX_4PAQP&_nc_ht=scontent.fhan5-9.fna&oh=00_AfByf0oDajWUe-rqoPIuiYBmMCHYxTsbF3n0bfNwxFzLlw&oe=63684D1D" alt="" />
              <img className='friendAvatar' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/308476054_1103307597057379_870838083421102790_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_MeKrdoDd9oAX_4PAQP&_nc_ht=scontent.fhan5-9.fna&oh=00_AfByf0oDajWUe-rqoPIuiYBmMCHYxTsbF3n0bfNwxFzLlw&oe=63684D1D" alt="" />
              <img className='friendAvatar' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/308476054_1103307597057379_870838083421102790_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_MeKrdoDd9oAX_4PAQP&_nc_ht=scontent.fhan5-9.fna&oh=00_AfByf0oDajWUe-rqoPIuiYBmMCHYxTsbF3n0bfNwxFzLlw&oe=63684D1D" alt="" />
              <img className='friendAvatar' src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/308476054_1103307597057379_870838083421102790_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_MeKrdoDd9oAX_4PAQP&_nc_ht=scontent.fhan5-9.fna&oh=00_AfByf0oDajWUe-rqoPIuiYBmMCHYxTsbF3n0bfNwxFzLlw&oe=63684D1D" alt="" />

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
  )
}

export default Profile