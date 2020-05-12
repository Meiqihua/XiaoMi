function IndexShow(){
    let navShow = function(){
        let $shows = $(".nav_show");
        let $navLi = $("#nav").children();
        let $showUls = $(".ulShow");
        $(".search").focus(function(){
            $(this).css({"border-color":"#ff6700"});
            $(".search_btn").css({"border-color":"#ff6700"});
        }).blur(function(){
            $(this).css({"border-color":"#dfdfdf"});
            $(".search_btn").css({"border-color":"#dfdfdf"});
        });

        $navLi.each(function(i){
            if(i<$navLi.length-3){
                $(this).mouseover(function(){
                    let $index = $(this).index();
                    $("#nav_bg").css({
                        "height":"229px",
                        "z-index":"99",
                        "box-shadow": "0 3px 4px rgba(0,0,0,.18)",
                        "border-top": "1px solid #e0e0e0"
                    });
                    $shows.css({"height":"229px"});
                    $shows.eq($index).css({"z-index":"999"});
                    $showUls.eq($index).children().css({"display":"block"});
                });

                $(this).mouseout(function(){
                    let $index = $(this).index();
                    $("#nav_bg").css({
                        "height":"0",
                        "z-index":"0",
                        "box-shadow": "none",
                        "border-top": "none"
                    });
                    $shows.css({"height":"0"});
                    $shows.eq($index).css({"z-index":"0"});
                    $showUls.eq(i).children().css({"display":"none"});
                });
            }
        });
    }


    // 右栏导航条
    let fixedNav = function(){
        if($(this).scrollTop()>=600){
            $(".fixedNav").find("a").last().css({"display":"block"});
        }else{
            $(".fixedNav").find("a").last().css({"display":"none"});
        }
        $(window).scroll(function(){
            if($(this).scrollTop()>=600){
                $(".fixedNav").find("a").last().css({"display":"block"});
            }else{
                $(".fixedNav").find("a").last().css({"display":"none"});
            }
        });
        $("#goTop").click(function(){
            $("body,html").animate({"scrollTop":"0"},500);
        })
    }

    // 51页面函数
    let special_51 = function(){
        setTimeout(function(){
            $("#special_51").animate({"height":"86px"},600,function(){
                $(".nav_show").css("top","226px");
            })
        },1000)
        $("#delHeadBtn").click(function(){
            $("#special_51").animate({"height":"0"},600);
            $(".nav_show").css("top","140px");
        })
    }

    return [navShow,fixedNav,special_51];
}

// 全部商品分类
function allGoodsBox(){
    $("#allgoods").mouseover(function(){
        $(this).find(".banner_nav").css({"display":"block"})
    }).mouseout(function(){
        $(this).find(".banner_nav").css({"display":"none"})
    })
}


// 秒杀倒计时
function goTime(){
    let d1 = new Date();
    let miTime = parseInt($(".flash_time").find("h4").html());
    let nowHours = (24-(d1.getHours()-miTime))<10?"0"+(24-(d1.getHours()-miTime)):(24-(d1.getHours()-miTime));
    if(d1.getHours()<=miTime){
        miTime = 14;
        $(".flash_time").find("h4").html("14:00 场")
        nowHours = (24-miTime)<10?"0"+(24-miTime):(24-miTime);
    }
    let nowMinutes = (60-d1.getMinutes())<10?"0"+(60-d1.getMinutes()):(60-d1.getMinutes());
    let nowSeconds = (60-d1.getSeconds())<10?"0"+(60-d1.getSeconds()):(60-d1.getSeconds());
    let $timeBox = $(".time_Box").find("span")
    $timeBox.eq(0).html(nowHours);
    $timeBox.eq(1).html(nowMinutes);
    $timeBox.eq(2).html(nowSeconds);
    setInterval(function(){
        let d2 = new Date();
        nowHours = (24-(d2.getHours()-miTime))<10?"0"+(24-(d2.getHours()-miTime)):(24-(d2.getHours()-miTime));
        if(miTime==14){
            nowHours = (24-miTime)<10?"0"+(24-miTime):(24-miTime);
        }
        nowMinutes = (60-d2.getMinutes())<10?"0"+(60-d2.getMinutes()):(60-d2.getMinutes());
        nowSeconds = (60-d2.getSeconds())<10?"0"+(60-d2.getSeconds()):(60-d2.getSeconds());
        $timeBox.eq(0).html(nowHours);
        $timeBox.eq(1).html(nowMinutes);
        $timeBox.eq(2).html(nowSeconds);
    },1000)
}
function timeNum(num){
    if(num<10){
        num = "0"+num;
    }
    return 
}

