$(function(){
 
  const $pagination = $('.visual>.visual-pagination > li > a');
  const $container = $('.visual-container');

  let nowIdx = 0;
  let interValKey = 0;

  const moveFn = function(){ $pagination.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');


  $container.stop().animate({
    left : -1600 * nowIdx
  });};
  

  $pagination.on('click',function(evt){
    evt.preventDefault();

    nowIdx = $pagination.index(this);

    $pagination.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

    $container.stop().animate({
      left : -1600 * nowIdx
    });
  });

  
   //메뉴-1
   $(' .menu > p:nth-child(1)>a').on('click',(evt)=>{
    
    evt.preventDefault();
    $('html,body').stop().animate({
      scrollTop:0
    });
  });
  //메뉴-2
  $(' .menu > p:nth-child(2)>a').on('click',(evt)=>{
    evt.preventDefault();
    $('html,body').stop().animate({
      scrollTop:100});
  });

   //메뉴-3
  $(' .menu > p:nth-child(3)>a').on('click',(evt)=>{
    evt.preventDefault();
    $('html,body').stop().animate({
      scrollTop:700
    });
  });
   //메뉴-4
  $(' .menu > p:nth-child(4)>a').on('click',(evt)=>{
    evt.preventDefault();
    $('html,body').stop().animate({
      scrollTop:1300
    });
  });
   //메뉴-5
  $(' .menu > p:nth-child(5)>a').on('click',(evt)=>{
    evt.preventDefault();
    $('html,body').stop().animate({
      scrollTop:1980
    });
    //메뉴-6
  $(' .menu > p:nth-child(6)>a').on('click',function(evt){
      evt.preventDefault();
      $('html,body').stop().animate({
        scrollTop:2400
      });
    });

  });

  $(window).on('load',function(){
    moveFn();
    interValKey = setInterval(() => {
      if(nowIdx<4){
        nowIdx++;
      }else{
        nowIdx=0;
      }
      moveFn();
    }, 3000);
  
 
  });

  

});