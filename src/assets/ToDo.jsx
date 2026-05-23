function ToDo(){
    return(
        <div>
            <h1>ToDo List</h1>
            <img src="https://i.pinimg.com/736x/e6/4b/e0/e64be05100f8db64add42a8f87579a81.jpg" alt="image" />
            <ul>
                <li>Learn React</li>
                <li>Build a ToDo App</li>
                <li>Master JavaScript</li>
            </ul>
           <button onClick={callFunction}>Click me</button>
        </div>
    )
}


function callFunction(){
    alert("Button clicked!");
}

export default ToDo;