import React from 'react'
import Update from './Update'

function TaskCard({title,body,id, delid}) {
  return (
    <div className='p-3 task-card'>
        <div>
            <h5>{title}</h5>
            <p className='task-card-p'>{body.split("", 50)}...</p>
        </div>
        <div className='d-flex justify-content-between'>
            <div className='card-icon'>
            <Update/>
            {/* <i class="fa-regular fa-pen-to-square fa-sm upd">&nbsp;<span style={{fontSize:"10px"}}>Update</span></i> */}
            </div>
            <div style={{backgroundColor:"black",borderRadius:'10px'}} className='p-3 card-icon d-flex justify-content-center align-items-center'onClick={()=>{
                delid(id)
            }} >
            <i class="fa-solid fa-trash fa-sm del">&nbsp;<span style={{fontSize:"10px"}} >Delete</span></i>
            </div>
        </div>
    </div>
  )
}

export default TaskCard