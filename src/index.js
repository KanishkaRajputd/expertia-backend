const express = require("express");
const connect = require("./configs/db");
const port = process.env.PORT || 8080;



const app = express();
const cors =require("cors");
const jobController = require("./controllers/jobs.controller");
app.use(express.json());
app.use(cors());

app.use("/jobs", jobController);

app.listen(port,async()=>{

try{
    await connect();
    console.log(`Connected to port ${port}`);
}catch(err){
    console.log({
        message: err.message
    })
}
})
