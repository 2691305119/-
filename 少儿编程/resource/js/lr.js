$(function(){
    // 鼠标移到按钮上的亮度
    $(".submit,.submit regist_submit").on({
        mouseover:function(){$(this).css("background-color","#04bbfd")},
        mouseout:function(){$(this).css("background-color","#60a3bc")}
    })
    // 注册要求
    $("#fo").one("click",function(){
        $(this).find("#username").attr("placeholder","用户名是4-16位字符，含数字以字母开头");
        $(this).find("#email").attr("placeholder","请输入正确邮箱号");
        $(this).find("#phone").attr("placeholder","请输入你的手机号");
        $(this).find("#password").attr("placeholder","密码由英文字母和数字组成的6-12位字符");
        $(this).find("#conform").attr("placeholder","请确认你的密码");
    })
    // 注册页面正则
    var regUsername =/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
    var regPhone=/^1(3|4|5|6|7|8|9)\d{9}$/;
    var regEmail = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
    var regPassword =/^[a-zA-Z0-9]{6,12}$/;

    $('#reg').on("click",function(){
        if(!regUsername.test($("#username").val())){
            alert('请输入正确格式的用户名');
            return false;
        }
        if(!regEmail.test($("#email").val())){
            alert('请输入正确邮箱');
            return false;
        }
        if(!regPhone.test($("#phone").val())){
            alert('请输入正确电话');
            return false;
        }
        if(!regPassword.test($("#password").val())){
            alert('请按照密码格式正确输入');
            return false;
        }
        if($("#password").val()!==$("#conform").val()){
            alert("两次密码输入不相同");
            return false;
        }
    })
})