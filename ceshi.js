var jindutiao = document.querySelectorAll(".jindutiao");
const animationVars = {
  showArrow2: true,
  showArrow3: true,
  showArrow4: true,
  showArrow5: true,
  showPaper: true
}
var mySwiper = new Swiper ('.swiper', {
    direction: 'vertical', // 垂直切换选项
    noSwipingSelector:'div',
    // loop: true, // 循环模式选项
    effect: 'fade',
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

});
// 音乐图标切换
var toggle = false;
var music = document.getElementById("bg-music");//获取ID   
$("#music_btn").attr("src","images/yyan.png");
music.play();
$("#music_btn").click(function(){
    if(toggle){
      console.log(toggle);
        $("#music_btn").attr("src","images/yyan2.png");
        toggle=false;
        music.play();
    }else{
        $("#music_btn").attr("src","images/yyan.png");
        toggle=true;
        music.pause();
    }
  })
// 首页字体依次出现
var str="低碳生活 绿色出行";
// 向名为word的div添加指定字数个span标签，方便操作
for (var i=0; i<str.length; i++){
    // 添加str的长度个span，每一个span里面保存着一个文字
        $("#word").append("<span>" + str[i] + "</span>");
}
var j = 0;  // 用于计数
setTimeout(textcar,1000);
function textcar() {
  $("#word>span").eq(j).css("opacity","1");
  console.log(j);
  j += 1;
  if(j>=4){
      var t = setTimeout(textcar, 400);
  }
  else{
      var t = setTimeout(textcar, 400);
  }
  if (j >= str.length){
      clearTimeout(t);  // 清除延时动作，退出递归
  }
}
// 首页绿色家园标题位置
var header1 = document.querySelector(".header1");
var header2 = document.querySelector(".header2");
var header = document.querySelector(".header");
var yuansu2 = document.querySelector(".yuansu2");
var shouye_biaoti2 = window.screen.height*0.1295555555555556;
header.style.top = shouye_biaoti2+"px";

var shouye_biaoti = window.screen.height*0.0995555555555556;
header1.style.top = header2.offsetWidth*0.55+"px";
header1.style.left = (window.screen.width-header1.offsetWidth)/2+"px"

yuansu2.style.top = header2.offsetWidth/3+"px";
// 首页点击探索切换页面
$(".page1tishi").click(function(){
  mySwiper.slideToLoop(1,1000,false);
  music.play();
  $("#music_btn").attr("src","images/yyan2.png");
})
// 返回按钮
$('.btn4').click(function(){
  isInKeting = false;
  isInCesuo = false
  changeCesuoStatus();
  changeketingStatus();
  mySwiper.slideToLoop(3,1000,false);
 })
// 点击大门切换对话
$(".page2 .door").click(function(){
  $(".box .logo").css("opacity","0");
  // $(".door").css("opacity","0");
  mySwiper.slideToLoop(2,1000,false);
  dooraudio = document.getElementById("dooraudio");
  dooraudio.play();
})

 // 点击提示开始自动对话
 $(".tishibg").click(function(){
  $(".mamatext").css("opacity","1");
  $(".p1").css("opacity","1");
  $(".tishibg").css("z-index","-2");
  setTimeout(duihua1,1500);
  setTimeout(duihua2,3500);
  setTimeout(duihua3,4500);
  setTimeout(duihua4,6000);
  function duihua1(){
   $(".haizitext,.p3").css("opacity","1");
  }
  // console.log(clickNumber)
  function duihua2(){
   $(".mom>p").eq(0).css("opacity","0");
   $(".mom>p").eq(1).css("opacity","1");
  }

  function duihua3(){
   $(".p3").css("opacity","0");
   $(".p4").css("opacity","1");
  }
  function duihua4(){
   $(".people").css("opacity","0");
   // $(".haizi").css("opacity","0");
   $(".tishijiantou").css("opacity","1");
   mySwiper.slideToLoop(3,1000,false);
  }
 })
