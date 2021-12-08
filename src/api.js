


const express = require("express");
const app = express();

require("dotenv").config();
const mongoose = require("mongoose");
const router = require("./routes");
app.use(express.json());
app.use(router);



mongoose.connect(process.env.CONNECTIONSTRING,{useNewUrlParser: true, useUnifiedTopology:true}).
then(() =>{
    console.log("succes");
app.listen(process.env.PORT, () => {
    console.log("port" + process.env.PORT);
});
})