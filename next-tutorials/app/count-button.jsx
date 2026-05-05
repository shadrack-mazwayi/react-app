'use client';

import { useState } from 'react';

{/*Define a React  CountButton component that will display a button to increment a count state variable. */ }

export default function CountButton() {

    {/* Define a state variable with count and update function using React's useState hook */ }
    const [count, setCount] = useState(0);

    {/* onClick event handler */ }
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>Count ({count})</button>
    );
}