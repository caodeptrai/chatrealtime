import React, { useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import {signOut} from "firebase/auth"
import { auth } from '../../firebase';
import './Header.scss'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';


const Header = ()=> {
    const { currentUser } = useContext(AuthContext);
    
  return (
    <div className='header'>
        <div className="content">
            <Link to='/' >
              
              <img className='logo-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png" alt="" />
              <span className='logo'>ChatRealtime</span>
            </Link>
            
            <div className="profileUser abc">
                <img className='userAvatar' src={currentUser.photoURL} alt="" />
                <span className='userName'>{currentUser.displayName}</span>

              <ul className='profileList'>
                <li className='profileItem profile'>
                  <Link to="/profile">
                  <UserOutlined className='profileIcon'/>
                  {/* <SettingOutlined /> */}
                    Xem hồ sơ
                    </Link>
                  
                </li>
                <li className='profileItem logout'>
                  <button className='logoutBtn' onClick={()=>signOut(auth)}>
                  <LogoutOutlined className='profileIcon'/>
                    Log out
                    </button>
                </li>
              </ul>
            </div>

        </div>
    </div>
  )
}

export default Header