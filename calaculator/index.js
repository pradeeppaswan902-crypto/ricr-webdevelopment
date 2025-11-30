function input(char){
    
 if (char==="="){
    try{
      
       document.getElementById('dispaly').value =eval(document.getElementById('dispaly').value);
    } catch{
        
        document.getElementById('dispaly').value ="";
    }
  
 }   
 else if(char==="c"){
    document.getElementById('dispaly').value ="";
 } else{
    let exp = document.getElementById('display').value;
    exp = exp + char;
    document.getElementById('display').value = exp
 }
}