
import React from 'react'
import {TC} from './Main'
import { useContext } from 'react'
function Ur2() {
    const {darkmode,toggle} = useContext(TC)
      const style={
        backgroundColor: darkmode?"blue":"white",
        color:darkmode?"white":"black",
        height:'80vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
      }


  return (
    <div style={style}>
      <h2>{darkmode?'Dark':'Light'}</h2>
      <button onClick={toggle}>Toggle Theme</button>

    </div>
  )
}

export default Ur2;