import React, { useState } from 'react'
import './Button.css'

const MyButton=({btnClassName,btnLabel,onbtnClick}) =>{
    return (
        <button className={`btn ${btnClassName}`} onClick={onbtnClick} >{btnLabel}</button>
    )
}

const Button = () => {
    const [count,setCount]=useState(0)
    const decreaseHandler= ()=>{
       
        if(setCount > 0){
          setCount(count-1)
        }

    }
  return (
   <>
   <p>My Count {count}</p>
   <MyButton btnClassName="increase" btnLabel="Increment" onbtnClick={()=>setCount(count+1)}/>
   <MyButton btnClassName="decrease" btnLabel="Decrement" onbtnClick={decreaseHandler}/>
   </>
  )
}

export default Button
