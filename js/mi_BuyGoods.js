
function buyGoods(){
    let $oLis01 = $(".choose-show").eq(0).find("li");
    let $oLis02 = $(".choose-show").eq(1).find("li");
    $oLis01.click(function(){
        $oLis01.removeAttr("class");
        $(this).attr("class","choose-active");
        goMoney();
    });
    $oLis02.click(function(){
        $oLis02.removeAttr("class");
        $(this).attr("class","choose-active");
        goMoney();
    });

    function goMoney(){
        let $goodsFont = $(".goods-font").children().find("span:gt(0)")
        $goodsFont.each(function(i){
            $(this).html($(".choose-active").find("b").eq(i).html())
        })
        $(".now-money").html(parseInt($(".choose-active").find("span").html()));
    }

    $(".like").click(function(){
        if($(this).find("i:eq(0)").css("display")!="none"){
            $(this).find("i:eq(0)").css({"display":"none"})
            .next().css({
                "display":"block",
                "animation":"xin 1s"
            });
        }else{
            $(this).find("i:eq(0)").css({"display":"block"})
            .next().css({"display":"none"});
        }
    })
}

function openShow(){
    let myTimer = null;
    let scrollTop = 0;

    myTimer = setInterval(function(){
        scrollTop++;
        if(scrollTop>=140){
            clearInterval(myTimer);
            myTimer=null;
            scrollTop = 140;
        }
        $(window).scrollTop(scrollTop);
    },6)
}
