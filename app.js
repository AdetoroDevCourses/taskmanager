//CRUD

const express = require('express');
const app = express();
const ConnectDB = require('./db/connect')
require('dotenv').config()


app.use(express.static('./public'))
app.use(express.json())

// routes
// app.use("/api/v1/tasks", tasks)

const port = 5000

const server =  async () => {
    try{
        // await ConnectDB('mongodb+srv://adetorodev:w2GjK1xAFlryi6uc@cluster0.p3y5v9l.mongodb.net/TaskApp?retryWrites=true&w=majority')
        // console.log("Connected to DB")
        app.listen(port, () => console.log(`Server listening on port ${port}`))
    } catch(err){
        console.log(err)
    }
}

server()

// MongoDb
// Postgresql
// postman
