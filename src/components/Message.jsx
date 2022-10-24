import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
   const [date,setDate] = useState("")
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });

  }, [message]);

  useEffect(()=>{
    const time = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(message.date)
    setDate(time);
  },[message])
 
  return (
   
    <div className="messageWrap">
      <p className="messageTime">{date}</p> 
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
            <p>{message.text}</p>
            {message.img && <img src={message.img} alt="" />}
          </div>
      </div>
    </div>

  );
};

export default Message;