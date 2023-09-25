const mainDiv = document.querySelector(".main")

window.addEventListener("scroll",()=>{
if(window.scrollY >= 131){
    console.log(window.scrollY);
    let Div = document.createElement("div")
    mainDiv.appendChild(Div)
    Div.classList.add("innerbox")
    Div.textContent="Content"
}else if(window.scrollY <= 0){
    mainDiv.removeChild(mainDiv.lastChild)
}
})