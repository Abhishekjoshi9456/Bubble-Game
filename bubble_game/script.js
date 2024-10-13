// jispe click kroge wo element par event raise hoga, or event listener na milne pr listener dhundhega, waha bhi naa milne pr event parent ke parent ke parent par listener dhundega 
document.querySelector("#panel-btm")
.addEventListener("click", function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum == hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

var hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

getNewHit();


function makeBubble(){
    var clutter = ""

 for(var i = 1; i <= 75; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
 }


document.querySelector("#panel-btm").innerHTML = clutter;
}

var timer = 60;
function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#panel-btm").innerHTML = `<h1>Game Over</h1>`;
            
        }
    }, 1000);
}

runTimer();

makeBubble();