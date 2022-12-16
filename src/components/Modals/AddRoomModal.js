import React, { useContext, useState } from 'react'
import {Modal} from 'antd'
import { AppContext } from '../../context/AppContext';
import {  doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { AuthContext } from '../../context/AuthContext';
function AddRoomModal() {
    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
    const [roomName,setroomName] = useState('');
    const [validateMsg,setValidateMsg] = useState('');
    const {currentUser} = useContext(AuthContext)
    const [docId,setDocId] = useState('')
    //createId
    function createId(n) {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < n; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
     
      setDocId(text)
    }

    const handleOk = async () => {

      createId(20);
        const msg = {}
        if(!roomName) {
          msg.roomName = 'Vui lòng nhập tên phòng !'
          setValidateMsg(msg);
          setIsAddRoomVisible(true);
        //  return;
        }
        //  if(!title){
        //   msg.title = 'Vui lòng nhập title !'
        //   setValidateMsg(msg);
        //   setIsAddRoomVisible(true);
        //  // return;
        // }
        else {

          console.log("docId",docId)
            await setDoc(doc(db, "rooms",docId), {
               roomId:docId,
              displayName:roomName,
              members:[currentUser.uid],
              createAt:serverTimestamp(),
            });

            await setDoc(doc(db, "chats", docId), { messages: [] });

            setIsAddRoomVisible(false);
        }
      
      };
    const handleCancel = () => {
        // reset form value
       // form.resetFields();
    
        setIsAddRoomVisible(false);
      };
    
  return (
    <Modal title='Tạo phòng'
    open={isAddRoomVisible}
    onOk={handleOk}
   
    onCancel={handleCancel}>
         <form>
                <input 
                  type="text" 
                  placeholder='nhập tên phòng'
                  value={roomName}
                  onChange={(e)=>setroomName(e.target.value)}
                />
                <p>{validateMsg.roomName}</p>
                {/* <input 
                  type="text" 
                  placeholder='your title'
                  value={title}
                  onChange={(e)=>setTitle(e.target.value)}/>
                   <p>{validateMsg.title}</p> */}
                
            </form>
    </Modal>
  )
}

export default AddRoomModal