
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let s = 0;
    let m = 0;
    let h = 0;
let timer = null;
function startTimer() {
    
    timer = setInterval(function () {
        s++;
        (s<10) ? sec.innerText = `0${s}`:sec.innerText = s
        
        if (s == 15) {
            m++;
            (m<10 )? min.innerText = `0${m}`:min.innerText = m;
            
            s = 0;
        }
        

        if (m == 5) {
            h++;
            (h<10 )? hour.innerText = `0${h}`:hour.innerText = h;
           
            m = 0;
        }
       
    }, 1000)
}


function pauseTimer() {
    clearInterval(timer)

}


function resetTimer() {
    clearInterval(timer)
     s = 0
     m = 0
     h = 0
    sec.innerText = "00"
    min.innerText = "00"
    hour.innerText = "00"

}


