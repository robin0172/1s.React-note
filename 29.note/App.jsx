import React, { useState } from 'react'
import Header from './header';
import Footer from './footer';
import CreateNote from './createnote';
import Note from './Note'
const App=()=>{
    const [addItem,setAddItem]=useState([]);
    const addNote=(note)=>{
        // alert("I am clicked")
        setAddItem((preDate)=>{
           return [...preDate,note]
        })
    }

    const OnDelete=(id)=>{
         setAddItem((olddata)=>{
             olddata.filter((currentdata,index)=>{
                 return index !== id;
             })
         })
    }
    return(
        <>
        
        <Header/>
        <Footer/>
        <CreateNote passNote={addNote}/>
        <Note />
        {addItem.map((val,index)=>{
             return <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content} 
                deleteItem={OnDelete}
             />
        })}
        </>
    )
}
export default App;