// 底部结算盒子的交互
function moneyShow(){
    $(function(){
        if($(".last-wrap").offset().top<=1180){
            $(".cart-bar").css({
                "box-shadow": "0 -3px 6px rgba(0,0,0,0.1)"
            });
        }
    })
    $(window).scroll(function(){
        if($(".last-wrap").offset().top<1165){
            $(".cart-bar").css({
                "box-shadow": "0 -3px 6px rgba(0,0,0,0.1)"
            });
        }else{
            $(".cart-bar").css({
                "box-shadow": "none"
            });
        }
        
    })
}

// 选择函数(check)
function miCheck($allCheck,$subCheck){
    $allCheck.click(function(){
        $subCheck.attr("class","iconfont icon-icon_right");
        if($(this).attr("class")=="iconfont icon-icon_right"){
            $subCheck.removeClass();
        }
        subchangeFather();
    })
    $subCheck.click(function(){
        $(this).toggleClass("iconfont icon-icon_right");
        subchangeFather();
    })
    

    function subchangeFather(){
        let allCheck = true;
        $subCheck.each(function(){
            if($(this).attr("class")!="iconfont icon-icon_right"){
                allCheck = false;
            }
        })
        if(allCheck==true){
            $allCheck.addClass("iconfont icon-icon_right");
        }else{
            $allCheck.removeClass();
        }
    }

}


// 加减按钮
function numBtn(){
    $(".reduceBtn").click(function(){
        let count = $(this).next().val();
        count--;
        if(count<=1){
            count =1;
        }
        $(this).next().val(count);
        let price = $(this).parent().parent().prev().find("i").html();
        let money = price * count;
        $(this).parent().parent().next().find("i").html(money);

        totalMoney();
    });

    
    $(".addBtn").click(function(){
        let count = $(this).prev().val();
        count++;
        $(this).prev().val(count);
        let price = $(this).parent().parent().prev().find("i").html();
        let money = price * count;
        $(this).parent().parent().next().find("i").html(money);

        totalMoney();
    });

    $(".clo-action i").click(function(){
        let $index = $(this).index();
        $("#goodsRemove").fadeIn(300,function(){
            $("#remove_box").animate({"top":"0px"},400,()=>{
                $("#not_remove").click(()=>{
                    $("#remove_box").animate({"top":"-270px"},400,()=>{
                        $(this).fadeOut(300)
                    });
                });

                $("#remove_del").click(()=>{
                    $("#remove_box").animate({"top":"-270px"},400,()=>{
                        $(this).fadeOut(300)
                    });
                });

                $("#goodsRemove").click(()=>{
                    $("#remove_box").animate({"top":"-270px"},400,()=>{
                        $(this).fadeOut(300)
                    });
                });

                $("#now_remove").click(()=>{
                    $("#remove_box").animate({"top":"-270px"},400,()=>{
                        $(this).fadeOut(300,function(){
                            $(".item-box").eq($index).animate(
                                {
                                    "opacity":"0",
                                    "height":"0"
                                },600,function(){
                                    $(this).remove();
                            });
                        })
                    });
                });
            })
        });

        // 第二套方案checkbox

        // if(confirm("确认删除此商品?")){
        //     $(this).parent().parent().animate(
        //         {
        //             "opacity":"0",
        //             "height":"0"
        //         },600,function(){
        //             $(this).remove();
        //     });
        // }

        totalMoney();
    })
}

// 金额显示
function totalMoney(){
    let money = 0;
    $(".item-box").each(function(){
        if($(this).find(".clo-check i").attr("class")=="iconfont icon-icon_right"){
            money += parseFloat($(this).find(".clo-total i").html());
        }
    });
    $("#allMoney").html(money);
}