class buttonEvents{
    previousImage(event){
        event.preventDefault();
        console.log("hello");   
    }
}
const backButton = document.getElementById("leftButton")
if(backButton){
    backButton.addEventListener("click", buttonEvents.previousImage);
}