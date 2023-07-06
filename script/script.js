const noteContainer = document.querySelector(".note_container")
const cBtn = document.querySelector(".cbtn");
const sBtn = document.querySelector(".sbtn");
const noteBook = document.querySelectorAll(".input_box");

let showNotes = ()=>{
        noteContainer.innerHTML = localStorage.getItem("data");
}
showNotes();




let saveNotes = ()=>{
    localStorage.setItem("data",noteContainer.innerHTML);
}

cBtn.addEventListener("click",function(){
    let inputBox = document.createElement("p");
    inputBox.className = "input_box";
    inputBox.setAttribute("contenteditable","true");

    let deleteImg = document.createElement("img");
    deleteImg.src = "images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(deleteImg);
});


noteContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    }
});

sBtn.addEventListener("click",function(){
    saveNotes();
});