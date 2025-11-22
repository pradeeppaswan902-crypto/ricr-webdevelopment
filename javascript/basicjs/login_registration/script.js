function login(){
    console.log('loginbutton clicked')
    const em = document.getElementById("Email").value;
    const pss = document.getElementById("Password").value;
    console.log(em,pss)

    alert("code done")
         document.getElementById("Email").value="";
      document.getElementById("Password").value="";
    
}

function registration(){
    console.log("registration button clicked")

    const nm = document.getElementById("RegistrationName").value;
     const em = document.getElementById("RegistrationEmail").value;
      const pss = document.getElementById("RegistrationPassword").value;
       const conf = document.getElementById("RegistrationconfirmPassword").value;
       console.log(nm ,  em,  pss , conf)    
}