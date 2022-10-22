import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { LogoutOutlined} from '@ant-design/icons';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">ChatRealtime</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span className='userName'>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>
          
            <span>Logout</span>
          <LogoutOutlined />
        </button>
      </div>
    </div>
  )
}

export default Navbar