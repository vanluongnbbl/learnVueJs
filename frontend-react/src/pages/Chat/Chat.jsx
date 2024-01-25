import { Box, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client';

const socket = io('http://localhost:8080');

function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
  
    useEffect(() => {
      socket.on('chat message', (msg) => {
        setMessages([...messages, msg]);
      });
    }, [messages]);
  
    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
  
    const sendMessage = () => {
      socket.emit('chat message', input);
      setInput('');
    };

  return (
    <Box style={{ padding: 30 }}>
      <h1>Chat app</h1>
     <div>
        <ul>
            {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
            ))}
        </ul>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={sendMessage}>Send</button>
        </div>
    </Box>
  )
}

export default Chat