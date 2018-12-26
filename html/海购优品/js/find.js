//验证手机号
function checkPhone() {
	var userphone = document.getElementById("phone");
	var phoneErr = document.getElementById("phone_f");
	var pattern = 13283072107;
	if(userphone.value=="") {
		phoneErr.innerHTML = "<i class='iconfont icon-wrong'></i>号码不能为空!";
		phoneErr.className = "wrong";
		return false;
	}if(pattern==(userphone.value)) {
		phoneErr.innerHTML = "<i class='iconfont icon-wrong'></i>手机号码有效";
		phoneErr.className = "success";
		return true;
	}else {
		phoneErr.innerHTML = "<i class='iconfont icon-right'></i>手机号码不存在";
		phoneErr.className = "wrong";
		return false;
	}
}

//验证电子邮箱
function checkEmail() {
	var useremail = document.getElementById("email");
	var emailErr = document.getElementById("email_f");
	 var regEmail ="2895166142@qq.com";
	if(useremail.value=="") {
		emailErr.innerHTML = "<i class='iconfont icon-wrong'></i>邮箱不能为空!";
		emailErr.className = "wrong";
		return false;
	}if(regEmail==(useremail.value)) {
		emailErr.innerHTML = "<i class='iconfont icon-right'></i>E-Mail地址有效";
		emailErr.className = "success";
		return true;
	}else {
		emailErr.innerHTML = "<i class='iconfont icon-wrong'></i>E-Mail地址不正确";
		emailErr.className = "wrong";
		return false;
	}
}

//手机验证码---待定



//验证密码
function checkPassOne(){
    var pass1 = document.getElementById("password");
	var passErr = document.getElementById("password_one");
	var password1=123456;
	if(pass1.value=="") {
		passErr.innerHTML = "<i class='iconfont icon-wrong'></i>密码不能为空!";
		passErr.className = "wrong";
		return false;
	}if(password1==(pass1.value)) {
		passErr.innerHTML = "<i class='iconfont icon-right'></i>密码有效";
		passErr.className = "success";
		return true;
	}else {
		passErr.innerHTML = "<i class='iconfont icon-wrong'></i>请输入正确的密码！";
		passErr.className = "wrong";
		return false;
	}
}

//用户信息验证
function checkForm(){
	if(checkPhone()==false|| checkEmail()==false||checkPassOne()==false){
		alert("填写信息存在错误！");
	}
	else{
		alert("修改成功！");
		window.open("login.html","_selef"); 
	}
	
}