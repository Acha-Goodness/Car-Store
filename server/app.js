const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());

// IMPLEMENT CORS
app.use(cors());
app.options("*", cors());

// CHECKING FOR CURRENT ENVIROMENT
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
    console.log("My application is currently on", process.env.NODE_ENV)
}



module.exports = app;