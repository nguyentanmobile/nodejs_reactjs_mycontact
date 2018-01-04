var  express = require('express');
var hellodata =require('./server_routers/api/hellodata');

var app = express();
app.use(express.static(`${__dirname}/ui-react/build`));
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8081
app.use("/api",hellodata);
app.listen(port,function(){
    console.log("==========Server API is already===========");
});
