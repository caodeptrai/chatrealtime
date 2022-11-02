import React, { useContext, useEffect, useRef} from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en';
import ReactTimeAgo from 'react-time-ago'
 import './Message.scss';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();

  TimeAgo.addLocale(en);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });

  }, [message]);

 
  return (
   
    <div className="messageWrap">
     
      <div
        ref={ref}
        className={`message ${message.senderId === currentUser.uid && "owner"}`}
      >
      
        <div className="messageInfo">
            <img
              src={
                message.senderId === currentUser.uid
                  ? currentUser.photoURL
                  : data.user.photoURL
              }
              alt=""
            />
            
          </div>
          <div className="messageContent">
           
            <p className="text">{message.text}
            </p>
              <p className="messageTime">
              <ReactTimeAgo date={message.date} locale="en-US"/>
              </p>
            {message.img && <img src={message.img} alt="" />}
          </div>
      </div>
    </div>

  );
};

export default Message;