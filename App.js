import {useState} from "react";
import {useEffect} from "react";

const App=()=>{

  const [name,setName]=useState(null);
  const[email,setEmail]=useState(null);
  const[age,setAge]=useState(null);

  const handleAgeChange=(e)=>{

    const a=e.target.value;
    if(!isNaN(a)){

   setAge(a);

    }

 }




 const handleNameChange=(e)=>{

    const n=e.target.value;
    if(/^[A-Za-z\s]*$/.test(n)){

   setName(n);

    }
                      
 }



 const handleEmailChange=(e)=>{

    const em=e.target.value;
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$]+$/.test(em)){

   setEmail(em);

    }
                      
 }


  console.log("1st");

  useEffect(()=>{
    console.log("Hello World");
  },[age])


   console.log("2nd");


   return(
    <>
    <div className="bg-blue-600 p-5">
     <input type="text" placeholder="Enter name" 
     onChange={(e)=>handleNameChange(e)}/>


     <input type="email" placeholder="Enter email"
     onChange={(e)=>handleEmailChange(e)}/>

     <input type="text" placeholder="Enter Age"
     onChange={(e)=>handleAgeChange(e)}/>

     
    </div>

    <div>
      {name}
      {email}
      {age}
    </div>


    </>
   )

}

export default App;