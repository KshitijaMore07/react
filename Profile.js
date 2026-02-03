import{useContext}from "react";
import UserContext from "./UserContext";

function Profile(){

    const {user, setUser}=useContext(UserContext);

    return(

        <>
        <h3>Profile</h3>
        <p>Logged in as : {user}</p>
        <button onClick={()=> setUser("Admin")}>
            Login as  Admin
        </button>
        </>
    );
}

export default Profile;