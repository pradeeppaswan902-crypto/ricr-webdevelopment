function add(){
    const ad = document.getElementById("number").value
   const guessnumer = 20;

   if(ad >20){
    console.log("tumhara number bada hai")
   }else if(ad<20){
    console.log("tumahara number chota hai")
   }
   else if(ad == guessnumer){
    console.log("congruchulation app ne sahi guess kiya hai")
   }
}
function add(){
    const val = document.querySelector("input[name='val']").value
    if(val){
        console.log("value Cheked checked hua hai ")
    }

  function dived(){
    let emptyarray = []
    const inputs = document.querySelectorAll("input[name='val']:checked").value
      inputs.forEach(element => {
        emptyarray.push(element.value)
        console.log(emptyarray)      
 
        
      });

  }
  
  function minus(){
    let arrt = []
    const input = document.querySelectorAll("input[name='vale']:checked").value
    input.forEach(element => {
        arrt.push(element.value)

    })
  }
}
function radiobutton(){
    const radiao = document.querySelector("input[name='number']:checked").value
    console.log(radiao)
}    