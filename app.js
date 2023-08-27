//CRUD

const express = require('express');
const app = express();
const ConnectDB = require('./db/connect')
require('dotenv').config()
const tasks = require('./routes/tasks')


app.use(express.static('./public'))
app.use(express.json())

// routes
app.use("/api/v1/tasks", tasks)

const port = 5000

const server =  async () => {
    try{
        // await ConnectDB('mongodb+srv://adetorodev:w2GjK1xAFlryi6uc@cluster0.p3y5v9l.mongodb.net/TaskApp?retryWrites=true&w=majority')
        await ConnectDB('mongodb://127.0.0.1:27017/taskapp')
        console.log("Connected to DB")
        app.listen(port, () => console.log(`Server listening on port ${port}`))
    } catch(err){
        console.log(err)
    }
}

server()

// MongoDb
// Postgresql
// postman


// assignment

// add time to start a task

// controller
// model 
// route
// public
// 