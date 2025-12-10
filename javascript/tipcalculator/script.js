function tipcalculator(){

     console.log("clicked")
     const BillAmount = document.getElementById("BillAmount").value;
     console.log(BillAmount)

     const Percenatage = document.getElementById("Percenatage").value;
     console.log(Percenatage)

     const Person = document.getElementById("Person").value;
     console.log(Person)
    
     const total = BillAmount * Percenatage /100;
     
     console.log(total)

     const total1 =  total / Person;
     console.log(total1)
    
     document.getElementById("tot1").innerHTML = "Tip Amount" ;
     document.getElementById("p1").innerText = `${total1} `;
     document.getElementById("p2").innerHTML = "Each";

     
}