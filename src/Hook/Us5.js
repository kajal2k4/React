import React, {useState} from 'react'

export default function Us5(){
    const[fname, setFname] = useState(' ')
    function hc(e){
        setFname(e.target.value)
    }
    
    return(
        <>
            <input type='text' onChange={hc} value={fname}/>
            <h1>welcome {fname}</h1>

        </>
    )
}