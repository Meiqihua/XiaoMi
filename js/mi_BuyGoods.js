
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

    $.get("./php/getGoodsInfo.php","goodsId="+goodsId,function(data){
        showData(data);
    },"json");
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
            <span>8GB+256GB</span>
            <span>${goodsColor}</span>
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
        }else{
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