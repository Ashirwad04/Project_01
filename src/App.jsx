import { useState } from "react";
import ToDo from "./assets/ToDo";
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Login,{Profile,Settings} from "./UserComponet";




function App(){

  const [display,setDisplay]=useState(false);



  const userObj={
    name:"Aman",
    age: 25,
    city: "Delhi"
  }


  const name="aman";
  let x=10;
  let y= 20;
  return(
  //  <div>
  //   <Header/>
  //   <h1>aman</h1>
  //   <h2>karan</h2>
  //   <Login/>
  //   <Profile/>
  //   <Settings/>
  //   <ToDo/>
  
  //  </div>
  <div>



    {/* <h1>Welcome to My App</h1>
    <h1>{name}</h1>
    <h1>{x+y}</h1>
    <h1>{userObj.age}</h1> */}

    <h1>Togle in react js</h1>
      {
        display?<h1>Ashirwad</h1>:null
      }
    

    <button onClick={()=>setDisplay(!display)}>Toggle</button>


   {/* <Counter/> */}
  </div>
  )
}

export default App;