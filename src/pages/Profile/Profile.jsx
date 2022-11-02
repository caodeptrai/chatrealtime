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
              <img className='friendAvatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_4aDv5qEw9vo4eEBkDQADW7xUNEAlCW_sY4T94s&s" alt="" />
              <img className='friendAvatar' src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg" alt="" />
              <img className='friendAvatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZiUUNtXGhmiSAq_OFDJgWZ5yPEXHbI6BS8SAp_gtf&s" alt="" />
              <img className='friendAvatar' src="https://1.bp.blogspot.com/--cwALLkjCmE/YGLZYq7VqvI/AAAAAAAArCw/4uWXNg5iBYQsblpvSO2UDHEG5NF4RYWtgCNcBGAsYHQ/s0/2d27fefccf755efa36a6ba7c9c8ff5db.jpeg" alt="" />
              <img className='friendAvatar' src="https://static.wixstatic.com/media/9d8ed5_b8fcc13f08fc4374bb1f979e032b0eb7~mv2.jpg/v1/fit/w_600,h_567,al_c,q_20,enc_auto/file.jpg" alt="" />
              <img className='friendAvatar' src="https://inkythuatso.com/uploads/thumbnails/800/2022/05/a732e392b657be4fceffdffd214e5e21-08-23-41-28.jpg" alt="" />

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