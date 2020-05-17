
$(function(){
    let attr = IndexShow();
    attr[1]();

    $.get("./php/getShoppingCart.php",{
        "vipName":getCookie("miName")
    },function(data){
        show51Data(data);
    },"json")

    function show51Data(data){
        let allNum = 0;
        data.forEach(item => {
            allNum += parseInt(item.goodsNum)
        });
        $("#showNum").css("display","block").html(allNum)
    }
})