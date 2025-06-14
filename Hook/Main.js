import { useState } from 'react'
import { createContext } from 'react'
import Us2 from "./Us2";
import Us3 from "./Us3";
import Us4 from "./Us4";


const TC=createContext()

export default function Main(){
  const [datamode,setDatamode]=useState(false)
  function Toggle(){
    setDatamode((prev)=>!prev)
  }
  const value={datamode,Toggle}

  return (<>
    <TC.Provider value={value}>
      <Us2/>
      <Us3/>
      <Us4/>
    </TC.Provider>
    </>
  )
}

