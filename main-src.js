//main-src.js Simon Game
var bStartFlag=false;
var bStrictMode=false;
var bFailed=false;
var myoffDelay=0;
var green_t,red_t,blue_t,yellow_t=0;
var simonSayArr=[];
var userConfirmArr=[];
var userTempArr=[];
var step=0;
var i=0;
$(document).ready(function(){
//var i=0;
  $(".green").click(function(){
    if(bStartFlag==true){
    userConfirmArr.push(1);
    console.log(userConfirmArr+"userConfirmArr");
    console.log(simonSayArr+"simonSayArr");
    $("#gsound")[0].play();
      if(simonSayArr.length==userConfirmArr.length){
      simonThinking(simonSayArr,userConfirmArr);
    }
  }
  });
  $(".red").click(function(){
    if(bStartFlag==true){
    userConfirmArr.push(2);
    console.log(userConfirmArr+"userConfirmArr");
    console.log(simonSayArr+"simonSayArr");
    $("#rsound")[0].play();
      if(simonSayArr.length==userConfirmArr.length){
      simonThinking(simonSayArr,userConfirmArr);
    }
  }
  });
  $(".bluu").click(function(){
    if(bStartFlag==true){
    userConfirmArr.push(3);
    console.log(userConfirmArr+"userConfirmArr");
    console.log(simonSayArr+"simonSayArr");
    $("#bsound")[0].play();
      if(simonSayArr.length==userConfirmArr.length){
      simonThinking(simonSayArr,userConfirmArr);
    }
  }
  });
  $(".yellow").click(function(){
    if(bStartFlag==true){
    userConfirmArr.push(4);
    console.log(userConfirmArr+"userConfirmArr");
    console.log(simonSayArr+"simonSayArr");
    $("#ysound")[0].play();
    if(simonSayArr.length==userConfirmArr.length){
      simonThinking(simonSayArr,userConfirmArr);
    }
  }
  });
  $(".power").click(function(){
    if(bStartFlag==false){
      console.log("on");
      onProcedure();
      $(".pslide").css("margin-left","25px");
      $(".score").text(step);
      $(".operation_area").addClass("active_display");
      $(".score").css("background-color","#833");
      $(".score").text("0");
      $(".score").css("color","#f55");
      bStartFlag=true;
    }else{
      console.log("off");
      $(".pslide").css("margin-left","0px");
      $(".operation_area").removeClass("active_display");
      $(".score").css("background-color","#511");
      $(".score").text("0");
      $(".score").css("color","#511");
      bStartFlag=false;
    }
  });
  //-------------------------------------
  $(".on").click(function(){
    if(bStartFlag==true){
      simonSayArr=[];
      userConfirmArr=[];
      userTempArr=[];
      step=0;

  var X= Math.floor(Math.random() * (4 - 1)) + 1;
  step++;
  $(".score").text(step);
  simonSayArr.push(X);
  //lightOnTime(X);
  console.log(simonSayArr);
  initSimon();
  i=0;
  }
  });

  $(".strict").click(function(){
    if(bStartFlag==true){
        if(bStrictMode==false){
          bStrictMode=true;
          $(".strict").addClass("strictmodeactive");

          }else{
          $(".strict").removeClass("strictmodeactive");
          bStrictMode=false;
        }
    }
  });
});

function initSimon(){
setTimeout(function(){
  lightOnTime(simonSayArr[i]);
  i=i+1;
  if (i<=simonSayArr.lenght-1)simonSayArr[i];i;setTimeout(initSimon(),i*"100");
},i*"1500");
}

function onProcedure(){
  console.log("on------");

    $("#gsound")[0].play();
    $("#bsound")[0].play();
  myoffDelay=setInterval(function(){
    console.log("off------");
    clearInterval(myoffDelay);
    myoffDelay=0;
  },2000);
}
function strictSimon(){

}
function lightOnTime(colorNum){
  if(colorNum==1){
    $(".green").addClass("greeninit");
    green_t=setInterval(function(){$(".green").removeClass("greeninit");clearInterval(green_t);},1000);
    $("#gsound")[0].play();
  }
  if(colorNum==2){
    $(".red").addClass("redinit");
    red_t=setInterval(function(){$(".red").removeClass("redinit");clearInterval(red_t);},1000);
    $("#rsound")[0].play();
  }
  if(colorNum==3){
    $(".bluu").addClass("bluuinit");
    bluu_t=setInterval(function(){$(".bluu").removeClass("bluuinit");clearInterval(bluu_t);},1000);
    $("#bsound")[0].play();
  }
  if(colorNum==4){
    $(".yellow").addClass("yellowinit");
    yellow_t=setInterval(function(){$(".yellow").removeClass("yellowinit");clearInterval(yellow_t);},1000);
    $("#ysound")[0].play();
  }
}
function simonThinking(arr1,arr2){
  // Same, same; but different.
var bSame = arr1.filter(function(value){
	for (var i=0; i<arr2.length; i++)
	{
	  if ( arr2[i] != arr1[i] )
	   return false;
	}
	return true;
	});
      if(bSame==false){
        $("#GTA_fail")[0].play();
        $(".green").addClass("greeninit");
        $(".red").addClass("redinit");
        $(".bluu").addClass("bluuinit");
        $(".yellow").addClass("yellowinit");
      myoffDelay=setInterval(function(){
        console.log("off------");
        $(".green").removeClass("greeninit");
        $(".red").removeClass("redinit");
        $(".bluu").removeClass("bluuinit");
        $(".yellow").removeClass("yellowinit");
        clearInterval(myoffDelay);
        myoffDelay=0;
      },100);
      if (bStrictMode==true){
        simonSayArr=[];
        userConfirmArr=[];
        step=1;
      }
  
      if(bFailed==false)
      step--;
      $(".score").text(step);
      userConfirmArr=[];
      bFailed=true;
      var zalupa=setInterval(function(){
        i=0;
        step;
        if(bStrictMode==true){
          prepareSimon();
        }else{
          initSimon();
        }
        clearInterval(zalupa);},1000);
    }else{
          userConfirmArr=[];
          bFailed=false;
          prepareSimon();
    }
  //   }
  console.log(bStrictMode+"strict ACTIVE");

}
function prepareSimon(){
var X= Math.floor(Math.random() * (4 - 1)) + 1;
step++;
$(".score").text(step);
simonSayArr.push(X);
//lightOnTime(X);
console.log(simonSayArr);
initSimon();
i=0;
}
