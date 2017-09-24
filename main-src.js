//main-src.js Simon Game
var bStartFlag=false;
var myoffDelay=0;
var green_t,red_t,blue_t,yellow_t=0;
var simonSayArr=[];
var userConfirmArr=[0];
var step=0;
var i=0;
$(document).ready(function(){
//var i=0;
//if(bStartFlag==true){
  $(".green").click(function(){
    userConfirmArr.push(1);
    simonThinking(simonSayArr,userConfirmArr);
  });
  $(".red").click(function(){
    userConfirmArr.push(2);
    simonThinking(simonSayArr,userConfirmArr);
  });
  $(".bluu").click(function(){
    userConfirmArr.push(3);
    simonThinking(simonSayArr,userConfirmArr);
  });
  $(".yellow").click(function(){
    userConfirmArr.push(4);
    simonThinking(simonSayArr,userConfirmArr);
  });

//}
  $(".power").click(function(){
    if(bStartFlag==false){
      console.log("on");
      onProcedure();
      $(".pslide").css("margin-left","25px");
      $(".score").text(step);
      bStartFlag=true;
    }else{
      console.log("off");
      $(".pslide").css("margin-left","0px");
      bStartFlag=false;
    }
  });
  //-------------------------------------
  $(".on").click(function(){
  var X= Math.floor(Math.random() * (4 - 1)) + 1;
  step++;
  $(".score").text(step);
  simonSayArr.push(X);
  //lightOnTime(X);
  console.log(simonSayArr);
  f();
  i=0;
  });

});

var f=function initSimon(){
setTimeout(function(){
  lightOnTime(simonSayArr[i]);
  i=i+1;
  if (i<=simonSayArr.lenght-1)simonSayArr[i];i;setTimeout(initSimon(),i*i*"100");
},i*i*"800");

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
    myoffDelay=0;
  },2000);
}
function strictSimon(){

}
function lightOnTime(colorNum){
  if(colorNum==1)$(".green").addClass("greeninit");green_t=setInterval(function(){$(".green").removeClass("greeninit");clearInterval(green_t);},2000);
  if(colorNum==2)$(".red").addClass("redinit");red_t=setInterval(function(){$(".red").removeClass("redinit");clearInterval(red_t);},2000);
  if(colorNum==3)$(".bluu").addClass("bluuinit");bluu_t=setInterval(function(){$(".bluu").removeClass("bluuinit");clearInterval(bluu_t);},2000);
  if(colorNum==4)$(".yellow").addClass("yellowinit");yellow_t=setInterval(function(){$(".yellow").removeClass("yellowinit");clearInterval(yellow_t);},2000);
}
function simonThinking(arr1,arr2){
  a=arr1[step];
  b=arr2[step];
  a=parseInt(a);
  b=parseInt(b);
  if(a==b){
    console.log(a+"  "+b+"bingo"+step);
    console.log(typeof(a)+"  "+typeof(b)+"bingo"+typeof(step));
  }else{
    console.log(a+"  "+b+"---------"+step);
    console.log(typeof(a)+"  "+typeof(b)+"---------"+typeof(step));
    lightOnTime(1);
    lightOnTime(2);
    lightOnTime(3);
    lightOnTime(4);
  }



}
