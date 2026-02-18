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
var bookinput = document.querySelector("#bookinput")
var authorinput = document.querySelector("#authorinput")
var discription = document.querySelector("#discription")



add.addEventListener("click", function() {

    var book = document.createElement("div");
    book.setAttribute("class","book");

    var count = 0;
    if (bookinput.value === "")count++;
    if (authorinput.value === "")count++;
    if (discription.value === "")count++; 

    if(count>1) {
     document.getElementById("error").style.display = "block"
     document.getElementById("error").innerHTML = "Fill EveryThing"
     return ;
    }
    
    if (count === 1) {
     if (bookinput.value === "") {
          
          document.getElementById("error").style.display = "block"
          document.getElementById("error").innerHTML = "Fill The Tittle"
     }
      else if (authorinput.value === "") {
          document.getElementById("error").style.display = "block"
          document.getElementById("error").innerHTML = "Fill The Author Name"
      }
      else if (discription.value === "") {
          document.getElementById("error").style.display = "block"
          document.getElementById("error").innerHTML = "Fill The Discription"
      }
      return ;
    }
    
    
     book.innerHTML = `
     <h2>${bookinput.value}</h2>
     <h5>${authorinput.value}</h5>
     <p>${discription.value}</p>
     <button onclick ="deleteitem(event)">delete</button>
      `;
     container.appendChild(book);

     popup.style.display = "none"
     overlay.style.display = "none"

     bookinput.value = "";
     authorinput.value = "";
     discription.value ="";
      document.getElementById("error").style.display = "none"



})

function deleteitem(event) {
     event.target.parentElement.remove()
}
 

