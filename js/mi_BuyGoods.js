// 规格点击事件
function buyGoods(){
    let $oLis01 = $(".choose-show").eq(0).find("li");
    let $oLis02 = $(".choose-show").eq(1).find("li");
    $oLis01.click(function(){
        $oLis01.removeAttr("class");
        $(this).attr("class","choose-active");
        
        let topMoney = $(".choose-active").find("span").html();
        $(".top-font").find(".goods-money").html(topMoney);
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

// 获取后端数据
function getData(){
    let goodsId = location.search.split("=")[1];
    // 获取数据展示在页面上
    $.get("./php/getGoodsInfo.php","goodsId="+goodsId,function(data){
        showData(data);
    },"json");
    
    $.get("./php/getGoodsList.php",function(data){
        showNavData(data);
        showNavData(data);
    },"json");

    $.get("./php/getShoppingCart.php",{
        "vipName":getCookie("miName")
    },function(data){
        if(document.cookie!=""){
            showHeadData(data);
        }else{
            cartHover(data);
        }
    },"json")
    
}

function showData(data){
    $(".title-left").find("h3").html(data.goodsName);
    $(".top-font").find("h2").html(data.goodsName)
    .next().append(data.beiyong5)
    .find("b").html(data.beiyong4);
    $(".choose-show").find("span").each(function(i){
        if(i==0){
            $(this).html(data.goodsPrice+"元");
        }else if(i==1){
            $(this).html(data.beiyong6+"元");
        }else if(i==2){
            $(this).html(data.beiyong7+"元");
        }
    });
    let topMoney = $(".choose-active").find("span").html();
    $(".top-font").find(".goods-money").html(topMoney);
    let htmlStr = "";
    let goodsColor = data.beiyong1.split(",")
    goodsColor.forEach(item => {
        // class="choose-active"
        htmlStr += `<li><a href="javascript:void(0);"><b>${item}</b></a></li>`;
    });
    $(".choose-color").html(htmlStr).find("li:eq(0)").attr("class","choose-active");

    $(".goods-font").html(`
        <div>
            <span>${data.goodsName}</span>
            <span>8+256GB</span>
            <span>${goodsColor[0]}</span>
        </div>
        <span>
        <i class="now-money">${data.goodsPrice}</i>元
        </span>
    `)
    $(".now-money").html(parseInt($(".choose-active").find("span").html()));

    $(()=>{
        if(data.beiyong9!=""){
            // 调用轮播图函数
            goLbtImg(0)
            $(".choose-show").eq(1).find("li").each((i)=>{
                $(".choose-show").eq(1).find("li").eq(i).click(()=>{
                    goLbtImg(i)
                })
            })


            //调用点击事件的函数 
            buyGoods(data);
            addGoodsCart();
        }else{
            $(".top-font").find("h2").next().find("b").append(data.goodsDesc)
            ;
            $(".goods_lbt").find("li:gt(0)").remove();
            $(".goods_lbt").find("img").attr("src",data.beiyong8);
            $("#imgSee").remove();
            $(".choose-wrap").eq(0).remove();
            $("#goods_money").html(`
                <div class="goods-font">
                    <div>
                        <span>${data.goodsName}</span>
                        <span>${data.beiyong1}</span>
                    </div>
                    <span>
                    <i class="now-money">${data.goodsPrice}</i>元
                    </span>
                </div>
                <div class="money-box">
                    总计 ：<span class="now-money">${data.goodsPrice}</span> 元
                </div>
            `);
            
            //调用点击事件的函数 
            addGoodsCart();
        }
        
    })
    
    function goLbtImg(num){
        let b1 = new MiLbt($(".goods_lbt"),{
            imgs:[
                data.beiyong8.split(",")[num], 
                data.beiyong9.split(",")[num],
                data.beiyong10.split(",")[num],
                data.beiyong11.split(",")[num],
                data.beiyong12.split(",")[num]
            ]
        })
        $("#imgSee li").click(function(){
            b1.goImg($(this).index())
        });
        let attr = [
            data.beiyong8.split(",")[num], 
            data.beiyong9.split(",")[num],
            data.beiyong10.split(",")[num],
            data.beiyong11.split(",")[num],
            data.beiyong12.split(",")[num]
        ];
        $("#imgSee img").each((j)=>{
            $("#imgSee img").eq(j).attr("src",attr[j]);
        })
    }

    
    
    
}


function showHeadData(data){
    
    let htmlStr = "";
    data.forEach(item =>{
        let goodsCount = item.goodsCount.split(",");
        htmlStr += `
            <div class="goods-list clear_fix">
                <div class="list-img float_left">
                    <a href="./mi_buyGoods.html?goodsId=${item.goodsId}">
                        <img src=${item.goodsImg} alt="">
                    </a>
                </div>
                <div class="list-title float_left">
                    <a href="./mi_buyGoods.html?goodsId=${item.goodsId}">
                        ${goodsCount[0]}
                    </a>
                </div>
                <h2 class="list-count float_left">
                <b class="isMoney">${goodsCount[1]}</b>元 × 
                <b class="nowGoodsNum">${item.goodsNum}</b>
                </h2>
                <span class="list-del" class="float_left">×</span>
            </div>
        `;
    })
    $("#list-box").append(htmlStr);


    // 顶部购物车交互

    // 显示商品数量
    allGoodsNum();

    
    
    
    // 购物车盒子内部样式
    $(".goods-list").not($(".goods-list:last")).css("border-bottom","1px solid #e0e0e0");
    $(".goods-list").hover(function(){
        $(this).find(".list-del").css("visibility","visible");
    },function(){
        $(this).find(".list-del").css("visibility","hidden");
    })

    // 点击删除
    $(".list-del").each(function(i){
        $(this).click(function(){
            $(this).parent().animate({
                "opacity":"0",
                "height":"0"
            },300,function(){
                $(this).remove();
                $.get("./php/deleteGoods.php",{
                    "vipName":getCookie("miName"),
                    "goodsId":data[i].goodsId,
                    "goodsCount":data[i].goodsCount
                },"json");
                allGoodsNum();
                if(allGoodsNum()==0){
                    location.reload();
                };
            })
        })
    })

    
    // 计算商品数量和金额显示以及购物车盒子的一些交互效果
    function allGoodsNum(){
        let allNum = 0;
        let GoodsMoney = 0;
        $(".nowGoodsNum").each(function(i){
            allNum += parseInt($(".nowGoodsNum").eq(i).html());
        });
        $(".isMoney").each(function(i){
            GoodsMoney += parseInt($(this).html()) * parseInt($(this).next().html());
        })
        
        // 当有商品时改变icon
        $("#Ashow i").attr("class","iconfont icon-gouwucheman");

        if(allNum==""){
            allNum=0;
            $("#Ashow").css({
                "display": "block",
                "background": '#424242',
                "border": "none",
                "padding": "0 15px 0 40px",
                "line-height": '40px',
                "position": "relative",
                "color": 'rgba(255,255,255,.6)'
            });
            $("#Ashow i").attr("class","iconfont icon-gouwuchekong");
            // 右边导航栏
            $("#showNum").css("display","none");
        }else if(allNum>0){
            $("#Ashow").css({
                "display": "block",
                "background":"#ff6700",
                "border": "none",
                "padding": "0 15px 0 40px",
                "line-height": '40px',
                "position": "relative",
                "color":"#fff"
            });
            // 右边导航栏
            $("#showNum").css("display","block").html(allNum);
        }
        $("#goods_Num").html(allNum);
        $("#isNum").html(allNum);
        $("#allMoney").html(GoodsMoney);

        cartHover(data,allNum);

        return allNum;
    }

}

function cartHover(data,allNum){
    $(".cart").mouseenter(function(){
        $("#Ashow").css({
            "display": "block",
            "border": "none",
            "padding": "0 15px 0 40px",
            "line-height": '40px',
            "position": "relative",
            "background": '#fff',
            "color": '#ff6700'
        });
        
        if(data[0]!=undefined && document.cookie!=""){
            $(".goShop").css({"display":"block"})
            $("#nowGoods").slideToggle(300)
        }else if(data[0]==undefined || allNum==0){
            $(".goShop").css({"display":"none"})
            $("#notGoods").slideToggle(300);
        }
    }).mouseleave(function(){
        $("#Ashow").css({
            "display": "block",
            "border": "none",
            "padding": "0 15px 0 40px",
            "line-height": '40px',
            "position": "relative",
            "background": '#424242',
            "color": 'rgba(255,255,255,.6)'
        });
        
        if(data[0]!=undefined && document.cookie!=""){
            $("#nowGoods").slideToggle(300)
        }else if(data[0]==undefined || allNum==0){
            $("#notGoods").slideToggle(300);
        }
        if(allNum>0){
            $("#Ashow").css({
                "display": "block",
                "background":"#ff6700",
                "border": "none",
                "padding": "0 15px 0 40px",
                "line-height": '40px',
                "position": "relative",
                "color":"#fff"
            }); 
        }
    })
}


function showNavData(data){
    let navStr = "";
    data.forEach(item => {
        navStr = `
            <li>
                <a href="./mi_buyGoods.html?goodsId=${item.goodsId}">
                    <div class="bd_box">
                        <img src="${item.beiyong13}" alt="">
                    </div>
                    <div class="nav_font">
                        <h4>${item.goodsName}</h4>
                        <span>${item.goodsPrice}</span>
                    </div>
                </a>
            </li>
        `;

        switch(item.beiyong2){
            case "xiaomi":
                $("#xm").append(navStr);
                break;
            case "redmi":
                $("#rm").append(navStr);
                break;
            case "tv":
                $("#tv").append(navStr);
                break; 
            case "pc": 
                $("#pc").append(navStr);
                break; 
            case "jd": 
                $("#jd").append(navStr);
                break; 
            case "lyq": 
                $("#lyq").append(navStr);
                break; 
            case "zn": 
                $("#zn").append(navStr);
                break; 
            default:
                break;
        }
    })
}

function addGoodsCart(){
    // 添加购物车
    $(".goCart").click(function(){
        let goodsCount = "";
        $(".goods-font").find("div span").each(function(){
            goodsCount += $(this).html() + "&nbsp;";
        });
        goodsCount += "," + $(".now-money").html();
        $.ajax({
            type:"POST",
            url:"./php/addShoppingCart.php",
            data:{
                "vipName":getCookie("miName"),
                "goodsId":location.search.split("=")[1],
                "goodsCount":goodsCount,
                "goodsNum":1
            },
            dataType:"json",
            success:(str)=>{
                console.log(str)
                if(str==1){
                    $("#exist").find("h2").html("已成功加入购物车!");
                    existShow();
                }else if(str==0){
                    existShow();
                }
            }
        });
    })
    function existShow(){
        $("#exist").fadeIn(500).find("#remove_del").click(function(){
            $("#exist").fadeOut(500);
        })
        $("#exist-box").animate({
            "bottom":"40%"
        })
        $("#existL").click(function(){
            $("#exist").fadeOut(500,function(){
                location.reload();
            });
        })
    }
}




$(function(){
    cookieShow();
    let attr = IndexShow();
    attr[0]();
    attr[1]();

    allGoodsBox();
    

    openShow();
    getData();
    bannerShow();
    addTypeId();
})