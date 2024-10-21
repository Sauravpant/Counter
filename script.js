const increment=document.querySelector("#increment");
const decrement=document.querySelector("#decrement");
const reset=document.querySelector("#reset");
const screen=document.querySelector(".screen")

let counter=0;

increment.addEventListener("click",() => {
    counter++;
    screen.innerHTML=counter;

})


decrement.addEventListener("click",() => {
    counter--;
    screen.innerHTML=counter;
    
})


reset.addEventListener("click",() => {
    counter=0;
    screen.innerHTML=counter;
    
})