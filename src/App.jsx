import { useState } from "react";
import ToDo from "./assets/ToDo";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import MultipleCondition from "./Components/MultipleCondition";
import Login,{Profile,Settings} from "./UserComponet";
import Props from "./Components/Props";
import College from "./Components/College";
import Student from "./Components/Student";





function App(){


  // let name = "John Doe";

  // let userName="Ashirwad kumar";
  // let age=25;
  // let email="ashirwadk04@gmail.com";

  let userObj={
  name:"Ashirwad kumar",
  age:25,
  email:"ashirwadk04@gmail.com"
  }

  let userObj1={
  name:"John Doe",
  age:30,
  email:"johndoe@gmail.com"
  }

  let userObj2={
  name:"Jane Smith",
  age:28,
  email:"janesmith@gmail.com"
  }

  let userObj3={
  name:"Aman kumar",
  age:32,
  email:"aman@gmail.com"
  }



  let collegeName=["ABC College","XYZ University","PQR Institute"];


  const[student,setStudent]=useState("John Doe");


  return(

  <div>
   <h1>App</h1>



    <button onClick={() => setStudent("Jane Smith")}>Update Student</button>


   <Student name={student} />




{/* 
   <h2>{name}</h2>

  <Props name={userName} age={age} email={email} />


   */}



  <College names={collegeName}/>










  <Props user={userObj} />
  <Props user={userObj1} />
  <Props user={userObj2} />
  <Props user={userObj3} />


  
  </div>

 );

  

}

export default App;