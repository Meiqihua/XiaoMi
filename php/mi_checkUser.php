<?php
    header("content-type:text/html;charset=utf-8");

    $name = $_GET['username'];


    $conn = mysqli_connect("localhost","root","root","xiaomi");

    $result = mysqli_query($conn,"select * from mi_vip where Mi_Name='{$name}'");

    mysqli_close($conn);

    $arr = mysqli_fetch_all($result, MYSQLI_ASSOC);

    if(count($arr)==1){
        echo "1";  //用户名存在
    }else{
        echo "0"; //用户名不存在
    }



?>