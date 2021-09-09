import React from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
const CreateNote=(props)=>{
    const [note,setnote]=useState(
        {
            title:"",
            content:""
        }
    )
    const inputevent=(event)=>{
        // const value=event.target.value
        const {name,value}=event.target;
        setnote((preData)=>{
            return({
                ...preData,
                [name]:value//if useState name match with input name, input value will given to that variable which mathced to the name.
            })
        })
    }

    const addEvent=()=>{
       props.passNote(note) 
       setnote({
        title:"",
        content:""
       })
    }
    return(
      
        <>
          <div className="main_note">
              <form action="">
                  <input name="title"  value={note.title} type="text" onChange={inputevent} placeholder="title" />
                  <textarea name="content" value={note.content} name="content" onChange={inputevent} id="" cols="30" rows="10" placeholder="write a note"></textarea>
              <Button onClick={addEvent}>
              <AddIcon className="add"/>
              </Button>
              </form>
          </div>
        </>
    )
}
export default CreateNote;