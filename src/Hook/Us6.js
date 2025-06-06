import React, {useState} from 'react'

export default function Us5(){
    const[data, setdata] = useState({name:'kajal'})
    function hc(e){
        setdata({name:'anand'})
    }
    
    return(
        <>
            <h1>{data.name}</h1>
            <button onClick={hc}></button>

        </>
    )
}