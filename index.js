const express = require("express");
const app = express();
const path = require("path");

let port = 8080;
app.use(express.static(path.join(__dirname, "public/css"))); //for assets or style we conv static to public
app.use(express.static(path.join(__dirname, "public/js"))); 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/rolldice", (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", {num});
});


app.get("/id/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", {data});
    }
   else{
        res.redirect("/rolldice");
   }
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});