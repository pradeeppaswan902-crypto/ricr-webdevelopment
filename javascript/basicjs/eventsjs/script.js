/*
function on(){
    document.getElementById('bulb').style.backgroundColor ="yellow"
}
function off(){
    document.getElementById('bulb').style.backgroundColor ="white";
}
function red(){
    document.getElementById('bulb').style.backgroundColor ="red"
}
function blue(){
    document.getElementById('bulb').style.backgroundColor ="blue"
}
function color(){
 const userColor =   document.getElementById("color")
     userColor.addEventListener("change", ()=> chancolr(userColor.value))
}
function chancolr(){
    document.getElementById('bulb').style.backgroundColor = color;
}

function Sb_control(){
    const btn = document.getElementById("SB_btn")
    if(btn.innerText ==="On"){
        document.getElementById("SB_btn").innerText ="off";
        document.getElementById("smartbulb").classList.add('on') ;
    }
    else{
        document.getElementById("SB_btn").innerText ="on";
        document.getElementById("smartbulb").classList.remove('on');
    }
   
   function Sb_control1(){
    document.getElementById("smartbulb").classList.toggle('on')
   }  
}


 const usercolorB = document.getElementById("colorB");

usercolorB.addEventListener("change", () => changecolorB(usercolorB.value));

function changecolorB(colorB) {
    document.getElementById("inner").style.backgroundColor = colorB;
}
*/



const usercolorH = document.getElementById("colorH");
usercolorH.addEventListener("change", () => changecolorH(usercolorH.value));

function changecolorH(colorH) {
    document.getElementById("heading").style.color = colorH;
}


const usercolorP = document.getElementById("colorP");
usercolorP.addEventListener("change", () => changecolorP(usercolorP.value));

function changecolorP(colorP) {
    document.getElementById("paragraph").style.color = colorP;
}


const usercolorB = document.getElementById("colorB");
usercolorB.addEventListener("change", () => changecolorB(usercolorB.value));

function changecolorB(colorB) {
    document.getElementById("outer").style.background = colorB;
}


const co = document.getElementById("colorPp")
  co.addEventListener("change", ()=> mycolor(co.value))

function mycolor(colorPp){
  document.getElementById("newpara").style.color = colorPp
}

const changeb = document.getElementById("changehead")
changeb.addEventListener("change" , ()=> vat(changeb.value))

function vat(r){
  document.getElementById("head").style.color = r
}

function on(){
    document.getElementById("bulb").style.backgroundColor ="yellow"
}
function off(){
    document.getElementById("bulb").style.backgroundColor ="white"
}

