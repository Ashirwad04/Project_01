import Header from "./Header";
import Login,{Profile,Settings} from "./UserComponet";

function App(){
  return(
   <div>
    <Header/>
    <h1>aman</h1>
    <h2>karan</h2>
    <Login/>
    <Profile/>
    <Settings/>
   </div>
  )
}

export default App;