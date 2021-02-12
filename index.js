var increaseBtn = document.querySelector("#increase");

var decreaseBtn = document.querySelector("#decrease");

let clickerCount = 0;

var displayCount = document.querySelector("#count");

increaseBtn.addEventListener("click",function(){
  clickerCount+=1;
  displayCount.innerHTML = clickerCount;
});

decreaseBtn.addEventListener("click",function(){
  clickerCount-=1;
  displayCount.innerHTML = clickerCount;
});
