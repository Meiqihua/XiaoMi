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
            $(window).scrollTop(0);
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
