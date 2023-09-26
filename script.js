const mainDiv = document.querySelector(".main")
const lastdiv = document.querySelector(".lastbox")

window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
if(window.scrollY >= 140 ){
    lastdiv.style.right = "0%"
}else if(window.scrollY <= 0){
    lastdiv.style.right = "100%"
}
})