<?php
    header("content-type:text/html;charset=utf-8");

    $name = $_POST["username"];
    $pass = $_POST["userpass"];

    $conn = mysqli_connect("localhost","root","root","xiaomi");

    $result = mysqli_query($conn,"insert into mi_vip(Mi_Name,Mi_pass) value ('".$name."','".$pass."')");    

    mysqli_close($conn);

    if($result){
        echo "1"; //注册成功
    }else{
        echo "0"; //注册失败
    }


?>