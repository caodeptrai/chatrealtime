import React, { useState } from 'react';
import {useNavigate,Link} from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth,db} from '../firebase';
import { GoogleCircleFilled ,FacebookFilled} from '@ant-design/icons';
import { doc, setDoc } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth";

 const Login = () => {

  const [err,setErr] = useState(false);
  const navigate = useNavigate();

  // login with email
  const handleSubmit = async (e)=> {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
     
      
      await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
       
    }catch(err) {
      setErr(true);
    }
  };

  //login with google
  const handleSubmitGoogle = async ()=> {
    const provider = new GoogleAuthProvider();
    
      try {
        await signInWithPopup(auth, provider);
        // await setDoc(doc(db, "userChats", provider.user.uid), {});
            navigate("/");
        // navigate("/");
      }catch(err) {
        setErr(true);
      }
  };

  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">ChatRealtime</span>
            <span className="title">Login</span>

            <form onSubmit={handleSubmit}>
                
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
               
                <button className='btn'>Log in</button>
                {err && <span>Something went wrong</span>}

            </form>
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
