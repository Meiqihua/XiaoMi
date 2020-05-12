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