const express = require('express')
const app = express()
const {default : mongoose}  = require('mongoose')
const studentRoute = require('./Routes/studentRoute')


app.use(express.json())

mongoose.connect("mongodb+srv://amelmokrane05_db_user:udADsBNA5SRv3vUU@cluster0.fw23x48.mongodb.net/")
.then(()=>console.log("db connected"))
.catch((error)=>console.log(error.message))


app.use("/student",studentRoute)



app.listen("5000",()=>{
    console.log("the server is running on the port 5000")
})