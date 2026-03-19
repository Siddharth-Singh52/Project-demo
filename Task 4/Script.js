// TODO APP

function addTask(){

let input=document.getElementById("taskInput");
let task=input.value;

if(task==="")return;

let tasks=JSON.parse(localStorage.getItem("tasks")) || [];

tasks.push(task);

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();

input.value="";
}

function displayTasks(){

let list=document.getElementById("taskList");
if(!list) return;

list.innerHTML="";

let tasks=JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach((task,index)=>{

let li=document.createElement("li");

li.innerHTML=`${task} <button onclick="deleteTask(${index})">❌</button>`;

list.appendChild(li);

});

}

function deleteTask(index){

let tasks=JSON.parse(localStorage.getItem("tasks"));

tasks.splice(index,1);

localStorage.setItem("tasks",JSON.stringify(tasks));

displayTasks();
}

displayTasks();


// PRODUCTS

let products=[

{name:"Laptop",price:800},
{name:"Phone",price:500},
{name:"Headphones",price:150},
{name:"Smart Watch",price:200}

];

function showProducts(){

let container=document.getElementById("productList");

if(!container) return;

container.innerHTML="";

products.forEach(p=>{

let div=document.createElement("div");

div.className="card";

div.innerHTML=`<h3>${p.name}</h3><p>$${p.price}</p>`;

container.appendChild(div);

});

}

function sortProducts(type){

if(type==="low") products.sort((a,b)=>a.price-b.price);

if(type==="high") products.sort((a,b)=>b.price-a.price);

showProducts();

}

showProducts();
