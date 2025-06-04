import React, {useState} from 'react'
import img1 from '../Hook/a.png'
import img2 from '../Hook/c.jpeg'


export default function Us4(){
    const[img, setting] = useState('img1')
    function hc(){
        setting(i=>(i===img1?img2:img1))
    }
    
    return(
        <>
            <img src={img} width={200} height={200}></img>
            <button onClick={hc}>Change Image</button>

        </>
    )
}