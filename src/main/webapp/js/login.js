$(function(){
	$('.login ul li').on('click',function(){
		if($(this).index() == 1){
			$('input[name="utype"]').val('1');
		}else{
			$('input[name="utype"]').val('0');
		}
		$(this).addClass('current').siblings().removeClass('current');
	});

	//失去焦点
	$('#form-login input').on('focus',function(){
		$('#error_login').html('');
	});
	
	//表单验证
	$('#form-login input[type="button"]').on('click',function(event) {
		var username = $('#form-login').find('input[name="username"]'),
			password = $('#form-login').find('input[name="password"]');
		if($.trim(username.val()) == ''){
			$('#error_login').html('<span>请填写用户名</span>');
			return false;
		}
		if($.trim(password.val()) == ''){
			$('#error_login').html('<span>请填写用户密码</span>');
			return false;
		}
	    $("#login").val("正在登录");
		$("#login").attr("disabled","disabled");
		login();
	});
});

function login() {
	var utype = $("#utype").val();
	if (utype == '1') {
		window.location.href = "../pages/admin-index.html";
	} else {
		window.location.href = "../pages/index.html";
	}
}