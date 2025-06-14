import React, {useEffect, useState } from 'react';

export default function UE1() {
    const [countA ,setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

        useEffect(()=>{
            alert('hi')
        },[])

    function hcA() {
        setCountA(countA + 1);
    }

    function hcB() {
            setCountB(countB - 1);
    }

    return (
        <>
        <button onClick={hcA}>A{countA}</button>
        <button onClick={hcB}>B{countB}</button>

        </>
    );
}
