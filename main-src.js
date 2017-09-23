//main-src.js Simon Game
var bStartFlag=false;
var myoffDelay=0;
var green_t,red_t,blue_t,yellow_t=0;
$(document).ready(function(){
var i=0;


  $(".green").click(function(){

  });
  $(".red").click(function(){

  });
  $(".bluu").click(function(){

  });
  $(".yellow").click(function(){

  });
  $(".power").click(function(){
    if(bStartFlag==false){
      console.log("on");
      $(".pslide").css("margin-left","25px");
      bStartFlag=true;
    }else{
      console.log("off");
      $(".pslide").css("margin-left","0px");
      bStartFlag=false;
    }

  });
  //-------------------------------------
  $(".power").click(function(){
  onProcedure();

  });

  $(".on").click(function(){
    i++;
    lightOnTime(i);
    if(i>=4)
    i=0;

  });

});
function initSimon(){

}
function onProcedure(){
  console.log("pass");
    $(".green").addClass("greeninit");
    $(".red").addClass("redinit");
    $(".bluu").addClass("bluuinit");
    $(".yellow").addClass("yellowinit");
  myoffDelay=setInterval(function(){
    console.log("off--------");
    $(".green").removeClass("greeninit");
    $(".red").removeClass("redinit");
    $(".bluu").removeClass("bluuinit");
    $(".yellow").removeClass("yellowinit");
    clearInterval(myoffDelay);
  },2000);
}
function strictSimon(){

}
function lightOnTime(colorNum){
  if(colorNum==1)$(".green").addClass("greeninit");green_t=setInterval(function(){$(".green").removeClass("greeninit");clearInterval(green_t);},4000);
  if(colorNum==2)$(".red").addClass("redinit");red_t=setInterval(function(){$(".red").removeClass("redinit");clearInterval(red_t);},4000);
  if(colorNum==3)$(".bluu").addClass("bluuinit");bluu_t=setInterval(function(){$(".bluu").removeClass("bluuinit");clearInterval(bluu_t);},4000);
  if(colorNum==4)$(".yellow").addClass("yellowinit");yellow_t=setInterval(function(){$(".yellow").removeClass("yellowinit");clearInterval(yellow_t);},4000);
}
