const express = require('express');
const app = express();
const { readdirSync } = require("fs");




readdirSync('./Routes').map((r)=> app.use('/data',require('./Routes/'+r)))




//EndPoints
//http://localhost:3000/data/1
//npm start


app.listen(3000,()=>{
    console.log('server is running on port 3000');
})