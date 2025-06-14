import React, {useReducer, useState} from 'react'

export default function Ur1(){
    const[state, dispatch] = useReducer(reducer,0)
    function reducer(state,action){
        if(action.type == 'increment'){
            return state+1
        }
    }
    
    return(
        <>
           <button onClick={()=>dispatch({type:'increment'})}>Click({state})</button>
           
        </>
    )
}