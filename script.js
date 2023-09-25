const mainDiv = document.querySelector(".main")

window.addEventListener("scroll",()=>{
    console.log(window.scrollY);
if(window.scrollY >= 146 ){
    let Div = document.createElement("div")
    mainDiv.appendChild(Div)
    Div.classList.add("innerbox")
    Div.textContent="Content"
}else if(window.scrollY <= 0){
    mainDiv.removeChild(mainDiv.lastChild)
}
})