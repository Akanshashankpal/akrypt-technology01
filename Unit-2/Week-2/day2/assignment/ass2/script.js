
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let timer = null;
function startTimer() {
    let s = 0;
    let m = 0;
    let h = 0;
    timer = setInterval(function () {
        s++;
        if (s == 10) {
            m++;
            min.innerText = m;
            s = 0;
        }
        if (m ==5) {
            h++;
           
            hour.innerText = h
            m = 0;
        }
        sec.innerText=s
    }, 1000)
}


function pauseTimer() {
    clearInterval(timer)

}


function resetTimer() {
clearInterval(timer)
let s=0
let m=0
let h=0
sec.innerText=s
min.innerText = m;
hour.innerText = h

}


