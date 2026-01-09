import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();


app.get("/", (req, res) => {
 
  const data = {
    email: "email@example.com",
    pass: "Owla123"
  };

  
  res.json(data);
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


import {react, useState} from 'react'

const App = ()=>{
const [form , setForm] = useState({
    UserName : "",
    email : "",

})
const handaleChal = (e)=>{
    const {name, value} = e.target;
    setForm((pre)=>({
        ...pre,
        [name]: value
    }))
}
const HandaleSubmit = (e) =>{
    e.preventDefault();
 
}

return(
    <>
       <div>
          <form className='border border:focuse:red  ' onSubmit={HandaleSubmit} >
              <div>
                <label>UserName</label>
                <input type='text' name='UserName' value={form.UserName} onChange={handaleChal} />
              </div>
              <div>
                <label>Email</label>
                <input type='email' name='email' value={form.email} onChange={handaleChal} />
              </div>
              <div >
                <button type='submit' className=''>Submit</button>
              </div>
          </form>
       </div>
    
    </>
)


}