const express = require("express");
const bodyParser = require("body-parser");//解析路径

//引入路由模块
var users = require("./router/user");
var href = require("./router/href");

var app = express();
app.listen(3000,(req,res)=>{
  console.log("ok");
});
app.use(bodyParser.urlencoded({extended:false}));//解析路径
app.use(express.static(__dirname+"/public"));//托管静态资源

app.get('/',(req,res)=>{
  res.redirect('/href/home');//空页跳转
});


//使用路由器
app.use("/user",users);
app.use("/href",href);