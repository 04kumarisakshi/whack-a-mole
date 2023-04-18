const Mole1 =document.getElementById("Mole1");
const Mole2 =document.getElementById("Mole2");
const Mole3 =document.getElementById("Mole3");
const Mole4 =document.getElementById("Mole4");
const Mole5 =document.getElementById("Mole5");
const Mole6 =document.getElementById("Mole6");
const Mole7 =document.getElementById("Mole7");
const Mole8 =document.getElementById("Mole8");
const Mole9 =document.getElementById("Mole9");
var score = document.getElementById("score");
var count = 0;

setInterval(() => {
     var random =(Math.floor(Math.random()*9)+1)
     var Mole ="Mole"+random
     var mole =eval(Mole)
      mole.classList.add("animate")
      setTimeout(function(){
        mole.classList.remove("animate")
      },7000)
      mole.onclick=function(){
        count++
        scoredisplay.innerHTML=count
    }
},1000)

setInterval(function(){
    if(count > 4){
        youWin.style.display = "block";
        game.style.display = "none"
       
    }
},10)