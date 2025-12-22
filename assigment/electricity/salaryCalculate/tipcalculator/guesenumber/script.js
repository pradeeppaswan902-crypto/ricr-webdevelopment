let count = 5;  
document.getElementById("chanse").innerText=`Total Chance: ${count}` ;

function GuessNumber() {
   const GuessNumber = parseInt(document.getElementById("GuessNumber").value);
   const Mynumber = 25; //Math.floor(Math.random()*4)+1;

   
   if (GuessNumber === Mynumber) {
       document.getElementById("ParaNumber").innerText = `Congratulations! You guessed the correct number`;
        
   }
   else if (GuessNumber < 10) {
      document.getElementById("ParaNumber").innerText = `Your number is too short ${GuessNumber}`;
   }
   else if (GuessNumber > 10 && GuessNumber < 20) {
      document.getElementById("ParaNumber").innerText = `Your number is short`;
   }
   else if (GuessNumber >= 20 && GuessNumber <= 24) {
      document.getElementById("ParaNumber").innerText = `You Are Very Close The Number`;
   }
   else if (GuessNumber >= 26 && GuessNumber <= 30) {
      document.getElementById("ParaNumber").innerText = `You Are Very Close The Number`;
   }
   else if (GuessNumber > 30 && GuessNumber < 50) {
      document.getElementById("ParaNumber").innerText = `Your number is too big`;
   }
   else if (GuessNumber > 50) {
      document.getElementById("ParaNumber").innerText = `Your number is very big`;
   }

   count -= 1;

   document.getElementById("Remainig").innerText = `Total Remaining Chance ${count} `;
   

   if(count === 0)

   {
     
      window.location.reload()
      document.getElementById("close")=`Your limit has been reached`
     
   }
}
