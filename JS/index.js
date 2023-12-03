function ser_bt(){
    alert('欢迎来到 Animals word 网！\n后续功能敬请期待！');
}


window.onload=function(){//加载完成后开始执行
    /*-----------------------------------网页banner区域的js代码---------------------*/
    let items=document.getElementsByClassName("item");//将html中li图片操作
    let circles=document.getElementsByClassName("circle");//图片轮播小圆点导航
    let leftButton=document.getElementById("btn-left");//左按钮
    let rightButton=document.getElementById("btn-right");//右按钮
    let content=document.querySelector('.content');//查找
    let index=0;
    let timer=null;//设置定时器，并初始数据
    //清除class
    console.log(items.length);
    let clearclass=function(){
        for(let i=0;i<items.length;/*包含图片li的数量*/i++){
            items[i].className="item";
            circles[i].className="circle";
            circles[i].setAttribute("num",i);//添加指定的属性，并为其赋指定的值。
        }
    }
    //只显示一个class,一个class对应一个图片和一个小圆点
    function move(){//创建move函数来实现图片的切换
        clearclass();
        items[index].className="item active";/*将图片的类名进行切换，在css中此类名不透明度为1*/
        circles[index].className="circle white";
    }    
    //点击左边按钮切换上一张图片
    leftButton.onclick=function(){
        if(index<items.length){
           if(index==0)/*当index为0时直接跳转最后一张轮播图*/
            {
            index=4;
            }
            else
            index--;
        }
        else{
            index=items.length-1;
        }
        move();
    }
    //点击右边按钮切换下一张图片
    rightButton.onclick=function(){
        if(index<items.length-1){
            index++;
        }
        else{
            index=0;
        }
        move();
    }

    //设置定时器
    timer=setInterval(function(){
        rightButton.onclick();//点击按钮可快速切换到下一张图片
    },3000)//如果不点击按钮，图片将会每隔三秒自动切换一次

   
    for(let i=0;i<circles.length;i++){
        circles[i].addEventListener("click",function(){
            let point_index=this.getAttribute("num");
            index=point_index; //点击小圆点时，跳转到对应图片
            move();
        })
    }
   
    content.onmouseover=function(){
        clearInterval(timer); //鼠标移入清除定时器
            timer=setInterval(function(){//开启一个3秒的定时器
                rightButton.onclick();
            },4000)
    }
    //鼠标移出又开启定时器
    content.onmouseleave=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            leftButton.onclick();
        },2500)
    }
    //-----------------------------------------------返回顶部
    const bctop=document.getElementById("bctop");//绑定返回顶部按钮
    const logo=document.getElementById("logo");//绑定滑动区域

    window.onscroll=function(){//添加滑动事件
        if(document.documentElement.scrollTop>logo.offsetHeight){
            bctop.style.display="block";//大于显示
        }
        else{
            bctop.style.display="none";//小于隐藏
        }
    }
    bctop.onclick=function(){//添加点击事件
        document.body.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    }
}
