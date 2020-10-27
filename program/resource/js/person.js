$(function(){
    $('#file_tx').change(function () {
        var choose_file = $(this)[0].files[0];
        var reads = new FileReader();
        reads.readAsDataURL(choose_file);
        reads.onload = function(e) {
            $('.listff img').attr("src",this.result);
            $('.l img').attr("src",this.result);
    }
    })     
    $(".r div").eq(1).show().siblings().hide();
    $(".listf li").click(function(){
        var index = $(this).index();
        $(".r div").eq(index).show().siblings().hide();
    })
    $(".scrDown").on({
        mouseover:function(){$(".mainf").css("z-index","-1");},
        mouseout:function(){$(".mainf").css("z-index","1");}
    })
    /* 个人资料界面正则 */
    var regEmail = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
    var regPassword =/^[a-zA-Z0-9]{6,12}$/;

    /* 确认密码 */
    $('.btn_password').on("click",function(){
        if(!regPassword.test($("password").val())){
            alert('密码格式错误');
            return false;
        }
        if($(".password").val()!==$(".conform").val()){
            alert("两次密码输入不相同");
            return false;
        }
    })
    /* 确认邮箱格式,昵称修改 */
    $(".btn_Email").on("click",function(){
        if(!regEmail.test($(".Email").val())){
            alert('邮箱格式错误');
            return false;
        }
        if($(".callname").val() == ""){
            alert("昵称不能为空");                                   
        }
        if($(".Email").val() == ""){
            alert("邮箱不能为空");
        }
        $(".cal").html($(".callname").val());
        })    
})
$(".tx").click(function(){
        $(".upload").click();
    });
    $(".upload").change(function(){
        var file = this.files[0] ? this.files[0] : null;
        if(null == file){
            return false;
        }
        var file_reader = new FileReader();
        file_reader.onload = (function(){
            var image_url = this.result;
            $(".tx img").attr('src', image_url);
        });
        file_reader.readAsDataURL(file);
    });