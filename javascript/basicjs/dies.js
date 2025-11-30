function start(){
    document.getElementById("rolldice1").disabled = false
    document.getElementById("restart").disabled = false
    document.getElementById("start").disabled = true
}
function restart(){
window.location.reload()
}

function p1play(){

    let score = Number(document.getElementById("p1sc").innerHTML);
    const df = Math.floor(Math.random()*6 )+1;

    if(df==6){
        document.getElementById("rolldice1").disabled = true
        document.getElementById("rolldice2").disabled = false

}else{
      score = score + df;
     document.getElementById("p1sc").innerHTML = score
}

  
}

function p2play(){
       let score = Number(document.getElementById("p2sc").innerHTML);
    const df = Math.floor(Math.random()*6 )+1;

    if(df==6){
        document.getElementById("rolldice1").disabled = false
        document.getElementById("rolldice2").disabled = true

}else{
      score = score + df;
     document.getElementById("p2sc").innerHTML = score
}
}