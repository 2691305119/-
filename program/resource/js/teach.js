$(function(){
    $(".scrDown").on({
        mouseover:function(){$(".main").css("z-index","-1");},
        mouseout:function(){$(".main").css("z-index","1");}
    })

    $(".txt,.watch").hide();
        $(".content .post").click(function(){
            var index = $(this).index();
            $(this).parents(".l_main").children("div").eq(index+2).show().siblings().hide().addClass(".txt,.watch");
    })

    $(".hotSearch ul li,.todo_item").click(function(){
        var index = $(this).index();
        $(".l_main").children("div").eq(index+2).show().siblings().hide().addClass(".watch,.txt");
    })
})