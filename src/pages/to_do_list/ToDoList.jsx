import React, { useState } from 'react'
import '../../css/style.css'


// const sass = require('sass');

// const result = sass.compile();

const ToDoList = () => {
  const [inputText,setinputText]=useState("")
  const [toDoItems,setToDoItems]=useState([])


  const inputHandler =(e)=>{
    setinputText(e.target.value)
  }

  const addHandler =()=>{
    console.log("Added value ",inputText)
    if(inputText !==""){
      setToDoItems([...toDoItems,inputText])
      setinputText("")

    }
  }

  const editHandler =(clickedId)=>{
    console.log("Edit index"+clickedId)
    const oldItem=toDoItems.filter((items,index)=> index === clickedId)
    const newText=window.prompt('Edit your to do list :',oldItem)
    if(newText){
      const updateToDoList=toDoItems.map((item,index)=> index === clickedId ? newText :item)
      setToDoItems(updateToDoList)
    }
  }

  const deleteHandler = (clickedId) => {
    console.log('Delete index ',clickedId)
    const updatedToDoList = toDoItems.filter((item, index) => index !== clickedId);
    setToDoItems(updatedToDoList);
  };

    // const addHandler =()=>{
  //   console.log("Added value "+inputText)
  //   if(inputText!==""){
  //     // console.log("Error test ")
  //     setToDoItems([...toDoItems,inputText])
  //     setinputText("")
  //   }

  // }
  // const editHandler =(clickedId) =>{
  //   console.log("Edit index "+clickedId)
  //   const oldItem=toDoItems.filter((items,index)=>index === clickedId)
  //   const newText=window.prompt(`Edit your text `,oldItem)
  //   if(newText){
  //     const updateToDoList=toDoItems.map((item,index)=> index=== clickedId ? newText: item)
  //     setToDoItems(updateToDoList)
  //   }
  // }

  return (
    <div>
     <div className="l-wrap">
      <h1>To Do List</h1>
      <div className="l-wrap-inner">
      <div className="container">
        <div className="add_item">
          <input type="text" value={inputText} className='item-input' onChange={inputHandler}/>
          <button className='btn btn--add' onClick={addHandler} type='button'>ADD</button>
        </div>
          <div className="task-bloc">
            {
              toDoItems.map((items,index)=>
              <div className="task-bloc__box" key={index}>
              <p className='task-txt'>{items}</p>
              <div className="task-btn">
                <button className='btn btn--delete' type='button' onClick={()=>deleteHandler(index)}>Delete</button>
                <button className='btn btn--edit' type='button' onClick={()=>editHandler(index)}>Edit</button>
                </div>
              </div>
              )
            }
          </div>
        </div>
      </div>
      </div>
     </div>
      
  
  )
}

export default ToDoList
