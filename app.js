//? declerations
const button=document.querySelector(".button");
const body=document.querySelector("body");



//? button on mous over do:

button.addEventListener("mouseover",()=>{
    button.classList.add("button-over")
})
button.addEventListener("mouseout", ()=>{
    button.classList.add("button-out")
})

//? button on click do: 
button.addEventListener("click",()=>{
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
body.style.background=`rgb(${red},${green},${blue})`
})

