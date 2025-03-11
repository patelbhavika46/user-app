import React, {useState, useEffect} from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>Count: {counter}</p>
            <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Increment</button>
        </div>
    );
};

export default Counter;