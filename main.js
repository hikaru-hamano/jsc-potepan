let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;


let status = "stop";
let interval;



function stopWatch(){
  
 milliseconds++;
 if(milliseconds / 10 == 1){
 seconds++;
 milliseconds = 0;
  
  if(seconds / 60 == 1){
    minutes++;
    seconds = 0;
    if(minutes /60 == 1){
      hours++;
      minutes = 0;
    }
   }
 }
  
  
display.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;

}

start.addEventListener("click", function(){
   interval = setInterval(stopWatch, 100);
    start.innerHTML = "スタート";
    status = "start";
   start.classList.add('inactive');  // 非活性
    stop.classList.remove('inactive');  // 活性
    reset.classList.add('inactive');   // 非活性
    
    document.getElementById("start").disabled = "true";
    document.getElementById("reset").disabled = "true";
});

if(status == "stop"){
stop.addEventListener("click", function(){
  clearInterval(interval);
  stop.innerHTML = "ストップ";
  status = "stop";
  start.classList.remove('inactive'); // 活性
    stop.classList.add('inactive');    // 非活性
    reset.classList.remove('inactive'); // 活性

    document.getElementById("start").disabled = "";   
    document.getElementById("reset").disabled = "";   

});
}

reset.addEventListener("click",function() {
     clearInterval(interval);
     stop.innerHTML = "ストップ";
  status = "stop";
  
  start.classList.remove('inactive'); // 活性
    stop.classList.add('inactive');   // 非活性
    reset.classList.add('inactive');   // 非活性
    
display.innerHTML = "0:0:0:0";
hours = 0;
minutes = 0;
seconds = 0;
milliseconds = 0;


});

