//main-src.js Simon Game
var bStartFlag=false;
var myoffDelay=0;
var myonDelay=0;
$(document).ready(function(){



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
  $(".on").click(function(){
    onProcedure();
    clearInterval(myoffDelay);
  });

});
function initSimon(){

}
function onProcedure(){
  myonDelay=setInterval(function(){
  console.log("pass");
    $(".green").addClass("greeninit");
    $(".red").addClass("redinit");
    $(".bluu").addClass("bluuinit");
    $(".yellow").addClass("yellowinit");
    clearInterval(myoffDelay);
    },1000);

  myoffDelay=setInterval(function(){
    $(".green").removeClass("greeninit");
    $(".red").removeClass("redinit");
    $(".bluu").removeClass("bluuinit");
    $(".yellow").removeClass("yellowinit");
    clearInterval(myonDelay);
  },2000);


}
function strictSimon(){

}
