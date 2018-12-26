//验证手机号
function checkPhone() {
	var userphone = document.getElementById("phone");
	var phoneErr = document.getElementById("phone_f");
	var pattern = /^1(3[0-9]|5[189]|8[6789])[0-9]{8}$/;
	if(userphone.value=="") {
		phoneErr.innerHTML = "<i class='iconfont icon-wrong'></i>号码不能为空!";
		phoneErr.className = "wrong";
		return false;
	}if(!pattern.test(userphone.value)) {
		phoneErr.innerHTML = "<i class='iconfont icon-wrong'></i>手机号码不合规范";
		phoneErr.className = "wrong";
		return false;
	}else {
		phoneErr.innerHTML = "<i class='iconfont icon-right'></i>号码有效";
		phoneErr.className = "success";
		return true;
	}
}

//验证电子邮箱
function checkEmail() {
	var useremail = document.getElementById("email");
	var emailErr = document.getElementById("email_f");
	 var regEmail = /.+@.+\.[a-zA-Z]{2,4}$/;
	if(useremail.value=="") {
		emailErr.innerHTML = "<i class='iconfont icon-wrong'></i>邮箱不能为空!";
		emailErr.className = "wrong";
		return false;
	}if(!regEmail.test(useremail.value)) {
		emailErr.innerHTML = "<i class='iconfont icon-wrong'></i>请输入正确的E-Mail住址！";
		emailErr.className = "wrong";
		return false;
	}else {
		emailErr.innerHTML = "<i class='iconfont icon-right'></i>地址有效";
		emailErr.className = "success";
		return true;
	}
}

//验证密码
function checkPassOne(){
    var pass1 = document.getElementById("password1");
	var passErr = document.getElementById("password_one");
	var password1=/^\w{6,18}$/;
	if(pass1.value=="") {
		passErr.innerHTML = "<i class='iconfont icon-wrong'></i>密码不能为空!";
		passErr.className = "wrong";
		return false;
	}if(!password1.test(pass1.value)) {
		passErr.innerHTML = "<i class='iconfont icon-wrong'></i>请输入正确的密码！";
		passErr.className = "wrong";
		return false;
	}else {
		passErr.innerHTML = "<i class='iconfont icon-right'></i>密码有效";
		passErr.className = "success";
		return true;
	}
}

//验证密码是否一致
function checkPasstwo(){
	var pass1 = document.getElementById("password1");
	var pass2= document.getElementById("password2");
	var passErr = document.getElementById("password_two");
	if((pass1.value)!=(pass2.value) || pass2.value.length == 0){  
       passErr.innerHTML = "<i class='iconfont icon-wrong'></i>密码不一致!";
		passErr.className = "wrong";
		return false;
        }  
     else{  
         passErr.innerHTML = "<i class='iconfont icon-right'></i>密码一致";
		passErr.className = "success";
		return true;
         }   
}
//验证勾选
function checkForm(){
	var checkbox = document.getElementById("radio");
	var radio=checkbox.checked;
	if(checkPhone()==false||checkEmail()==false||checkPassOne()==false|| checkPasstwo()==false){
		alert("请填写正确的信息！");
		
	}
	if(radio==false){
			alert("请勾选服务条款");
	}
	else{
		alert("注册成功！");
		window.open("login.html","_selef"); 
	}
	
}
