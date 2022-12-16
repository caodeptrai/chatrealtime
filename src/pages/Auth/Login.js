import React, { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom';
import { FacebookAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { GoogleCircleFilled ,FacebookFilled} from '@ant-design/icons';
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import './Auth.scss';
import { doc, setDoc } from 'firebase/firestore';
import { generateKeywords } from "../../firebase/services";

 const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [validateMsg,setValidateMsg] = useState('');

  const navigate = useNavigate();

  // login with email
  const handleSubmit = async ()=> {
    const msg = {}
    if(!email) {
      msg.email = 'Vui lòng nhập email !'
      setValidateMsg(msg);
    //  return;
    }
    if(!password){
      msg.password = 'Vui lòng nhập password !'
      setValidateMsg(msg);
     // return;
    }
    try {
     
      
      await signInWithEmailAndPassword(auth, email, password);
    
      navigate("/");
       
    }catch(err) {
     msg.mesasge = 'Email hoặc password không chính xác !'
     setValidateMsg(msg)
    }
   
  };



  const handleSubmitGoogle = async ()=> {
    const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);

        await setDoc(doc(db, "users", auth.currentUser.uid), {
          uid: auth.currentUser.uid,
          displayName:auth.currentUser.uid,
          email:auth.currentUser.email,
          photoURL: auth.currentUser.photoURL,
          keywords: generateKeywords(auth.currentUser.displayName?.toLowerCase()),
        });

        await setDoc(doc(db, "userChats",auth.currentUser.uid), {}); 
        await setDoc(doc(db,"groupChats",auth.currentUser.uid),{});
        console.log(auth.currentUser.uid)
        navigate("/");
      }catch(err) {
        
      }
  };


 

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">ChatRealtime</span>
            <span className="title">Login</span>

            <form>
                <input 
                  type="email" 
                  placeholder='your-email@gmail.com'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <p>{validateMsg.email}</p>
                <input 
                  type="password" 
                  placeholder='your password'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}/>
                   <p>{validateMsg.password}</p>
                <button type='button' className='btn' onClick={handleSubmit}>Log in</button>

            </form>
            
                <p>{validateMsg.mesasge}</p>
            <button className='btn' onClick={handleSubmitGoogle}>
                <span>Login with google</span>
                <GoogleCircleFilled style={{color:"currentColor"}}/>
              </button>

              <button className='btn' onClick={handleSubmitGoogle}>
                <span>Login with facebook</span>
                <FacebookFilled  style={{color:"currentColor"}}/>
              </button>
            
            <p>You don't have an account?<Link to="/register" style={{paddingLeft:4}}>Sign up</Link> </p>
        </div>
    </div>
  )
}
export default Login;
