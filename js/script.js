
    const welcome = () => {
    console.log("Hello!");
}

const toggleBackground = () => {
 const body = document.querySelector(".body");
 const themeName = document.querySelector(".backgroundButton__themeName")

 body.classList.toggle("darkBody");
 themeName.innerText = body.classList.contains("darkBody") ? "jasny" : "ciemny"

};
 
const init = () => {
    const backgroundButton = document.querySelector(".backgroundButton");
    backgroundButton.addEventListener("click",toggleBackground)



};
init();