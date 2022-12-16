
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";
import './GroupChats.scss';
import { Button, Collapse } from 'antd';
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import { AppContext } from "../../context/AppContext";
import { PlusSquareOutlined } from "@ant-design/icons";
import useFirestore from "../../hooks/useFirestore";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";


const GroupChats = () => {

  const { dispatch } = useContext(ChatContext);

  const {setIsAddRoomVisible,rooms} = useContext(AppContext)




  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  const handleSelect = (u) => {
    dispatch({ type: "SELECT_ROOM", payload: u });
  };

  return (
    <div >
       <Collapse ghost defaultActiveKey={['1']}>
           <CollapsePanel header='Danh sách các phòng' key={1} className='collapseRoom'>
            {rooms.map((room)=>(
               <div
               className="userChat"
               key={room.id}
               onClick={()=>handleSelect(room)}
               >
             <img src={room.photoURL} alt="" />
             <div className="userChatInfo">
               <span>{room.displayName}</span>
               {room.lastMessage?.text ? <p>{room.lastMessage.text}</p> : <p></p>}
             </div>
             </div>
            ))}
           <Button
              type='text'
              icon={<PlusSquareOutlined />}
              className='add-room'
               onClick={handleAddRoom}
             >
          Thêm phòng
            </Button>
           </CollapsePanel>
        </Collapse>  
        
    </div>
  );
};

export default GroupChats;