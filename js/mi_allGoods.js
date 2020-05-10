
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
        console.log($(this).find("i").css("color"))
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
