$(function(){
    $(".expression").click(function(e){
        $(".expressionbox").slideDown();
        e.stopPropagation();
    });
    $(document).click(function(){
        $(".expressionbox").slideUp();
    });
    $(".expressionbox ul li").click(function(){
        var simg = $(this).find("img").clone();
        $(".message").append(simg);
    });
    $("span.submit").click(function(){
        var txt = $(".message").html();
        if(txt==""){
            $('.message').focus();
            return;
        }
        var mydate = new Date();  
        var onedate = mydate.toLocaleString('chinese', { hour12: false }); 
        $(".msgCon").prepend("<div class='msgBox'><dl><dt><img src ='../../resource/img/tx.jpg' width='50' height='50'/></dt><dd>${用户名}</dd></dl><div class='msgTxt'>"+txt+"</div><div class='time'>"+onedate+"</div><div class='btn2'><span class='count'>点赞</span><span class='reply'>评论</span></div></div>");
    })
    $(".scrDown").on({
        mouseover:function(){$("#comment").css("z-index","-1");},
        mouseout:function(){$("#comment").css("z-index","1");}
    }) 
})
