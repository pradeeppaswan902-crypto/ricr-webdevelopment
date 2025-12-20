/*
async function Getnewzoke(){
    const response =await fetch("https://official-joke-api.appspot.com/random_joke");

    const data = await response.json();
    document.getElementById("setup").innerText = data.setup;
    document.getElementById("punchline").innerText = data.punchline



}
*/    
async function Getnewzoke() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data =await response.json();
    document.getElementById("jokeka").innerText = data.setup;
    document.getElementById("Pitara").innerText = data.punchline;
}
function fun(){
    const Menu = document.getElementById("subMenu");

    if(Menu.style.display === "none" || Menu.style.display ===""){
        Menu.style.display = "block";

    }else{
        Menu.style.display = "none";
        
    }
}


