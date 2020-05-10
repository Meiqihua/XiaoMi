<?php
    header("content-type:text/html;charset=utf-8");

    $name = $_POST['username'];
    $pass = $_POST['userpass'];

    $conn = mysqli_connect("localhost","root","root","xiaomi");

    $result = mysqli_query($conn,"select * from mi_vip where Mi_Name='{$name}' and Mi_pass='{$pass}'");
    
    mysqli_close($conn);


    $arr = mysqli_fetch_all($result, MYSQLI_ASSOC);

    if(count($arr)==1){
        echo "1";
    }else{
        echo "0";
    }


?>