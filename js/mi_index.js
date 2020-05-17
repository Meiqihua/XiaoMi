// 从数据库中获取商品
function getGoods(){
    // 主页手机板块
    $.get("./php/getGoodsList.php?typeId=001",function(data){
        showData(data,0);
    },"json");

    // 主页家电板块
    $.get("./php/getGoodsList.php?typeId=003",function(data){
        showData(data,1);
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
    addTypeId();
}

function showData(data,num){
    let htmlStr="";
    for(let i=0;i<data.length;i++){
        if(i<=8 && num==0){
            htmlStr += `
                <li>
                    <a target="_blank" href="./mi_buyGoods.html?goodsId=${data[i].goodsId}">
                        <img src="${data[i].goodsImg}" alt="">
                        <h3>${data[i].goodsName}</h3>
                        <h4>${data[i].goodsDesc}</h4>
                        <p>
                            <span>${data[i].goodsPrice}元起</span>
                            <del>${data[i].beiyong3}</del>
                        </p>
                    </a>
                </li>
            `;
        }else if(i<7 && num>=1){
            htmlStr += `
                <li>
                    <a target="_blank" href="./mi_buyGoods.html?goodsId=${data[i].goodsId}">
                        <img src="${data[i].goodsImg}" alt="">
                        <h3>${data[i].goodsName}</h3>
                        <h4>${data[i].goodsDesc}</h4>
                        <p>
                            <span>${data[i].goodsPrice}元起</span>
                            <del>${data[i].beiyong3}</del>
                        </p>
                    </a>
                </li>
            `;
        }
        
        if(num>=1&& data[i].goodsId=="03009"){
            htmlStr += `
                <li class="last-show">
                    <a target="_blank" href="./mi_buyGoods.html?goodsId=${data[i].goodsId}">
                        <img src="${data[i].goodsImg}" alt="">
                        <h3>${data[i].goodsName}</h3>
                        <p>
                            <span>${data[i].goodsPrice}元起</span>
                        </p>
                    </a>
                </li>
                <li class="last-show last-icon">
                    <a target="_blank" href="./mi_allGoods.html">
                        <h3>浏览更多</h3>
                        <h4>热门</h4>
                        <i class="iconfont icon-youjiantou1"></i>
                    </a>
                </li>
            `;
        }

    };
    $(".sp_r").eq(num).html(htmlStr);
}

function showNavData(data){
    let navStr = "";
    data.forEach(item => {
        navStr = `
            <li>
                <a target="_blank" href="./mi_buyGoods.html?goodsId=${item.goodsId}">
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

function showHeadData(data){
    
    let htmlStr = "";
    data.forEach(item =>{
        let goodsCount = item.goodsCount.split(",");
        htmlStr += `
            <div class="goods-list clear_fix">
                <div class="list-img float_left">
                    <a target="_blank" href="./mi_buyGoods.html?goodsId=${item.goodsId}">
                        <img src=${item.goodsImg} alt="">
                    </a>
                </div>
                <div class="list-title float_left">
                    <a target="_blank" href="./mi_buyGoods.html?goodsId=${item.goodsId}">
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


$(function(){
    let attr = IndexShow();
    attr.forEach(function(item){
        item();
    })

    // 动态添加轮播图2商品 
    let b2 = new CreateLbt2Lis(
        ["01001","01002","01003","03010","04003","03008","03002"
         ,"03009","08003","06002","10001","07002","03004","04004"]);

        


    // 调用大轮播图函数
    let b1 = new MiLbt($("#index-lbt"))

    function lbt2Color(){
        let colors = ["#ffac13","#83c44e","#2196f3","#e53935","#00c0a5"];
        let num=0;
        $("#lbt2_mover").find("li").each(function(){
            num++;
            if(num>=5){
                num = 0;
            }
            $(this).css({"border-color":colors[num]})
        })
    }
    lbt2Color();
    cookieShow();
    goTime();

    $(".sp_l:gt(0)").find("a").css({
        "width": '234px',
        "height": "300px",
        "margin": "0 0 14px 0"
    })

    // 调用动态创建商品函数
    getGoods();
    bannerShow();
})

