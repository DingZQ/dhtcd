//1.引入express
const express=require("express");
var router=express.Router();
//由于不能使用../返回上一级，通过剪切字符串得到正确的路径
var path=__dirname.replace(/router/ig,"");
//主页
router.get('/home',(req,res)=>{
  res.sendFile(path+'public/Dhtcd.html');
});
//空页跳转到主页
router.get('/',(req,res)=>{
  res.redirect('/href/home');//空页跳转
});

//其他分页
router.get('/game',(req,res)=>{
  res.sendFile(path+'public/Game.html');
});

router.get('/video',(req,res)=>{
  res.sendFile(path+'public/Video.html');
});

router.get('/audio',(req,res)=>{
  res.sendFile(path+'public/Audio.html');
});

router.get('/picture',(req,res)=>{
  res.sendFile(path+'public/Picture.html');
});

router.get('/article',(req,res)=>{
  res.sendFile(path+'public/Article.html');
});

router.get('/study',(req,res)=>{
  res.sendFile(path+'public/Study.html');
});

router.get('/trade',(req,res)=>{
  res.sendFile(path+'public/Trade.html');
});

router.get('/share',(req,res)=>{
  res.sendFile(path+'public/Share.html');
});

router.get('/zone',(req,res)=>{
  res.sendFile(path+'public/Zone.html');
});

//登录
router.get('/denglu',(req,res)=>{
  res.sendFile(path+'public/Login.html');
});

//3.导出路由器模块
module.exports = router;