import React from 'react';
import * as assert from "assert";

const HookCounterTwo = () => {
    const initValue = 0;
    const [ count, setCount ] = React.useState(initValue);

    return(
        <>
            Count:{count};
            <button onClick={()=> setCount(Currentcount => initValue )}>Reset</button>
            <button onClick={()=> setCount(Currentcount => Currentcount + 1)}>Increment</button>
            <button onClick={()=> setCount(Currentcount => Currentcount -1)}></button>
        </>
    )
}