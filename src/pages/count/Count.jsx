import React, { useEffect, useState } from 'react'

const Count = () => {

    const [myCount,setMyCount] =useState(0)
    const [isSubmit,setIsSubmited]=useState(false)

    useEffect(()=>{
        console.log('Render in effect')
        setMyCount(myCount+1)
    },[isSubmit])

    const submitHandler=()=>{
        setIsSubmited(!isSubmit)
    }
  return (
    <div>
      My Count {myCount}
      <button type='button' onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Count


