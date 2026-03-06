// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if(name === "" || email === "" || message === ""){
        formMessage.style.color = "red";
        formMessage.textContent = "All fields are required!";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        formMessage.style.color = "red";
        formMessage.textContent = "Enter valid email!";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully!";
});


// Dynamic To-Do List
function addTask(){
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();

    if(taskValue === "") return;

    let li = document.createElement("li");
    li.textContent = taskValue;

    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.classList.add("delete-btn");

    delBtn.onclick = function(){
        li.remove();
    }

    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}
