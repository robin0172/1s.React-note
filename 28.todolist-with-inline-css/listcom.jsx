import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
const ListCom = (props) => {
   const [line,setLine]=useState(false)
    const click=()=>{
        setLine(true)
    }
    return (
        <> <div className="todo_style">
            <span onClick={click}>
                <DeleteIcon />
            </span>
            <li style={{textDecoration:line ?"line-through" :"none"}}>{props.text}</li>
        </div>

        </>
    )
}
export default ListCom;