import React, { useEffect, useState } from 'react';
import SignOut from './SignOut.js';
import { auth, db } from '../firebase.js';
import SendMessage from './SendMessage.js';
//import Delete from './Delete.js';
//import { doc, deleteDoc } from "firebase/firestore";
import { Button } from '@mui/material'


const Line = () => {
  const [messages,setMessages] = useState([]);
  useEffect(() => {
    
    db.collection("messages")
    .orderBy("createdAt")
 //   .limit(50)
    .onSnapshot((snapshot)=> {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  },[]);
 
  const handleDelete = async(tgtId) =>{


    console.log( "TGT=" );
    console.log( tgtId["id"] );
    console.log( typeof( tgtId ) );

    const query=await db.collection("messages").where("id", "==" ,tgtId["id"]).get();
    query.docs.forEach( async doc=>{
          console.log( "TEST" );
          doc.ref.delete();
    });
    console.log('YO');

  }

  return (
    <div>
      <SignOut />
      <div className='msgs'>

        
        {messages.map(({id,text,photoURL,uid}) =>(

        
        
          (()=>{
            if( text!=null && typeof(text)=="string" && String(text).trim().length>0 && !deleteFlg ){

        
              
              return (
                
          <div>
            <div key={id}  className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
            <Button onClick={() => handleDelete({id})}>削除</Button>
              <img src={photoURL} alt='' />
              <p id = {id}>{text}</p>
              
               
            </div>
          </div>
            
              )
              }
          })()
          
        
        ))}
      </div>
      
      <SendMessage/>
        
    </div>
  )
}

export default Line
