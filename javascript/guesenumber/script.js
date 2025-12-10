 function guessthenumber(){
 const inputGuessNumber = document.getElementById("number").value;

 const Mynumber = 5;

 if(inputGuessNumber > Mynumber){
    alert("number Is Gratter ")
   document.getElementById("number").value = "";

 }
 else if(inputGuessNumber < Mynumber){
    
    alert("Number is Smaller")
    document.getElementById("number").value = "";
 }else if(inputGuessNumber == Mynumber){
    document.getElementById("result").innerHTML ="Congrutulation You Guess Correct Number";
    document.getElementById("number").value = "";
 }

}