import React, { useState } from 'react'
import './Tasks.css'
import TaskCard from './TaskCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tasks() {


    const show = () => {
        document.getElementById("textarea").style.display = "block"
    }
    const [Inputs, setInputs] = useState({ title: "", body: "" })
    const [Array, setArray] = useState([])
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value })
    }
    const submit = () => {
        if (Inputs.title === "" || Inputs.body === "") {
            toast.error("Title or Body should not be empty");
        } else {
            setArray([...Array, Inputs]);
            setInputs({ title: "", body: "" });
            toast.success("Task Added");
            toast.error("Your task is not saved.Please register!");
            // Additional logic here based on your requirements
        }
    }

    const del = (id) => {
        Array.splice(id, "1")
        setArray([...Array])
        toast.error("Task Deleted")
    }



    return (
        <>
            <div className='tasks'>
                <ToastContainer/>
                <div className='tasks-main container d-flex justify-content-center align-items-center mt-5 flex-column'>
                <div className='mb-5'><h1 style={{fontSize:'35px',fontWeight:'bold'}}>Your Tasks.</h1></div>
                    <div className='d-flex flex-column task-inputs-div w-50 p-1'>
                        <input onClick={show} name='title' value={Inputs.title} onChange={change} type="text" placeholder='Title' className='my-2 p-2 task-inputs' />
                        <textarea id='textarea' name='body' value={Inputs.body} onChange={change} type="text" placeholder='Body' className='p-2 task-inputs' />
                    </div>
                    <div className='w-50 d-flex justify-content-end my-3'><button className='home-btn px-2 py-1' type='button' onClick={submit} >Add</button></div>
                </div>
                <div className="tasks-body">
                    <div className="container-fluid">
                        <div className='row'>
                            {Array && Array.map((item, index) => (
                                <div className="col-lg-3 mx-5 my-3" key={index}>
                                    <TaskCard title={item.title} body={item.body} id={index} delid={del} />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasks