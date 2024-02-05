import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  
  const navigate = useNavigate()

  const navigateToTasks=()=>{
    navigate('/tasks')
  }

  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className="div container d-flex justify-content-center align-items-center flex-column">
            <h1 className='text-center'>Organize your <br /> work and life, finally.</h1>
            <p>Become focused and organized with our task manager.</p>
            <button onClick={navigateToTasks} class="home-btn p-2">Add Task</button>
        </div>
    </div>
  )
}

export default Home