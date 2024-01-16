const express = require('express')
var cors = require('cors')
require('./db/mongoose')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port )
})