// 小米轮播图函数
class MiLbt{
    constructor(oDom,obj){
        this.oDom = oDom
        this.oImgs = this.oDom.find("li");
        let defaultObj = {
            imgs:[
                "./images/index-banner01.jpg",
                "./images/index-banner02.jpg",
                "./images/index-banner03.jpg",
                "./images/index-banner04.jpg",
                "./images/index-banner05.jpg"
            ],
            href:[
                "./mi_buyGoods.html",
                "./mi_buyGoods.html",
                "./mi_buyGoods.html",
                "./mi_buyGoods.html",
                "./mi_buyGoods.html",
            ],
            timeLong:3000,
            myTimer:null,
            ord:0
        }
        if(obj){
            for(let key in defaultObj){
                defaultObj[key] = obj[key]==undefined?defaultObj[key]:obj[key];
            }
        }
        for(let key in defaultObj){
                this[key] = defaultObj[key];
        }
        this.dou = this.oDom.next().find("li");
        this.btn = this.oDom.next().next().find("span");

        this.showClass = this.dou.eq(0).attr("class");
        this.imgNow();
        this.autoPlay();
        this.addEvent();
    }

    autoPlay(){
        if(this.myTimer==null){
            this.myTimer = setInterval(()=>{
                this.goImg(this.ord+1);
                this.shun = true;
            },this.timeLong)
        }
    }
    imgNow(){
        let num = this.oImgs.length;
        this.oImgs.each((i)=>{
            num--;
            this.oImgs.find("img").eq(i).attr("src",this.imgs[i]);
            this.oImgs.eq(i).css({"z-index":num});
            if(this.oImgs.find("a")==undefined){
                this.oImgs.find("a").eq(i).attr("href",this.href[i])
            }
        });

    }
    goImg(transOrd){
        if(transOrd==this.ord){
            return;
        }

        if(transOrd>this.oImgs.length-1){
            transOrd = 0;
        }else if(transOrd<0){
            transOrd = this.oImgs.length-1;
        }

        let outOrd = this.ord;
        this.ord = transOrd;

        this.oImgs.eq(outOrd).fadeOut(this.timeLong/3);
        this.oImgs.eq(this.ord).fadeIn(this.timeLong/3);

        this.dou.removeAttr("class");
        this.dou.eq(this.ord).attr("class",this.showClass);
    }

    stopPlay(){
        window.clearInterval(this.myTimer);
        this.myTimer = null;
    }
    addEvent(){
        this.oDom.parent().mouseenter(()=>{
            this.stopPlay();
        });
        this.oDom.parent().mouseleave(()=>{
            this.autoPlay();
        });

        this.dou.click((event)=>{
            this.goImg($(event.target).index());
        });

        this.btn.eq(0).click(()=>{
            this.goImg(this.ord-1);
        });
        this.btn.eq(1).click(()=>{
            this.goImg(this.ord+1);
        });
    }
}

// 主页轮播图2

class Lbt2{
    constructor(){
        // 移动
        this.ord = 0;
        this.myTimer = null;
        this.isComplete = true;
        this.lbtWidth = parseInt(getStyle($("#lbt_2")[0],"width"))+parseInt(getStyle($("#lbt_2")[0],"margin-left"));
        this.lbtLiWidth = parseInt(getStyle($("#lbt2_mover")[0].firstElementChild,"width"))+parseInt(getStyle($("#lbt_2")[0],"margin-left"));
        this.moverWidth = $("#lbt2_mover")[0].children.length*this.lbtLiWidth;

        this.autoPlay();
        this.lbt2Go();
    }

    goNext(){
        let lbtMgLeft = parseInt(getStyle($("#lbt2_mover")[0],"margin-left"));
        if((this.ord+1)*this.lbtWidth<=this.moverWidth){
            if(this.isComplete==false){
                return;
            }
            this.ord++;
            this.isComplete = false;
            sliderH($("#lbt2_mover")[0],"margin-left",lbtMgLeft-this.lbtWidth,500,()=>{
                this.isComplete = true;
            });
            if((this.ord+1)*this.lbtWidth >= this.moverWidth){
                this.stop();
                $("#lbt2_btn")[0].lastElementChild.className = "iconfont icon-jiantou-copy";
                let moverLi = this.lbtWidth - ((this.ord+1)*this.lbtWidth - this.moverWidth);
                sliderH($("#lbt2_mover")[0],"margin-left",lbtMgLeft-moverLi,500);
                setTimeout(()=>{
                    sliderH($("#lbt2_mover")[0],"margin-left",0,1000,()=>{
                        this.ord=0;
                        this.autoPlay();
                    });
                    
                },3000)
            }
            if(this.ord>0){
                $("#lbt2_btn")[0].firstElementChild.className = "iconfont icon-jiantou-copy lbt2_active";
            } 
        }
    }

