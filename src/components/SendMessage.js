import React, { useState } from 'react'
import { db , auth } from "../firebase.js"
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon from  "@mui/icons-material/Send"
import { Button } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';


const SendMessage = () => {
    const [ message, setMessage ] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();

        
       

        const { uid , photoURL } = auth.currentUser;


if( message.trim().length===0 ){
  return ;
}

//       if( message!=null && message.trim().length>0 ){


        db.collection("messages").add({
            text:message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            id:uuidv4(),
            deleteFlg:false
        });

       setMessage("");
        

              
//      }
    };
  return (
    <div>
        <form onSubmit={sendMessage}>
            <div className='sendMsg'>
             <Input style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px"
            }} value={message} placeholder='メッセージを入力してください' type='text' onChange={(e) =>setMessage(e.target.value)} />
            <Button onClick={sendMessage}><SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }}/></Button>
            </div>
        </form>
    </div>
  )
}

export default SendMessage