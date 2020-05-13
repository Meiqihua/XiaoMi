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
        showHeadData(data);
    },"json")
}

function showData(data,num){
    let htmlStr="";
    for(let i=0;i<data.length;i++){
        if(i<=8 && num==0){
            htmlStr += `
                <li>
                    <a href="./mi_buyGoods.html?goodsId=${data[i].goodsId}">
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
                    <a href="./mi_buyGoods.html?goodsId=${data[i].goodsId}">
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
                    <a href="#">
                        <img src="${data[i].goodsImg}" alt="">
                        <h3>${data[i].goodsName}</h3>
                        <p>
                            <span>${data[i].goodsPrice}元起</span>
                        </p>
                    </a>
                </li>
                <li class="last-show last-icon">
                    <a href="#">
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
                    ${goodsCount[1]}元 × ${item.goodsNum}
                </h2>
                <span class="list-del" class="float_left">×</span>
            </div>
        `;
    })
    $("#list-box").append(htmlStr);


    // 顶部购物车交互
    $("#Ashow").css({
        "display": "block",
        "border": "none",
        "padding": "0 15px 0 40px",
        "line-height": '40px',
        "position": "relative",
        "background": '#424242',
        "color": 'rgba(255,255,255,.6)'
    });
    $(".goods-list").not($(".goods-list:last")).css("border-bottom","1px solid #e0e0e0");
    $(".goods-list").hover(function(){
        $(this).find(".list-del").css("visibility","visible");
    },function(){
        $(this).find(".list-del").css("visibility","hidden");
    })
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
        // $("#goodsBox").animate({
        //     "min-height":"100px"
        // },300);
        $("#nowGoods").slideToggle(300)
        if(data.vipName==""){
            $("#notGoods").fadeIn(300);
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
        // $("#goodsBox").animate({
        //     "min-height":"0"
        // },500);
        $("#nowGoods").slideToggle(300)
        if(data.vipName==""){
            $("#notGoods").fadeOut(300);
        }
    })

    $(".list-del").each(function(i){
        $(this).click(function(){
            $(this).parent().animate({
                "opacity":"0",
                "height":"0"
            },300,function(){
                $(this).remove();
            })
        })
    })

}