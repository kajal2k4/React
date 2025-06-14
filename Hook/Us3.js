import React, {useState} from 'react'

export default function Us3(){
    const[style, setStyle] = useState('tomato')
    const[data, setData] = useState(" ")
    function hc(){
        setStyle('cyan')
        setData("welcome")
    }
    
    return(
        <>
            <h1 style={{backgroundColor:style}}>
                Hello
            </h1>
            <button onClick={hc}>ChnageCSS</button>
            <h3>{data}</h3>

        </>
    )
}