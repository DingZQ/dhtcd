function inname(){
  var unames = document.getElementById('uname').value;
  var uname  = document.getElementById('a');
	if(!unames){
	   uname.innerHTML    = "请输入您的昵称";
	   uname.style.color  = "red";
	   uname.style.border = "red";
	}else{
	   uname.innerHTML    = "昵称合适";
	   uname.style.color  = "#1296db";
	   uname.style.border = "#1296db";
	}
}
function inphone(){
var phones = document.getElementById('phone').value;
var phone  = document.getElementById('b');
var reg    = /^\d{11}$/;/*正则表达式*/
	if(!phones){
	  phone.innerHTML    = "请输入您的电话";
	  phone.style.color  = "red";
	  phone.style.border = "red";
	}else if(reg.test(phones)){
	   /*if(){
	     phone.innerHTML    = "手机号码被占用!";
	     phone.style.color  = "red";
	     phone.style.border = "red";
	   }else{*/
	     phone.innerHTML    = "电话号码可用";
	     phone.style.color  = "#1296db";
	     phone.style.border = "#1296db";
	  //}
	}else{
	  phone.innerHTML    = "请输入正确的电话号码";
	  phone.style.color  = "red";
	  phone.style.border = "red";
	}
}

function inemail(){
var emails   = document.getElementById('email').value;
var email    = document.getElementById('c');
var myreg    = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if(!myreg.test(emails)){
	 email.innerHTML    = "请输入您的邮箱";
	 email.style.color  = "red";
	 email.style.border = "red";
	}else{
	 email.innerHTML    = "邮箱可用";
	 email.style.color  = "#1296db";
	 email.style.border = "#1296db";
	}
}

function inpwd(){
var pwds = document.getElementById('pwd').value;
var pwd  = document.getElementById('d');
var pwdlength=/^[\d\s\wa-zA-z]{6,32}$/;
	if(pwdlength.test(pwds)){
	  pwd.innerHTML    = "密码可用";
	  pwd.style.color  = "#1296db";
	  pwd.style.border = "#1296db";
	}else{
	  pwd.innerHTML    = "密码最少6位数";
	  pwd.style.color  = "red";
	  pwd.style.border = "red";
	}
}
function inpwds(){
var pwds = document.getElementById('pwds').value;
var pwd  = document.getElementById('e');
	if(pwds==document.getElementById('pwd').value&&pwds!=''){
	  pwd.innerHTML    = "密码一致";
	  pwd.style.color  = "#1296db";
		pwd.style.border = "#1296db";
	}else if(pwds==''){
	  pwd.innerHTML    = "请输入密码";
	  pwd.style.color  = "red";
	  pwd.style.border = "red";
	}else{
	  pwd.innerHTML    = "密码不一样";
	  pwd.style.color  = "red";
	  pwd.style.border = "red";
	}
}
/*点击改换*/
function logon(){
 $('#logon').show().next().hide();
}
function login(){
 $('#login').show().siblings("#logon").hide();
}
function load(){
  $('#login').hide();
}
/*登陆验证
  var sql=`SELECT * FROM `users` WHERE uname=? OR phone=? OR email=? AND upwd=?`;
  pool.query(sql,[uname,phone,email,upwd],(err,relute)=>{
    if(err)thorw err;
	res.send{code:1,msg:'登陆成功！'}
  })

$('#login').onclick('button',(req,res)=>{
		alert(1);
})*/