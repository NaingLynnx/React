import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainTitle from './components/mainTitle/MainTitle'
import Button from './components/button/Button'
import Parent from './pages/Parent'
import SwitchTheme from './components/switchTheme/switchTheme'
import StudentList from './components/studentList/StudentList'
import Login from './pages/login/Login'
import ToDoList from './pages/to_do_list/ToDoList'
import Count from './pages/count/Count'





function App() {

  return (
    <div>
      <MainTitle>title="My title"</MainTitle>
     <Button></Button>
     <Parent/>
     <SwitchTheme/>
     <StudentList></StudentList>
     <Login></Login>
     <ToDoList></ToDoList>
     <Count></Count>
    </div>
  )
}

export default App