// 提示点击场景
function tishiclickchanjin(){
  $(".tishiclickchanjin").css({"opacity":"1","z-index":"999"});
}
// 隐藏提示点击
function hideclick(){
  $(".tishiclickchanjin").css({"opacity":"0","z-index":"-1"});
}
//每个房间探索完成显示五秒后返回
function FiveReturns(){
    mySwiper.slideToLoop(3,1000,false);
    woshifalse();
    ketingfalse();
 }
//  选择房间swpier
 var swiper2 = new Swiper(".yearSwiper", {
  // effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  // slidesPerView: 'auto',
  // coverflowEffect: {
  //   rotate: 0,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 2,
  //   slideShadows: true,
  // },
  // 这个属性地问题
  // loop:true,
});
$(".tishiclickchanjin").click(function(){
  mySwiper.slideToLoop(5,1000,false);
  abc();
})
var jiantouclick=0;
function abc(){
  jiantouclick++;
  if(jiantouclick==1){
    document.getElementById("fangzi2-woshi").style.overflowX= "hidden";
  }
  else{
    document.getElementById("fangzi2-woshi").style.overflowX= "scroll";
  }
}
// 选择房间切换背景
var page4 = document.querySelector(".page4");
swiper2.on('slideChange', function () {
  console.log('slide changed' + swiper2.activeIndex);
  var page44 = document.querySelector(".page44");
  var imgIndex = swiper2.activeIndex;
  if(imgIndex==2){
    $(".tishiclickchanjin").click(function(){
      mySwiper.slideToLoop(7,1000,false);
    })
    if(cesuo1==1){
      tishiclickchanjin();
      console.log(666);
      chufan1();
    } 
    else{
      hideclick();
    }
    // var style=document.createElement('style');
    // style.innerHTML=".page4::before{background:url(images/厨房/厨房1.png)}";
    // page44.src = "images/厨房/厨房1.png";
    // page4.classList.add("page5");
    // document.head.appendChild(style);
    var style = document.createElement("style");
    document.head.appendChild(style);
    sheet = style.sheet;
    // sheet.addRule('.red::before', 'color: green'); // 兼容IE浏览器
    sheet.insertRule('.page4::before { background: url(images/厨房/厨房1.png);background-size:cover }', 0);
    console.log(imgIndex+"111");
  }
  if(imgIndex==0){
    $(".tishiclickchanjin").click(function(){
      mySwiper.slideToLoop(5,1000,false);
    })
    if(animationVars.showArrow3 || animationVars.showArrow4 ){
      tishiclickchanjin();
    }
    else{
      hideclick();
    }
    // var style=document.createElement('style');
    // style.innerHTML=".page4::before{background:url(images/卧室/光晕卧室.png)}";
    // page4.classList.add("page5");
    // document.head.appendChild(style);
    var style = document.createElement("style");
    document.head.appendChild(style);
    sheet = style.sheet;
    // sheet.addRule('.red::before', 'color: green'); // 兼容IE浏览器
    sheet.insertRule('.page4::before { background: url(images/卧室/光晕卧室.png);background-size:cover }', 0);
    console.log(imgIndex+"111");
  }
  if(imgIndex==1){
    $(".tishiclickchanjin").click(function(){
      mySwiper.slideToLoop(4,1000,false);
      isInCesuo = true;
      changeCesuoStatus();
    })
    if(woshi==1){
      tishiclickchanjin();
      console.log(woshi);
      cesuo();
    }
    else{
      hideclick();
    }
    // var mydivBefore=window.getComputedStyle(page4,'::before');
    // mydivBefore.innerHTML = "background:url(images/卫生间/卫生间.jpeg"
    // var style=document.createElement('style');
    // style.innerHTML=".page4::before{background:url(images/卫生间/卫生间.jpeg)}";
    // page44.src = "images/卫生间/卫生间.jpeg";
    // // page4.classList.add("page5");
    // document.head.appendChild(style);
    // console.log(imgIndex+"111");
    var style = document.createElement("style");
    document.head.appendChild(style);
    sheet = style.sheet;
    // sheet.addRule('.red::before', 'color: green'); // 兼容IE浏览器
    sheet.insertRule('.page4::before { background: url(images/卫生间/卫生间.jpeg);background-size:cover }', 0); // 支持非IE的现代浏览器
  }
  if(imgIndex==3){
    $(".tishiclickchanjin").click(function(){
      mySwiper.slideToLoop(6,1000,false);
      isInKeting = true;
      console.log("32.2");
      changeketingStatus(); 
    })
    if(chufan==1){
      tishiclickchanjin();
      keting1();
    }
    else{
      hideclick();
    }
    // var style=document.createElement('style');
    // style.innerHTML=".page4::before{background:url(images/客厅/客厅1.png)}";
    // page44.src = "images/客厅/客厅1.png";
    // page4.classList.add("page5");
    // document.head.appendChild(style);
    var style = document.createElement("style");
    document.head.appendChild(style);
    sheet = style.sheet;
    // sheet.addRule('.red::before', 'color: green'); // 兼容IE浏览器
    sheet.insertRule('.page4::before { background: url(images/客厅/客厅1.png);background-size:cover }', 0);
    console.log(imgIndex+"111");
  }
});


 console.log(mySwiper.activeIndex);
