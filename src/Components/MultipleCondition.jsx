import { useState } from "react";

function MultipleCondition() {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h1>Multiple Conditions in React</h1>

            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Counter</button>

            {
                count === 0 ? <h1>Condition 0</h1>
                : count === 1 ? <h1>Condition 01</h1>
                : count === 2 ? <h1>Condition 02</h1>
                : <h1>Condition 03</h1>

            }
            

        </div>
    );
}

export default MultipleCondition;