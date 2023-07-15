   
  var mySwiper = new Swiper ('.swiper', {
    direction: 'vertical', // 垂直切换选项
    // loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    on:{
        init: function(){
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
          //初始化加载动画
          switch (this.activeIndex) {
            case 0:
                setTimeout(function(){
                    $(".plane").css({
                        'animation': 'swing 1s linear 0s infinite'
                    })
                },500);//定时器时间是上一个动画执行时间
                break;
          }
        }, 
        slideChangeTransitionEnd: function(){ 
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
          //滑动后执行动画
          switch (this.activeIndex) {
            case 0:
                setTimeout(function(){
                    $(".plane").css({
                        'animation': 'swing 1s linear 0s infinite'
                    })
                },500);//定时器时间是上一个动画执行时间
                break;
          }
        },
      }
  })     
    //  自己写的
  $(document).ready(function(){
    //   music
    var toggle = true;
    $("#music_btn").click(function(){
        if(toggle){
            $("#music_btn").attr("src","images/yyan2.png");
            toggle=false;
        }else{
            $("#music_btn").attr("src","images/yyan.png");
            toggle=true;
        }
    });
    // 点击plane消失
    $(".plane").click(function(){
        $(".plane").fadeOut();
    })

    

    


  });