//点击房间进入
 var cesuo1,woshi,keting=0,chufan;
 var isInCesuo = false;
 var watermp3 = document.getElementById("shuidimp3");
var toggle1;
function changeCesuoStatus() {
  if(isInCesuo){
    if($('.water').css('opacity') == 1){
      watermp3.play();
    }
    else{
       watermp3.pause();
    }
  } else{
    watermp3.pause();
  }
}
function cesuo(){
  $('.cesuo').click(function(){
    isInCesuo = true
    changeCesuoStatus()
    mySwiper.slideToLoop(4,1000,false);
     // 提示箭头
    if(mySwiper.activeIndex==4){
      if(animationVars.showArrow2){
        document.getElementById("shuidimp3").play();
        // shuidi_toggle = false;
        animationVars.showArrow2 = false;
      }
    }
  })
}
$('.woshi').click(function(){
  jiantouclick++
  abc();
  console.log("sjhg")
    mySwiper.slideToLoop(5,1000,false);
    $(".tansuotext").css("opacity","0");
})
var isInKeting = false;
var myvediomp3 = document.getElementById("myVedio");
function changeketingStatus() {
 if(isInKeting){
   if($('#myVedio').css('opacity') == 1){
     myvediomp3.play();
   }
   else{
    myvediomp3.pause();
   }
 } else{
  myvediomp3.pause();
 }
}
function keting1(){
  $('.keting1').click(function(){
    isInKeting = true
    changeketingStatus()
    mySwiper.slideToLoop(6,1000,false);
    keting += 1;
    // console.log(keting);
    if(keting==1){
      console.log(mySwiper.activeIndex);
      if(mySwiper.activeIndex==6){
        document.getElementById("myVedio").play();
      }
    }
})
}

function chufan1(){
  $('.chufan1').click(function(){
    mySwiper.slideToLoop(7,1000,false);
  })
  $(".page2 img").click(function(){
    mySwiper.slideToLoop(3,1000,false);
    console.log(mySwiper.activeIndex);
    if(mySwiper.activeIndex==2){
      $("page3").css("background","url(/images/厨房2.jpg)");
      console.log(mySwiper.previousIndex);
    };
  })
}

// 卧室页面
var bedroom = document.querySelector(".bedroom");
var tishijiantou4 = document.querySelector(".tishijiantou4");
var woshideng = document.querySelector(".woshideng");
var paper = document.querySelector(".paper");
var tishijiantou3 = document.querySelector(".tishijiantou3");
if(paper.offsetLeft+paper.clientWidth>=bedroom.clientWidth){
  paper.style.left = bedroom.clientWidth-paper.offsetWidth-20+"px";
}
if(tishijiantou4.offsetLeft+tishijiantou4.clientWidth>=bedroom.clientWidth){
  tishijiantou4.style.left = bedroom.clientWidth-tishijiantou4.offsetWidth-50+"px";
}
var woshi_juli3 = bedroom.offsetWidth*0.2034883720930233;
woshideng.style.left = woshi_juli3+"px";

