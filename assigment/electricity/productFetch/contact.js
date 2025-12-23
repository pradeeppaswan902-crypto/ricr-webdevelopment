function GetValidiate(){
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("Email").value.trim()
    const massage = document.getElementById("Massage").value.trim()
    if(name === ""){
        document.getElementById("NameError").innerText = "please Enter Name";
        return
    }
    if(email === "" || !email.includes("@")) {
        document.getElementById("EmailError").innerText = "Enter email With @";
        return
    }
  if (massage.trim() === "" || massage.length < 10) {
       document.getElementById("MassageError").innerText =  "Please enter minimum 10 characters message";
   
       return;
}

       console.log("Your Name Is :" ,name)
}