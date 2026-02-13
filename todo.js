function update() {
    document.querySelector(".outputform").style.display = "block";

    
         
    
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;

    var genderElements = document.getElementsByName("gender");
    var gender = "";

    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
        }
    }

   
    var row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td><button style = bac onclick="deleteRow(this)">Delete</button></td>
    `;

    document.getElementById("outputprint").appendChild(row);
    
}

function deleteRow(button) {
    button.parentElement.parentElement.remove();
    let a = document.getElementById("outputprint");
    if (a.children.length === 0 ) {
         document.querySelector(".outputform").style.display = "none";

    }
    }

   




