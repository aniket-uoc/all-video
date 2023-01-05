
const express = require("express");

const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    return res.render("index");
});



app.get("/download", function (req, res) {

    const query = req.query.url;

    res.render("download" , {link : "https://convert2mp3s.com/api/widgetv2?url={VIDEO_URL}" + query });
   
});


app.listen(port , function () {
    console.log("server is running on port 3000.")
});