import React from 'react'
import '../App.css';

export default function ToDoItems({text,id,dlt,onEdit, deadline, setDeadline}) {
  return (
    <>
    <div className="line-div">
    <hr className="line" />
    </div>
    <div className='todo-container'>
       <div className='list-id'>
        <p>{id}. </p>
        </div>
       <div className='list-text' contentEditable={true}
       onBlur={(e)=>onEdit(id,e.target.innerText)}>
        <p>{text}</p>
        </div>
        <div className='list-deadline'><p>{deadline}</p></div>
        <div className='list-date-input'><input type="date" 
        value={deadline? deadline: ''}
        onChange={(e)=> setDeadline(id, e.target.value)} />
        </div>
       <div className='list-dlt-btn'><button className='dlt' onClick={dlt}>
            Delete
          </button></div>
    </div>
    </>
  )
}