var woshi_juli4 = bedroom.offsetWidth*0.1384274640088594;
tishijiantou3.style.left = woshi_juli4+"px";
function showPaperAfterCheckBoth() {
  if(animationVars.showArrow3 || animationVars.showArrow4 ) return
  hideclick();
  document.getElementById("fangzi2-woshi").style.overflowX= "hidden";
  woshi = 1;
  woshitrue();
  $(".charactert").css({"opacity":"1","z-index":"999"});
  $(".tansuotext").css("opacity","1");
  $(".cesuo").css("filter","grayscale(0%)");
  for(i=0;i<jindutiao.length;i++){
    jindutiao[i].classList.add("jindu25");
  }
}
$(".charactert").click(function(){
  $(".tansuotext").css("opacity","0");
  document.getElementById("fanyemp3").play();
  $(".chanjintishi2").css({"opacity":"1","z-index":"999"});
  $(".tishibg3").css({"z-index":"999","opacity":"1"});
  $(".charactert").css({"opacity":"0","z-index":"-1"});
  FiveReturns();
})
//卧室点击提示消失
$(".tishibg2").click(function(){
  $(".chanjintishi").css({"opacity":"0","z-index":"-5"});
  $(".tishibg2").css({"z-index":"-2","opacity":"0"});
  $(".chanjintishi2").css({"opacity":"1","z-index":"999"});
  $(".tishibg3").css({"z-index":"999","opacity":"1"});
})
$(".tishibg3").click(function(){
  $(".chanjintishi2").css({"opacity":"0","z-index":"-1"});
  $(".tishibg3").css({"z-index":"-2","opacity":"0"});
  document.getElementById("fangzi2-woshi").style.overflowX= "scroll";
})
// 完成后返回页面左侧
var woshitansuo = document.querySelector(".woshitansuo");
var charactert = document.querySelector(".charactert");
var paper = document.querySelector(".paper")
function woshitrue(){
  var juli = paper.offsetLeft-paper.getBoundingClientRect().left;
  bedroom.style.left = juli+"px";
  charactertjuli = juli;
  charactert.style.left = charactertjuli+"px";
  woshitansuo.style.left = charactertjuli+"px";
}
function woshifalse(){
  bedroom.style.left = 0+"px";
  charactert.style.left = 0+"px";
  woshitansuo.style.left = 0+"px";
}
//卧室点击纸张
$(".paper").click(function(event){
 //实现的目的：只执行一次点击消失
  if(animationVars.showArrow4) {
     $(".paper").css("opacity","0");
     $(".tishijiantou4").css("opacity","0");
    animationVars.showArrow4 = false
    //元素都消失后显示纸张
    showPaperAfterCheckBoth()
  }
  
});
$(".woshideng").click(function(){
  $(".bedroom").attr("src","images/卧室/卧室.png");
  // eg
  if(animationVars.showArrow3) {
    $(".tishijiantou3").css("opacity","0");
    document.getElementById("dengtrue").play();
    animationVars.showArrow3 = false
    showPaperAfterCheckBoth()
  }
});
// 卫生间页面：点击水滴消失
var water = document.querySelector(".water");
var tishijiantou21 = document.querySelector(".tishijiantou21");
var cesuotansuo = document.querySelector(".cesuotansuo");
var watertext = document.querySelector(".watertext");
var weishengjian = document.querySelector(".weishengjian");
  var cesuo_juli = weishengjian.offsetWidth*0.9491385251550655;
  water.style.left = cesuo_juli-water.offsetWidth/2+"px";
  if(water.offsetleft>weishengjian.offsetWidth-water.offsetWidth){
    water.style.left = weishengjian.offsetWidth-water.offsetWidth
  }
  var cesuo_juli1 = weishengjian.offsetWidth*0.7975189524465886;
  tishijiantou21.style.left =cesuo_juli1+"px";

  var cesuo_juli2 = (window.screen.width-watertext.offsetWidth)/2;
  watertext.style.left = weishengjian.offsetWidth-watertext.offsetWidth-cesuo_juli2+"px";

  var cesuo_juli3 = (window.screen.width-cesuotansuo.offsetWidth)/2;
  cesuotansuo.style.left = weishengjian.offsetWidth-cesuotansuo.offsetWidth-cesuo_juli3+"px";
  cesuotansuo.style.marginLeft = 0+"px";

  var cesuo_top = weishengjian.offsetWidth*0.5432525951557093;
  water.style.top= cesuo_top+"px";
