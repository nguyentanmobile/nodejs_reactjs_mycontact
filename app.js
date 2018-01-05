var express = require('express');
var path = require('path');
var app = express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./client/views"));
app.use(express.static(path.join(__dirname,"./client/public")));

app.get("/*",function(req,res){
    res.render("index");
})
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.listen(port,function(){
    console.log("===========Server app is already=============");
})

