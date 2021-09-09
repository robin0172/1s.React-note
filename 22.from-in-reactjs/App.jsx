import React, { useState } from "react"

const App=()=>{
    const [name,setname]=useState();
  const [myfullname,setfullname]=useState()

  const [lastname,setlastname]=useState()
  const [newlastname,newsetlastname]=useState()
    const inputevent=(event)=>{
        console.log(event.target.value)//event.target.value give you input value
           setname(event.target.value)
    }

    const inputeventtwo=(event)=>{
      setlastname(event.target.value)
    }
    const onsubmit=(event)=>{
        event.preventDefault()//it will stop default page refreashing by from submit
        setfullname(name);
        newsetlastname(lastname)

    }
    return(
           <>
           
           
<div>
{/**NOTE:from tag has a default behavoriour .it refresh the page
when you submit the from*/}
<form action="" onSubmit={onsubmit}>
    <h1>Hello {myfullname} {newlastname}</h1>
  <input onChange={inputevent} type="text" placeholder="Enter your Name" 
  value={name}/>

<input  
type="text" onChange={inputeventtwo} placeholder="Enter your password" 
 value={lastname} />
  
<button type="submit">Clicked Me</button>
</form>

</div>

           </>
    )
}

export default App;