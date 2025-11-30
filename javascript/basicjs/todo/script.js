/*

function addlist() {
    const input = document.getElementById("input");
    const text = input.value;

    const li = document.createElement("li");
    li.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.textContent = "remove";
    delBtn.onclick = () => {
        li.remove();
    }

    li.appendChild(delBtn);

    document.getElementById("list").appendChild(li);

    input.value = "";
}
const btrn = document.createComment("button")
btrn.textContent = "button"
btrn.onclick = () =>{
    li.remove()
}
*/
/*
const inputField = document.getElementById('input');
const btn = document.getElementById("mybutton");

let collectedInputValues = [];

btn.onclick = function() {
    const currentValue = inputField.value; 
    if(currentValue.trim() !== "") { 
        collectedInputValues.push(currentValue); 
        alert(collectedInputValues); 
        inputField.value = ""; 
    } else {
        alert("Please enter a value");
    }
};

const inputva = document.getElementById("input")
const btns = document.getElementById("mybtton")

let array = []

btn.onclick = function(){
   const cureentvalue = inputva.value
   if(cureentvalue.trim() !==""){
    array.push(cureentvalue)
    inputva.value ="";
   } 

}
   */
const takingInputvalues = document.getElementById("input")
const button = document.getElementById("mybutton")
const display = document.getElementById("display") 
let alldata = []

button.onclick = () => {
    const finddata = takingInputvalues.value
    alldata.push(finddata)
    save(alldata)
    show(alldata)
    takingInputvalues.value = ""
}

function save(ss) {
    const data = JSON.stringify(ss) 
    localStorage.setItem('Username',data)
}
function show(alldata){
    display.innerHTML = ""
    alldata.forEach(item => {
    display.innerHTML += `<li>${item}</li>`
    });
}


function show(alldata){
    display.innerHTML =""
    alldata.forEach(item =>{
    display.innerHTML += `<li>${item}</li>`    

   })
}
function show(){
    display.innerHTML =""
    alldata.forEach(item=>{
    display.innerHTML += <li>${item}</li>
    })
} 

let basa = []
function genneral(){
    const takinginvalue = takingInputvalues.value
    takinginvalue.push(basa)
    console.log(basa)
}
let aarry = []
function alldataa(){
    const anss = takingInputvalues.value
    asss.push(aarry)
    console.log(anss)
     takingInputvalues.value = ""
     saveme(alldataa)
}
function saveas(alldata){
    const vi = JSON.stringify(alldata)
    localStorage.setItem("Name", vi)
}
function data(alldata){
    display.innerHTML =""
    alldata.forEach(item =>{
    display.innerHTML += `<li>${item}</li>`
    })
}
  function data(alldata){
    display.innerHTML =""
    alldata.forEach(itreem =>{
    display.innerHTML = `<li>${itreem}</li>`  
    })

  }

  function de(){
    
  }