    goForward(){
        let lbtMgLeft = parseInt(getStyle($("#lbt2_mover")[0],"margin-left"));
        if(this.ord>0){
            if((this.ord+1)*this.lbtWidth >= this.moverWidth){
                let moverLi = this.lbtWidth - ((this.ord+1)*this.lbtWidth - this.moverWidth);
                if(this.isComplete==false){
                    return;
                }
                this.isComplete = false;
                sliderH($("#lbt2_mover")[0],"margin-left",lbtMgLeft+moverLi,500,()=>{
                    this.isComplete = true;
                });
                this.ord--;
            }else{
                if(this.isComplete==false){
                    return;
                }
                this.ord--;
                this.isComplete = false;
                sliderH($("#lbt2_mover")[0],"margin-left",lbtMgLeft+this.lbtWidth,500,()=>{
                    this.isComplete = true;
                });
            }
        }
    }

    autoPlay(){
        if(this.ord==0){
            $("#lbt2_btn")[0].firstElementChild.className = "iconfont icon-jiantou-copy";
            $("#lbt2_btn")[0].lastElementChild.className = "iconfont icon-jiantou-copy lbt2_active";
        }
        this.myTimer = setInterval(()=>{
            this.goNext();
        },5000)
    }

    stop(){
        window.clearInterval(this.myTimer);
        this.myTimer = null;
    }

    lbt2Go(){
        let olbtBtn = $("#lbt2_btn")[0];
        $("#lbt2_mover")[0].style.width = this.moverWidth + "px";
        if(this.moverWidth>this.lbtWidth){
            olbtBtn.lastElementChild.className = "iconfont icon-jiantou-copy lbt2_active";
        }
        olbtBtn.lastElementChild.onclick = ()=>{
            this.goNext();
            this.stop();
        };
        olbtBtn.firstElementChild.onclick = ()=>{
            this.goForward();
            this.stop();
        }
    }
}

class CreateLbt2Lis{
    constructor(oUlDom,href,img,goods,goodsTitle,oldPrice,newPrice){
        // 商品动态跟新
        this.oUlDom = oUlDom;
        this.href = href;
        this.img = img;
        this.goods = goods;
        this.goodsTitle = goodsTitle;
        this.oldPrice = oldPrice;
        this.newPrice = newPrice;
        this.createDom();

    }
    createDom(){
        let lbt2_Li = document.createElement("li");
        this.oUlDom.appendChild(lbt2_Li);

        let lbt2_A = document.createElement("a");
        lbt2_A.href = this.href;
        lbt2_Li.appendChild(lbt2_A);

        let lbt2_img = document.createElement("img");
        lbt2_img.src = this.img;
        lbt2_A.appendChild(lbt2_img);

        let lbt2_h3 = document.createElement("h3");
        lbt2_h3.innerHTML = this.goods;
        lbt2_A.appendChild(lbt2_h3);

        let lbt2_h4 = document.createElement("h4");
        lbt2_h4.innerHTML = this.goodsTitle;
        lbt2_A.appendChild(lbt2_h4);

        let lbt2_P = document.createElement("p");
        lbt2_A.appendChild(lbt2_P);

        let lbt2_span = document.createElement("span");
        lbt2_span.innerHTML = this.oldPrice + "元";
        lbt2_P.appendChild(lbt2_span);

        let lbt2_del = document.createElement("del");
        lbt2_del.innerHTML = this.newPrice + "元";
        lbt2_P.appendChild(lbt2_del);
    }
}





// 封装运动的函数
// 运动的要素：
// 1、路程（起始位置，结束位置），速度（步长，和时间间隔） 时间

// 功能：运动
// 参数：运动的主体（DOM对象），属性名，起始位置，结束位置，方向，步长，时间间隔
// 返回值：定时器

function mover01(oDom,  attr, startP, endP,step,direction,  timeSpace) {
    var value = startP;
    var myTimer = setInterval(() => {
        // 一、数据处理
        // 1、运算
        value = value + direction*step;
        // 2、边界处理（合法性的处理）
        // if (value >= endP) {
        if (direction>0? value >= endP:value <= endP) {
            value = endP;
            window.clearInterval(myTimer);
            myTimer = null;
        }

        // 二、外观呈现(让用户看到结果)
        if(attr=="opacity"){
            oDom.style[attr] = value;
        }else{
            oDom.style[attr] = value + "px";
        }

    }, timeSpace);

    return myTimer;
}


