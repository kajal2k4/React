import React, { useState } from 'react';

export default function Us1() {
    const [count, setCount] = useState(0);

    function hc() {
        if (count < 10) {
            setCount(count + 1);
        }
    }

    function hc1() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <p className='p'>{count}</p>
            <button onClick={hc}>Inc</button>
            <button onClick={hc1}>Dec</button>
        </>
    );
}
