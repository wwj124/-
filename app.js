var express=require("express");
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var fs=require("fs");
var app=express();
app.use(express.static("www"));
app.use(bodyParser.urlencoded({extended:true}));
// 用户注册接口
app.post("/reg",function(req,res){
    // console.log(req.body);
    
})
app.listen(3000,function(){
    console.log("服务器开启中");
})