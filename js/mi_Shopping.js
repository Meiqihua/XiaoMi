
// 从后端获取所有的商品
function getGoods(){
    $.get("./php/getGoodsList.php?typeId=001",function(data){
        showData(data);
    },"json");
}

// 显示商品
function showData(data){
    
    data.forEach(item => {
        let htmlStr=`
            <div class="clo clo-check">
                <i class=""></i>
            </div>
            <div class="clo clo-img">
                <a href="./mi_buyGoods.html?goodsId=${item.goodsId}"><img src="${item.goodsImg}" alt=""></a>
            </div>
            <div class="clo clo-name">${item.goodsName}<b>${item.beiyong1}</b> </div>
            <div class="clo clo-price">
            <i>${item.goodsPrice}</i>
                元
            </div>
            <div class="clo clo-num">
                <div class="goods-num">                                    
                    <i class="reduceBtn">-</i>
                    <input type="text" value="1">
                    <i class="addBtn">+</i>
                </div>
            </div>
            <div class="clo clo-total">
            <i>${item.goodsPrice}</i>
                元
            </div>
            <div class="clo clo-action">
                <i class="iconfont icon-cuowu3"></i>
            </div>
        `;
        let $goodsBox = document.createElement("div");
        $("#list-body").append($($goodsBox));
        $($goodsBox).addClass("item-box").html(htmlStr);
    });



    $(function(){
        // 调用check.js里的函数
        miCheck($(".clo-check i:eq(0)"),$(".clo-check i:gt(0)"));
        // 第二套方案：checkbox
        // $("#login_now :checkbox:eq(0)").check($("#login_now :checkbox:gt(0)"));

        moneyShow();
        numBtn();

        $(".clo-check i").click(function(){
            totalMoney()
        })

        cookieShow();
    })

}

    
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


// cookie交互
function cookieShow(){
    
    if(document.cookie!=""){
        
        $("#myShop_none").css("display","none");
        $("#myShop_now").css("display","block");


        $(".shpHd_right").eq(1).css("display","block").prev().css("display","none");
        $("#myId").find("b").html(getCookie("miName"));
        $("#myId").mouseenter(function(){
            $("#cart-my").slideToggle(200);
        }).mouseleave(function(){
            $("#cart-my").slideToggle(200);
        });

        $("#out").click(function(){
            if(confirm("确认退出登录吗？")){
                removeCookie("miName");
                window.location.reload();
            }
        })
    }
}

