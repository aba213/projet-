const express=require("express");
const  {connect}  = require("mongoose");
 const connectDB=require('./config/dbconnect')
const app =express();
require("dotenv").config();
//connect to DB
connectDB();


//routes
app.use(express.json());
app.use("/User",require("./routes/User"));
app.use("/Posts",require("./routes/Posts"));
app.use("/Cours",require("./routes/Cours"));
//server
const PORT=process.env.PORT;

app.listen(PORT,(err)=>
err ? console.log(err):console.log(`server is running on ${PORT}`)
);