$(".water").click(function(){
  shuidi_toggle = true
  woshi=0;
  cesuo1=1;
  hideclick();
  $(".watertext").css({"z-index":"999","opacity":"1"});
  $(".water").css("opacity","0");
  $(".tishijiantou2-1").css("opacity","0");
  document.getElementById("shuidimp3").pause();
  document.getElementById("fangzi2-cesuo").style.overflowX= "hidden";
  $(".chufan1").css("filter","grayscale(0%)");
  $(".tansuotext").css("opacity","1");
  for(i=0;i<jindutiao.length;i++){
    jindutiao[i].classList.add("jindu50");
  }
})
$(".watertext").click(function(){
  $(".watertext").css("z-index","-999");
  $(".tansuotext").css("opacity","0");
  FiveReturns();
}); 

//厨房页面
//点击垃圾桶
$(".lajitong").click(function(){
  if(animationVars.showArrow5){
    mySwiper.slideToLoop(8,1000,false);
    animationVars.showArrow5 = false;
  }
  
  $(".tishijiantou7").css("opacity","0");
});
// 点击厨余垃圾
var lajiNunber = 0;
$(".lajiall>img").eq(2).click(function(){
  $(".textbox").css({"opacity":"1","z-index":"3"});
  $(".textbox >p").eq(0).css({"opacity":"1"});
  $(".textbox >p").eq(1).css({"opacity":"0"});
  $(".lajiall>img").eq(2).css({"transform":" translate(44vw,35vh","opacity":"0"});
  setTimeout(function () {
    $(".textbox").css({"opacity":"0","z-index":"0"});
  },750);
  lajiNunber++;
  if(lajiNunber==2){
    hideclick();
    lit();
  }

});
$(".lajiall>img").eq(1).click(function(){
  $(".textbox").css({"opacity":"1","z-index":"3"});
  $(".textbox >p").eq(0).css({"opacity":"1"});
  $(".textbox >p").eq(1).css({"opacity":"0"});
  $(".lajiall>img").eq(1).css({"transform":" translate(0px,50vh","opacity":"0"});
  setTimeout(function () {
    $(".textbox").css({"opacity":"0","z-index":"0"});
  },750);
  lajiNunber++;
  if(lajiNunber==2){
    hideclick();
    lit();
  }

});
function lit(){
  // FiveReturns();
  $(".tansuotext").css("opacity","1");
  chufan=1;
  cesuo1=0;
  $(".keting1").css("filter","grayscale(0%)");
  for(i=0;i<jindutiao.length;i++){
    jindutiao[i].classList.add("jindu75");
  }
  setTimeout(function () {
    $(".Medals").css({"opacity":"1","z-index":"999"});
    $(".fanhui").css({"opacity":"1","z-index":"999"});
  },1000);
  setTimeout(function() {
    mySwiper.slideToLoop(7,1000,false);
    document.getElementById("fangzi2-chufang").style.overflowX= "hidden";
    $(".chufangtext").css("z-index","999");
  }, 4000);
}
$(".chufangtext").click(function(){
  $(".tansuotext").css("opacity","0");
  FiveReturns();
})
// 选错的
$(".lajiall>img").eq(0).click(function(){
  $(".textbox").css({"opacity":"1","z-index":"3"});
  $(".textbox >p").eq(0).css({"opacity":"0"});
  $(".textbox >p").eq(1).css({"opacity":"1"});
  $(".lajiall>img").eq(0).css("opacity","0");
  setTimeout(function () {
    $(".textbox").css({"opacity":"0","z-index":"0"});
  },750);
  });
$(".lajiall>img").eq(3).click(function(){
  $(".textbox").css({"opacity":"1","z-index":"3"});
  $(".textbox >p").eq(0).css({"opacity":"0"});
  $(".textbox >p").eq(1).css({"opacity":"1"});
  $(".lajiall>img").eq(3).css("opacity","0");
  setTimeout(function () {
    $(".textbox").css({"opacity":"0","z-index":"0"});
  },750);
  });
