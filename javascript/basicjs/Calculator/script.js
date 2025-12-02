/*
function Input(char) {
  console.log(char)

  if (char === "=") {
    try {
      document.getElementById("display").value = eval(
        document.getElementById("display").value
      );
    } catch (error) {
      alert("Invalid Expression");
      document.getElementById("display").value = "";
    }
  } else if (char === "C") {
    document.getElementById("display").value = "";
  } else {
    document.getElementById("display").value =
      document.getElementById("display").value + char;
  }
}
*/
/*
function Input(char){
    console.log(char)
    if (char === '='){
        try{
            document.getElementById("display").value = eval(
            document.getElementById("display").value
            )
        }catch(error){
             alert("invalied Expression")
             document.getElementById("dispaly").value = "";
        }
            
        
    }

     else if (char === "C"){
        document.getElementById("display").value = "";
     }
     else {
        document.getElementById("display").value =  document.getElementById("display").value + char
     }
}
*/
function Input(char) {
    const display = document.getElementById("display");

    if (char === "=") {
        if (display.value === "") return; // ❗ Empty ho to kuch mat karo

        display.value = eval(display.value);
    } 
    else if (char === "C") {
        display.value = "";
    } 
    else {
        display.value += char;
    }
}

document.addEventListener("keydown", (e) => {
    console.log(e.key);

    if (e.key === "Backspace") {
        Input("C");
    }
    else if (e.key === "Enter") {
        Input("=");  // Ab empty par 0 nahi aayega
    }
    else if (/^[0-9+\-*\/]$/.test(e.key)) {
        Input(e.key);
    }
});
