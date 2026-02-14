function update() {
    
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var option = document.getElementsByName("gender")
    var gender = "";

    for ( var i = 0 ; i < option.length ; i++) {
        if (option[i].checked) {
            gender = option[i].value
        }
    }

    var course = document.getElementById("course").value
    var email = document.getElementById("email").value

    var count = 0;
    if(name === "")count++;
     if(age ===  "")count++;
      if(gender === "")count++;
       if(course === "")count++;
        if(email === "")count++;

        if(count>1) {
            document.getElementById("error").innerHTML = "Fill EveryThing"
            return;
        }

      if(count === 1) {
     
    if ( name === "" ) {
        document.getElementById("error").innerHTML = "Fill The Name"
       inputshake(document.getElementById("name"))
    } 

    else if ( age === "" ) {
        document.getElementById("error").innerHTML = "Fill The Age"
       inputshake(document.getElementById("age"))
    } 
    else if ( gender === "" ) {
        document.getElementById("error").innerHTML = "Select Gender"
       
    } 
    else if ( course === "" ) {
        document.getElementById("error").innerHTML = "Select Course"
       
    } 
    else if ( email === "") {
        document.getElementById("error").innerHTML = "Fill The E-Mail"
       inputshake(document.getElementById("email"))
    }
    return;
}
    
     document.querySelector(".outputform").style.display = "block"

    

    var row = document.createElement("tr")
    row.innerHTML = `
         <td>${name}</td>
         <td>${age}</td>
         <td>${gender}</td>
         <td>${course}</td>
         <td>${email}</td>
         <td><button type="button" onclick="deleteitem(event)">delete</button></td>
     `;

     document.getElementById("outputprint").appendChild(row)

     document.getElementById("reset").reset()
    
}

function inputshake(element) {
    element.classList.add("shake");
    setTimeout(function () {
        element.classList.remove("shake")
    }, 400);

}

function deleteitem(event) {
    event.target.parentElement.parentElement.remove();
    var hide = document.getElementById("outputprint")
    if (hide.children.length === 0 ) {
         document.querySelector(".outputform").style.display = "none";
    }
}


