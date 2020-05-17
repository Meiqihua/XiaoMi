
function miReg(){
    $("#userId").blur(function(){
        // 账号框
        if($(this).val()!=""){
            $.ajax({
                type:"GET",
                url:"./php/mi_checkUser.php",
                data:{
                    "username":$(this).val()
                },
                dataType:"json",
                beforeSend:()=>{
                    $(this).next().find("i").attr("class","iconfont icon-dengdai");
                },
                success:(str)=>{
                    setTimeout(()=>{
                        if(isId()){
                            if(str=="1"){
                                $(this).next().find("i").removeAttr("class")
                                .attr("class","iconfont icon-cuowu2");
                                $(this).parent().prev().html("用户名已存在").css({"color":"red"})
                            }else if(str=="0"){
                                $(this).next().find("i").removeAttr("class")
                                .attr("class","iconfont icon-zhengque");
                                $(this).parent().prev().html("账号").css({"color":"#202020"})
                            }
                        }else {
                            $(this).next().find("i").removeAttr("class")
                            .attr("class","iconfont icon-cuowu2");
                            $(this).parent().prev().html("格式有误，不符合以字母开头的6-16个字符,包含数字和下划线")
                            .css({"color":"red"})
                        }
                    },500);
                },
            })
        }else{
            $(this).parent().prev().html("账号").css({"color":"#202020"});
            $(this).next().find("i").removeAttr("class");
        }
    });
    // 密码框
    $("#passId").blur(function(){
        if($(this).val()!=""){
            isPass();
        }else{
            $(this).parent().prev().html("密码").css({"color":"#202020"});
            $(this).next().find("i").removeAttr("class");
        }
    });

    // 重复密码框
    $("#passAgain").blur(function(){
        if($(this).val()!=""){
            passAgain();
        }else{
            $(this).parent().prev().html("再次确认密码").css({"color":"#202020"});
            $(this).next().find("i").removeAttr("class");
        }
    });

    // 点击注册
    $("#regBtn").click(function(){
        if($(".in-text").val() != ""){
            if(isId()&&isPass()&&passAgain()){
                $.ajax({
                    type:"POST",
                    url:"./php/mi_regSave.php",
                    data:{
                        "username":$("#userId").val(),
                        "userpass":$("#passId").val()
                    },
                    dataType:"json",
                    beforeSend:function(){
                        $("#reg_box").fadeOut(500);
                    },
                    success:function(str){
                        $("#reg_now").fadeIn(500,function(){
                        $(this).find("span").css({"animation":"lodow .3s linear infinite"});
                        setTimeout(function(){
                            let myTimer = null;
                            let num =5;
                            if(str=="1"){
                                $("#reg_now").find("span").css({"animation":"none"});
                                $("#reg_now").find("i").attr("class","iconfont icon-zhengque")
                                .css({"color":"green"});
                                $("#message-box").html("注册成功，"+ num +"秒后跳转到<a href='./mi_index.html'>主页</a>").css({"color":"green"});
                                myTimer = setInterval(function(){
                                    num--;
                                    if(num<1){
                                        window.clearInterval(myTimer);
                                        myTimer=null;
                                        location.href="./mi_login.html";
                                        return;
                                    }
                                    $("#message-box")
                                    .html("注册成功，"+ num +"秒后将自动跳转到<a href='./mi_login.html'>登录</a>")
                                    .css({
                                        "color":"green"
                                    });
                                },1000)
                            }else{
                                $("#reg_now").find("span").css({"animation":"none"});
                                $("#reg_now").find("i").attr("class","iconfont icon-cuowu2")
                                .css({"color":"red"});
                                $("#message-box").html("注册失败，服务器出错！").css({"color":"red"});
                            }
                        },1000)
                    });
                    }
                });
            }
        }
    })

}

function isId(){
    let reg = /^[a-zA-Z]\w{5,15}$/;
    if(reg.test($("#userId").val())){
        return true;
    }else{
        return false;
    }
}

function isPass(){
    let reg = /^[\da-zA-Z]{6,12}$/;
    $("#passId").next().find("i").attr("class","iconfont icon-dengdai");

    if(reg.test($("#passId").val())){
        setTimeout(function(){
            $("#passId").next().find("i").removeAttr("class")
            .attr("class","iconfont icon-zhengque");
            $("#passId").parent().prev().html("密码").css({"color":"#202020"});
        },500)
        return true;
    }else{
        setTimeout(function(){
            $("#passId").next().find("i").removeAttr("class")
            .attr("class","iconfont icon-cuowu2");
            
            $("#passId").parent().prev().html("格式有误，请输入6-12个字符")
            .css({"color":"red"});
        },500)
        return false;
    }
}

function passAgain(){
    let reg = /^[\da-zA-Z]{6,12}$/;
    $("#passAgain").next().find("i").attr("class","iconfont icon-dengdai");
    let goNow = false;
    if(reg.test($("#passAgain").val())){
        if($("#passAgain").val()==$("#passId").val()){
            setTimeout(function(){
                $("#passAgain").next().find("i").removeAttr("class")
                .attr("class","iconfont icon-zhengque");
                $("#passAgain").parent().prev().html("再次确认密码").css({"color":"#202020"});
            },500)
            return true;
        }else{
            setTimeout(function(){
                $("#passAgain").next().find("i").removeAttr("class")
                .attr("class","iconfont icon-cuowu2");

                $("#passAgain").parent().prev().html("两处密码不一致，请检查")
                .css({"color":"red"});
                goNow = true;
            },500)
            if(goNow=true){
                return false;
            }
        }
    }else{
        setTimeout(function(){
            $("#passAgain").next().find("i").removeAttr("class")
            .attr("class","iconfont icon-cuowu2");
            
            $("#passAgain").parent().prev().html("格式有误，请输入6-12个字符")
            .css({"color":"red"});
        },500)
        return false;
    }
}



$(function(){
    let myTimer = null;
    let scrollTop = 100;
    
    $("input").focus(function(){
        $(this).css({"borderColor":"#000"}).next().css({"borderColor":"#000"})
    }).blur(function(){
        $(this).css({"borderColor":"#e0e0e0"}).next().css({"borderColor":"#e0e0e0"})
    })
    
    myTimer = setInterval(function(){
        scrollTop--;
        if(scrollTop<=50){
            clearInterval(myTimer);
            myTimer=null;
            scrollTop = 50;
        }
        $(window).scrollTop(scrollTop);
    },10)

    miReg();
});
