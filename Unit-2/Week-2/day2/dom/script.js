    //set timeout are carry a two things function and delay.
    //delay are work on milisecond.  1second = 1000 milisecond
    // console.log("Task-1")
    // setTimeout(function(){
    //     console.log("Task-2")

    // },5000)
    // console.log("Task-3")

// let i=0
// let a=setInterval(function(){
//     i++
//   console.log(i)
//   if(i==5){
//     clearInterval(a)
//   }
// },2000)
//     console.log("Task-3")

// let i=0
// let a=setInterval(function(){
//     i++
//   console.log(i)
//   if(i==60){
//     clearInterval(a)
//     console.log("1min is complete")

//   }
// },1000)
//     console.log("task-03")
let hour=document.getElementById("hour")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
let btn=document.getElementById("btn")
let btn1=document.getElementById("btn1")

let timer=null;
btn.addEventListener("click",function(){
let h=0
let m=0
let s=0

  timer=setInterval(function(){
s++
// sec.innerText=s
if(s==10){
    m++
    min.innerText=m
    s=0
}
if(m==5){
    h++
    hour.innerText=h
    m=0
}
sec.innerText=s
},1000)


})

btn1.addEventListener("click",function(){
    alert("stop")
    clearInterval(timer)
})

