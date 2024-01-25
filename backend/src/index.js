const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const userRouter = require('./routers/user')
const http = require('http');
const socketIO = require('socket.io')

const app = express()
const port = process.env.PORT || 8080
const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: "http://localhost:3000"
      }
});

app.use(cors())
app.use(express.json())
app.use(userRouter)

app.get('/', (req, res) => {
    res.send('Server is running.');
  });
  

  io.on('connection', (socket) => {
    console.log('A user connected');
  
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });
  
  
  server.listen(port, () => {
    console.log('Server is up on port ' + port )
})