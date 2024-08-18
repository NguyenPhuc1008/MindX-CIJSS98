import React, { useState } from 'react'

export default function CountDownBox(props) {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div style={{
            width: 200,
            height: 200,
            fontSize: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: props.color

        }}>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>
    )
}
