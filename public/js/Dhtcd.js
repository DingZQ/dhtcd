//顶部导航栏
function color(){return Math.floor(Math.random()*255);}
var rcu = document.querySelectorAll("#hrad>ul>li");
for(var rc of rcu){
  rc.onmouseenter=function(){
	var rc=this;
    rc.style.border=`2px solid rgb(${color()},${color()},${color()})`;
	rc.style.background=`rgba(${color()},${color()},${color()},.5)`;
  }
  rc.onmouseleave=function(){
	var rc=this;
	rc.style.background="";
	rc.style.border="";
  }
}
//垂直导航栏
var mcu = document.querySelectorAll("#CF>.navbox>ul>li");
for(var mc of mcu){
  mc.onmouseenter=function(){
	this.style.background=`rgba(${color()},${color()},${color()},.5)`;
  }
  mc.onmouseleave=function(){
	this.style.background="#1296db";
  }
}

//轮播图
var i=0;
var size = $(".Carousel>div>img").length;
/* 动态加载轮播图的点 */
for(var j=1;j<=size;j++){
  var li="<li></li>";
  $(".Carousel>ul").append(li);
}

//核心代码
function left(){
  i--;
  if(i==-1)i=size-1;
  $(".Carousel>div>img").eq(i).show().siblings().hide();
}
//因为初始值为3，这里却是从0开始，会导致第一次点击左箭头出现类似无效的情况，调用一下回到合适位置
left();
function rigth(){
  i++;
  if(i==size)i=0;
  $(".Carousel>div>img").eq(i).show().siblings().hide();
}
/* 手动控制向左向右 */
$(".Carousel>b").on("click",function(e){
  left();
})
$(".Carousel>i").on("click",function(e){
  rigth();
})

//自动轮播
var times = setInterval(rigth,2500);

$("div.Carousel").on("mouseenter",function(){
  clearInterval(times);
});
$("div.Carousel").on("mouseleave",function(){
  times = setInterval(rigth,2500);
});