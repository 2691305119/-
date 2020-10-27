$(function(){
    $('.tail_list-img').hover(function(){
        $(this).parents(".list").siblings().stop().fadeTo("slow",0.5);
    },function(){$(this).parents(".list").siblings().stop().fadeTo("slow",1)})
})