
    function miLogin(){
        $(".input-text").keydown(function(){
            $(this).parent().prev().html("账号登录")
        });
        
        $(".input-text").keydown(function(event){
            if(event.keyCode == 13){
                if($("#userId").val()!=0 && $("#passId").val()!=0){
                    addCookie("miName",$("#userId").val(),7);
                    loginAjax();
                }else{
                    $("#login_box").find("h3").html("用户名和密码不能为空！");
                }
            }
        })
        $("#btnLogin").click(function(){
            if($("#userId").val()!=0 && $("#passId").val()!=0){
                loginAjax();
            }else{
                $("#login_box").find("h3").html("用户名和密码不能为空！");
            }

         })
    }

    function loginAjax(){
        $.ajax({
            type:"POST",
            url:"./php/mi_loginCheck.php",
            data:{
                "username":$("#userId").val(),
                "userpass":$("#passId").val()
            },
            beforeSend:function(){
                $("#login_box").fadeOut(500);
            },
            dataType:"text",
            success:(result)=>{
                $("#login_now").fadeIn(500,function(){
                    $(this).find("span").css({"animation":"lodow .3s linear infinite"});
                    setTimeout(function(){
                        let myTimer = null;
                        let num =5;
                        if(result=="1"){
                            $("#login_now").find("span").css({"animation":"none"});
                            $("#login_now").find("i").attr("class","iconfont icon-zhengque")
                            .css({"color":"green"});
                            $("#message-box").html("登录成功，"+ num +"秒后跳转到<a href='./mi_index.html'>主页</a>").css({"color":"green"});
                            myTimer = setInterval(function(){
                                num--;
                                if(num<1){
                                    window.clearInterval(myTimer);
                                    myTimer=null;
                                    location.href="./mi_index.html";
                                    return;
                                }
                                $("#message-box")
                                .html("登录成功，"+ num +"秒后跳转到<a href='./mi_index.html'>主页</a>")
                                .css({
                                    "color":"green"
                                });
                            },1000)
                        }else if(result=="0"){
                            $("#login_now").find("span").css({"animation":"none"});
                            $("#login_now").find("i").attr("class","iconfont icon-cuowu2")
                            .css({"color":"red"});
                            $("#message-box").html("登录失败，用户名或密码错误！").css({"color":"red"});
                        }
                    },1000)
                });
            }
        });
    }


    
    $(function(){
        
        miLogin();

        $("input").focus(function(){
            $(this).css({"borderColor":"#000"})
        }).blur(function(){
            $(this).css({"borderColor":"#e0e0e0"})
        })


        $("#btnLogin").click(function(){
            addCookie("miName",$("#userId").val(),7);
        });
    })

