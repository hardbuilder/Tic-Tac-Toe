//setting up server
const express = require("express");
const app = express();
const port = 3000;
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});

//adding path to views and public folder
const path = require("path");
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

//play page
app.get("/",(req,res)=>{
    res.render("index.ejs");
})