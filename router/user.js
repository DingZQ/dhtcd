//1.引入express
const express=require("express");
const pool=require("../pool");
var router=express.Router();
//2.往router中添加路由

//登录请求
router.post('/logon',(req,res)=>{
	var uid = req.body.uid;
	//console.log('账户'+uid);
	if(!uid){	
		res.send({code:401,msg:'登录账户不能为空'});
		return;
	}
	var upwd = req.body.upwd;
		//console.log("密码"+upwd);
	if(!upwd){
		res.send({code:402,msg:'登录密码不能为空'});
		return;
	}
  var sql=`SELECT * FROM users WHERE (uname=? OR phone=? OR email=?) AND upwd=? `;
  pool.query(sql,[uid,uid,uid,upwd],(err,result)=>{
		if(err) throw err;
	//	console.log(result);
		if(result.length > 0){
			res.send('登录成功')
		}else{
			res.send('请验证账户和密码是否正确')
		}
  })
});
//注册请求
router.post('/login',(req,res)=>{
	var ename = req.body.ename;
	if(!ename){
		res.send(`<h1>用户名不能为空<a href="javascript: history.go(-1)">点此返回</a></h1>`);
		return;
	}

	var phone = req.body.phone;
	var reg    = /^\d{11}$/;
	if(!phone && reg.test(phone)){
		res.send(`<h1>电话号码不能为空<a href="javascript: history.go(-1)">点此返回</a></h1>`);
		return;
	}

	var email = req.body.email;
	var myreg    = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if(!email && myreg.test(email)){
		res.send(`<h1>邮箱不能为空<a href="javascript: history.go(-1)">点此返回</a></h1>`);
		return;
	}
	
	var epwd = req.body.pwds;
	var pwdlength=/^[\d\s\wa-zA-z]{6,32}$/;
	if(!epwd && pwdlength.test(epwd)){
		res.send(`<h1>密码不能为空<a href="javascript: history.go(-1)">点此返回</a></h1>`);
		return;
	}

  var sql = `INSERT INTO users VALUES(NULL,?,?,?,?,DEFAULT)`;
	pool.query(sql,[ename,phone,email,epwd],(err,result)=>{
	//	console.log(ename,phone,email,epwd);
		if(err) throw err;
		//	console.log(result,result.changedRows);
			if(result.changedRows == 0){
				res.send(`<h1>注册成功<a href="javascript: history.go(-1)">点此返回登录</a></h1>`);
			}else{
				res.send(`<h1>注册失败<a href="javascript: history.go(-1)">点此重新注册</a></h1>`);
			}

	});
});

//3.导出路由器模块
module.exports = router;