let createbtn = document.getElementById("btn")
let notes = document.querySelectorAll(".input-box")
let notesContainer = document.querySelector(".notes-container")

function showContent(){
    notesContainer.innerHTML = localStorage.getItem("content")
}
showContent();

function updateLocalStorage(){
    localStorage.setItem("content", notesContainer.innerHTML)
}

createbtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p")
    inputBox.className = "input-box"
    let img = document.createElement("img")
    img.src = "images/delete.png"
    inputBox.setAttribute("contenteditable", "true")
    notesContainer.appendChild(inputBox).appendChild(img);

})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateLocalStorage();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyUp = function(){
                updateLocalStorage();
            }
        });
    }
})

document.addEventListener("keydown", event =>{
    if(event.key == "Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault();
        
    }
})


