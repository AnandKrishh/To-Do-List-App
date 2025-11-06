import { Header } from './components/header.jsx' 
import { Quote } from './components/Quote.jsx'
import { TaskContainer } from './components/TaskContainer.jsx'
import { NewTask } from './components/NewTask.jsx'
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import './App.css'

function App() {
  const [tasks, setTasks] = useState([{task: "Watch Salaar", taskId: uuidv4()}]);
  return (
    <div>
      <Header />
      <Quote />
      <TaskContainer tasks={tasks} setTasks={setTasks}/>
      <NewTask setTasks={setTasks}/>
    </div>
  )
}

export default App
