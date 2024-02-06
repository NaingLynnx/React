import React, { useState } from 'react'

const SwitchTheme = () => {
    const [isDark,setDark]=useState(true)

    const changeThemeHandler=()=>{
        if(isDark){
            document.body.style.backgroundColor="black"
            setDark(false)
            
        }
        else{
            setDark(true)
            document.body.style.backgroundColor="white"
          
        }
    }
  return (
    <div>

        <button onClick={changeThemeHandler}>Change 
        {
            isDark? `Dark` : `White`
        }
       
        </button>
        {
            isDark && <p>Theme is white </p>
        }
      
    </div>
  )
}

export default SwitchTheme
