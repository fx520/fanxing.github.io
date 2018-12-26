//验证登录名
function checkName() {
	var name = document.getElementById("text");
	var nameErr = document.getElementById("color");
	var pattern = /^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;
	if(name.value=="") {
		nameErr.innerHTML = "<i class='iconfont icon-wrong'></i>请输入用户名/手机号！";
		nameErr.className = "wrong";
		return false;
	}if(pattern.test(name.value)) {
		nameErr.innerHTML = "<i class='iconfont icon-right'></i>手机号有效";
		nameErr.className = "success";
		return false;
	}else {
		nameErr.innerHTML = "<i class='iconfont icon-right'></i>用户名的有效";
		nameErr.className = "success";
		return true;
	}
}

//验证密码
function checkPass() {
	var pass = document.getElementById("password");
	var passErr = document.getElementById("pass_c");
	var pattern = /^\w{6,18}$/;
	if(pass.value=="") {
		passErr.innerHTML = "<i class='iconfont icon-wrong'></i>请输入密码！";
		passErr.className = "wrong";
		return false;
	}if(pattern.test(pass.value)) {
		passErr.innerHTML = "<i class='iconfont icon-right'></i>请输入正确的密码";
		passErr.className = "wrong";
		return false;
	}else {
		passErr.innerHTML = "<i class='iconfont icon-right'></i>密码输入正确";
		passErr.className = "success";
		return true;
	}
}

//提交判断
function checkForm(){
	if(checkName()==false||checkPass()==false){
		alert("请确认您填写的信息是否正确！");
	}else{
		alert("登录成功！");
		window.open("index.html","_selef"); 
	}
}
