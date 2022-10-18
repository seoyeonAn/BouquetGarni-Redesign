$(document).ready(function(){
    $("header nav ul.gnb > li").hover(function(){
        $(this).find(".sub,.subArea").stop().slideDown();
        $(".gnbBG").stop().slideDown();
    },function(){
        $(this).find(".sub,.subArea").stop().slideUp();
        $(".gnbBG").stop().slideUp();
    });

    var index = 0;
    setInterval(function(){
        if(index < 8){
            index++;
        }else {
            index = 0;
        };
        var slideList = index * (-1180)+"px";
        $(".slideItem").animate({left:slideList},400);
    },3000);
});