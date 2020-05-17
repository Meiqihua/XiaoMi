
function allGoodsShow(){
    $(".goods-box").each(function(){
        $(this).find("li").each((i)=>{
            if((i+1)%5==0){
                $(this).find("li").eq(i).css({"border-right":"0"})
            }
        });
        if($(this).find("li").length%5!=0){
            let num = $(this).find("li").length%5;
            for(let i=1;i<=num;i++){
                $(this).find("li").eq(-i).css({"border-bottom":"0"})
            }
        }
    });

    $(".clickShow").click(function(){
        $(this).next().slideToggle(300);
        if($(this).find("i").css("color")!="rgb(255, 103, 0)"){
            $(this).find("i").removeAttr("class").attr("class","iconfont icon-jiantoushang").css({
                "color":"#ff6700",
                "border-color":"#ff6700"
            });
        }else{
            $(this).find("i").removeAttr("class").attr("class","iconfont icon-jiantouxia").css({
                "color":"#b0b0b0",
                "border-color":"#b0b0b0"
            });
        }
    });
    $(".clickShow").eq(0).css({"padding-top":"0"});
}


function getAllGoodsData(){
    $.get("./php/getGoodsList.php",function(data){
        showNavData(data);
        showNavData(data);
        showAllGoodsData(data);
        goTypeId();
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

function showAllGoodsData(data){
    let allStr = "";
    data.forEach(item =>{
        allStr = `
            <li>
                <a href="./mi_buyGoods.html?goodsId=${item.goodsId}"><img src="${item.goodsImg}" alt=""></a>
                <span><a href="./mi_buyGoods.html?goodsId=${item.goodsId}">${item.goodsName}</a></span>
            </li>
        `;
        switch(item.typeId){
            case "001":
                $(".allty001").append(allStr);
                $(".allty001").append(allStr);
                break;
            case "002":
                $(".allty002").append(allStr);
                $(".allty002").append(allStr);
                $(".allty002").append(allStr);
                break;
            case "003":
                if(item.beiyong2=="tv"){
                    $(".allty003").append(allStr);
                    $(".allty003").append(allStr);
                    $(".allty003").append(allStr);
                    $(".allty003").append(allStr);
                }else{
                    $(".allty005").append(allStr);
                }
                break; 
            case "004": 
                $(".allty004").append(allStr);
                $(".allty004").append(allStr);
                break; 
            case "005": 
                $(".allty005").append(allStr);
                $(".allty005").append(allStr);
                break; 
            case "006": 
                $(".allty006").append(allStr);
                $(".allty006").append(allStr);
                $(".allty006").append(allStr);
                break; 
            case "007": 
                $(".allty007").append(allStr);
                $(".allty007").append(allStr);
                $(".allty007").append(allStr);
                break; 
            case "008": 
                $(".allty008").append(allStr);
                $(".allty008").append(allStr);
                $(".allty008").append(allStr);
                break; 
            case "009": 
                $(".allty009").append(allStr);
                $(".allty009").append(allStr);
                $(".allty009").append(allStr);
                break; 
            case "010":
                $(".allty010").append(allStr);
                $(".allty010").append(allStr);
                $(".allty010").append(allStr);
                break; 
            default:
                break;
        }
    })
    
    allGoodsShow();
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

function goTypeId(){
    let typeID = parseInt(location.search.split("=")[1]);
    $("html,body").animate({
        scrollTop:$(".goods-box").eq(typeID).prev().offset().top
    },700);
}


$(function(){
    let attr = IndexShow();
    attr[0]();
    attr[1]();
    allGoodsBox();
    cookieShow();

    // 后端数据交互
    bannerShow();
    getAllGoodsData();

    addTypeId();
});
