import React, { useState,useEffect} from 'react';
import io from "socket.io-client"


const socket = io.connect("https://mernback-fu4q.onrender.com", {
  withCredentials: true,
  extraHeaders: {
    "Access-Control-Allow-Origin": "https://mernback-fu4q.onrender.com"
  }
});


const Message_Display=()=>{
    const[message,setMessage]=useState([])  
    socket.on('chat message', (message_array)=>{
    console.log("message recieved",message_array)
    setMessage(message_array)
  })
    return(
        <div>
        <ul>
        {message}
       </ul>
        </div>
    )
}
export default Message_Display