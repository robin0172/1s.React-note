import React from 'react'

const ToDoList=(props)=>{
    return (
        <>
       
        <i class="fas fa-trash"></i>
        
    <li>{props.text}</li>
    </>
    )
}
export default ToDoList;