// 点击正确错误音效
var x = document.getElementById("audiotrue"); 
function playAudio()
{ 
    x.play(); 
} 
var y = document.getElementById("audiotrue1"); 
function playAudio1()
{ 
    y.play(); 
} 
var z = document.getElementById("audiofalse"); 
function playAudiofalse()
{ 
    z.play(); 
} 
var qa = document.getElementById("audiofalse1"); 
function playAudiofalse1()
{ 
    qa.play(); 
} 

// 客厅页面：点击遥控关电视
var myVedio = document.querySelector("#myVedio");
var taideng = document.querySelector(".taideng");
var remote = document.querySelector(".remote");
var tishijiantou5 = document.querySelector(".tishijiantou5");
var tishijiantou6 = document.querySelector(".tishijiantou6");
var keting6 = document.querySelector(".keting");
  var keting_juli1 = keting6.offsetWidth*0.1010520487264673;
  myVedio.style.left = keting_juli1+"px";

  var keting_juli3 = keting6.offsetWidth*0.5138427464008859;
  remote.style.left =keting_juli3+"px";

  var keting_juli2 = keting6.offsetWidth*0.4377076411960133;
  taideng.style.left = keting_juli2+"px";

  var keting_juli4 = keting6.offsetWidth*0.4216500553709856;
  tishijiantou6.style.left =keting_juli4+"px";

  var keting_juli5 = keting6.offsetWidth*0.3588039867109635;
  tishijiantou5.style.left = keting_juli5+"px";

  var myVedio_width = keting6.offsetWidth*0.1973975636766334;
  myVedio.style.width = myVedio_width+"px";

  var myVedio_height = keting6.offsetWidth*0.1309161361749239;
  myVedio.style.height = myVedio_height

  var myVedio_top = keting6.offsetWidth*0.4454595791805094;
  myVedio.style.top = myVedio_top+"px";
function jindu100(){
  for(i=0;i<jindutiao.length;i++){
    jindutiao[i].classList.add("jindu100");
  }
}

function posters(){
  mySwiper.slideToLoop(9,1000,false);
}
var keti = 0
var jieyueyongdian = document.querySelector(".jieyueyongdian");
var remote = document.querySelector(".remote");
var ketingtansuo = document.querySelector(".ketingtansuo");
function ketingtrue(){
  document.getElementById("fangzi2-keting").style.overflowX= "hidden";
  hideclick();
  var juli = remote.offsetLeft-remote.getBoundingClientRect().left;
  keting6.style.left = juli+"px";
  jieyueyongdianjuli = juli;
  jieyueyongdian.style.left = jieyueyongdianjuli+"px";
  ketingtansuo.style.left = jieyueyongdianjuli+"px";
}
function ketingfalse(){
  keting6.style.left = 0+"px";
  jieyueyongdian.style.left = 0+"px";
  ketingtansuo.style.left = 0+"px";
}
$(".remote").click(function(){
    $(".remote").css({"opacity":"0","z-index0":"-1"});
    $("#myVedio").css({"opacity":"0","transition":"1.5s"});
    $(".tishijiantou6").css("opacity","0");
    keti++;
    // myveido.pause();
    // console.log(myveido.pause()); 
    $("#myVedio").get(0).pause();
    document.getElementById("videoture").play();
    $(".testimonialBox p::before").css("width","50%");
    if(keti==2){
      $(".tansuotext").css("opacity","1");
      ketingtrue();
      jindu100();
      $(".jieyueyongdian").css({"opacity":"1","z-index":"999"});
    }
  });
// 点击关灯
  $(".taideng").click(function(){
    $(".taideng").css("z-index","-1");
    $(".keting").attr("src","images/客厅/客厅.png");
    $(".tishijiantou5").css("opacity","0");
    keti++;
    document.getElementById("dengtrue2").play();
    $(".testimonialBox p::before").css("width","100%");
    if(keti==2){
      $(".tansuotext").css("opacity","1");
      ketingtrue()
      jindu100();
      $(".jieyueyongdian").css({"opacity":"1","z-index":"9999"});
    }
  });
    $(".jieyueyongdian").click(function(){
      $(".tansuotext").css("opacity","0");
      posters();
    })
// 最后海报点击刷新再来一次
$(".Onemoreround").click(function(){
  location.reload();
})