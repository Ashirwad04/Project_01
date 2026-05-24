function Props({user}) {



   
    return(

        
        <div>
            <h1>Props in React</h1>
            <h2>Props are used to pass data from one component to another component</h2>
<hr />
            <h2>{user.name}</h2>
            <h2>{user.age}</h2>
            <h2>{user.email}</h2>

        </div>

    );


}

export default Props;