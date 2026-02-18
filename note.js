var overlay = document.querySelector(".overlay")
var popup = document.querySelector(".popup")
var cancel = document.getElementById("cancel")
var add = document.getElementById("add")
var addbutton = document.getElementById("addbutton")

addbutton.addEventListener("click", function() {
     popup.style.display = "block"
     overlay.style.display = "block"
})

cancel.addEventListener ("click", function() {
     popup.style.display = "none"
     overlay.style.display = "none"
     document.getElementById("error").style.display = "none"

})

var container = document.querySelector(".container")
var title = document.querySelector("#titleinput")
var discription = document.querySelector("#discription")



add.addEventListener("click", function() {

    var note = document.createElement("div");
    note.setAttribute("class","note");

    var count = 0;
    if (title.value === "")count++;
    if (discription.value === "")count++; 

    if(count>1) {
     document.getElementById("error").style.display = "block"
     document.getElementById("error").innerHTML = "Fill EveryThing"
     return ;
    }
    
    if (count === 1) {
     if (title.value === "") {
          document.getElementById("error").style.display = "block"
          document.getElementById("error").innerHTML = "Fill The Tittle"
     }else if (discription.value === "") {
          document.getElementById("error").style.display = "block"
          document.getElementById("error").innerHTML = "Fill The Discription"
      }
      return ;
    }
    
    
     note.innerHTML = `
     <h2>${title.value}</h2>
     <p>${discription.value}</p>
     <button onclick ="deleteitem(event)">delete</button>
      `;
     container.appendChild(note);

     popup.style.display = "none"
     overlay.style.display = "none"

     title.value = "";
     discription.value ="";
      document.getElementById("error").style.display = "none"



})

function deleteitem(event) {
     event.target.parentElement.remove()
}