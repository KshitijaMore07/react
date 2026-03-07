import {useState, useEffect} from "react";
import UserContext from "./UserContext";
import Dashboard from "./Dashboard";
function App() {

  const [user, setUser]=useState("Guest");

  useEffect(()=>{

    console.log("User changed to : ",user);
  },[user]);
  return (

    <UserContext.Provider value={{user, setUser}}>

      <h1>Mini App Using React Hooks</h1>
      <Dashboard/>
    </UserContext.Provider>
   
  );
}

export default App;
