
// 顶部cookie交互
function cookieShow(){
    if(document.cookie!=""){
        $(".hdr_r").find("li:lt(2)").css("display","none");
        $(".hdr_r").find("a").not("a:last").not("#cookieName a").css("padding","0 20px");
        $("#myOrder").css("display","block");
        $("#cookieName").css("display","block").find("a:first").html(getCookie("miName"));
        $("#cookieName").mouseenter(function(){
            $("#cookieBox").slideToggle(200);
        }).mouseleave(function(){
            $("#cookieBox").slideToggle(200);
        });

        $("#outCookie").click(function(){
            if(confirm("确认退出登录吗？")){
                removeCookie("miName");
                window.location.reload();
            }
        })
    }
}