// 进一步的封装：
function mover02(oDom,  attr, endP,step, timeSpace) {
    // 起始值也可以获取到
    var startP = parseFloat(getStyle(oDom,attr)); 

    var value = startP;
    // 方向可以在内部进行计算
    var direction = startP<endP?1:-1;

    var myTimer = setInterval(() => {
        // 一、数据处理
        // 1、运算
        value = value + direction*step;
        // 2、边界处理（合法性的处理）
        // if (value >= endP) {
        if (direction>0? value >= endP:value <= endP) {
            value = endP;
            window.clearInterval(myTimer);
            myTimer = null;
        }

        // 二、外观呈现(让用户看到结果)
        if(attr=="opacity"){
            oDom.style[attr] = value;
        }else{
            oDom.style[attr] = value + "px";
        }

    }, timeSpace);

    return myTimer;
}



// 再进一步的封装：
// 运动描述：让某个物体花多长时间从某处移动到某处。

function mover03(oDom, attr, endP,timeLong) {
    // 起始值也可以获取到
    var startP = parseFloat(getStyle(oDom,attr)); 

    var value = startP;
    // 方向可以在内部进行计算
    var direction = startP<endP?1:-1;

    // 步长和时间间隔合起来决定了速度（步长越长，越快，事件间隔越短，越快）

    // 已知 时长：timeLong
    // 已知 路程  Math.abs(endP-startP)
    // 能够计算出速度，但是根据速度没法计算出两个未知的值（步长和时间间隔）
    // 怎么办？
    // 既然是动画，就希望平滑一点，要平滑，那么时间间隔就要小一点。事件间隔的最小值是多少？这个以前是16；现在是多少？可以再小一点
    //  时间间隔的最小值是有时效性的，即：随着计算机的发展，计算机刷屏的频率越来越快，那就可以在小。             
    var timeSpace = 5;//
    var step =  Math.abs(endP-startP)/(timeLong/timeSpace) ; //步长 =  路程/总步子数 ；  总步子数 = 总时长/时间间隔  = 1000 / 10

    var myTimer = setInterval(() => {
        // 一、数据处理
        // 1、运算
        value = value + direction*step;
        // 2、边界处理（合法性的处理）
        // if (value >= endP) {
        if (direction>0? value >= endP:value <= endP) {
            value = endP;
            window.clearInterval(myTimer);
            myTimer = null;            
        }

        // 二、外观呈现(让用户看到结果)
        if(attr=="opacity"){
            oDom.style[attr] = value;
        }else{
            oDom.style[attr] = value + "px";
        }
        // if(myTimer==null){
        //     fn && fn();
        // }
    }, timeSpace);

    return myTimer;
}


//封装函数
// 功能：完成两张图片的淡入淡入


// 此函数（sliderH）是在mover03的基础上，多加一个dom元素（进入的dom元素）
// 这样的话，启动一个定时器，同时改变两张图片的属性值（如：left）。

// 功能：完成两张图片的滑动（一个定时器，完成两张图片的滑动）
// 参数：
// 两个dom对象，
// 样式属性
// 结束位置
// 总时长
//  oDom,       attr, endP,timeLong
function sliderH(domOut,attr,endP,timeLong,fn){
    
    // 起始值也可以获取到
    var startP = parseFloat(getStyle(domOut,attr)); 
    var value = startP;
    // 方向可以在内部进行计算
    var direction = startP<endP?1:-1;

    var timeSpace = 5;//
    var step =  Math.abs(endP-startP)/(timeLong/timeSpace) ; //步长 =  路程/总步子数 ；  总步子数 = 总时长/时间间隔  = 1000 / 10

    // 定义变量：计算出两张图片的left的差（其实就是domOut的宽度）
    // var diffLeft = domOut.offsetWidth; 
    // var diffLeft = parseFloat(getStyle(domOut,"width")); 

    var myTimer = setInterval(() => {
        // 一、数据处理
        // 1、运算
        value = value + direction*step;
        // 2、边界处理（合法性的处理）
        // if (value >= endP) {
        if (direction>0? value >= endP:value <= endP) {
            value = endP;
            window.clearInterval(myTimer);
            myTimer = null;
            // fn && fn();    
            // isComplete = true;
        }

        // 二、外观呈现(让用户看到结果)
        domOut.style[attr] = value + "px";
        // domIn.style[attr] = (value+diffLeft) + "px";

        // 说明定时器停止了，即：滑动停止了
        if(myTimer==null){
            fn && fn();            
        }

    }, timeSpace);

    return myTimer;
}













// 功能：获取某个dom元素的样式属性（兼容性写法）
// 参数
//  dom元素
//  属性名
// 返回值：样式属性的值；

// 调用示例

// var str = getStyle(oDiv,"width");

function getStyle(oDom, attr) {
    var value;
    if (oDom.currentStyle) { //IE
        value = oDom.currentStyle[attr]
    } else { //非IE的主流浏览器
        var obj = window.getComputedStyle(oDom);//oDom的所有样式（对象）
        value = obj[attr];
    }
    // if(!value){
    //     // 使用offset相关属性。
    // }
    return value;
}

// 对象的属性有两种访问方式
//  点
// 方括号



// 主页js副本
