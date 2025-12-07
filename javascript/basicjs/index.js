const arr = ["lucky","surya kumar yadav captain of india team"];
const b = [...arr, "Bahiya","alldata","define"]; 
const gh = ["pi","shy","kai","po","chey","pi","shy","kai","po","ch",...b ]
const gt = ["all","fi","gir", "gr","fr", "dr", "rt", ]
let text = "";

for(let x of gh){
    
   
    text +=x  + "<br>";

     document.getElementById("demo").innerHTML=text;
}
test = ""
gh.forEach((v)=>{
    test +=v + "<br>"
    document.getElementById("demo1").innerHTML = text;
})

test1 = "";
const df = gh.map((f)=>{
  test1 +=f + "<br>"

  document.getElementById("test1").innerHTML = test1
})


const sa = gh.map((val)=>{
    console.log(val)
})



const as = gh.filter((n) => n === "po");
console.log(as);  

let name = "Rahul";
let ko = "vasant";



const asd = gh.slice(0, 5);
console.log(asd[4]);
console.log(asd[3])
console.log(asd[2])
console.log(asd[1])


 