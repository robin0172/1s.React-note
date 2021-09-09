import React, { useState } from "react"

const App = () => {
    const [fullname, setFullname] = useState({
        fname: '',
        lname: '',
        email:'',
        phone:'',

    });//using object in usestate.

    const inputevent = (event) => {
        console.log(event.target.value)//event.target.value give you input value
        // const value = event.target.value
        // const name = event.target.name

        const{value,name}=event.target//object distaracting
        setFullname((prevalue) => {
            // if (name === "fname") {
            //     return ({
            //         fname: value,
            //         lname: prevalue.lname,
            //         email:prevalue.email,
            //         phone:prevalue.phone
            //     }
            //     )

            // }else if(name==="lname"){
            //     return{
            //         fname:prevalue.fname,
            //         lname:value,
            //         email:prevalue.email,
            //         phone:prevalue.phone
            //     }
            // }else if(name==="email"){
            //     return{
            //         fname:prevalue.fname,
            //         lname:prevalue.lname,
            //         email:value,
            //         phone:prevalue.phone
            //     }
            // }else if(name==="phone"){
            //     return{
            //         fname:prevalue.fname,
            //         lname:prevalue.lname,
            //         email:prevalue.email,
            //         phone:value
            //     }
            // }//NOTE:normal method. using if else condition
            return{
                
            }
        })
    }


    const onsubmit = (event) => {
        event.preventDefault()
        alert('from submitted')

    }
    return (
        <>


            <div>
                {/**NOTE:from tag has a default behavoriour .it refresh the page
when you submit the from*/}
                <form action="" onSubmit={onsubmit}>
                    <h1>Hello {fullname.fname} {fullname.lname}   </h1>
                    <p>{fullname.phone}</p>
                    <p>{fullname.email}</p>
                    <input onChange={inputevent} type="text" placeholder="Enter your Name"
                        name='fname' value={fullname.fname} />

                    <input
                        type="text" name="lname"
                        onChange={inputevent} placeholder="Enter your password"
                     value={fullname.lname}
                    />

                    
<input
                        type="email" name="email"
                        onChange={inputevent} placeholder="Enter your email"
                     value={fullname.email}
                    />

                    
<input
                        type="number" name="phone"
                        onChange={inputevent} placeholder="Enter your email"
                     value={fullname.phone}
                    />

                    <button type="submit">Clicked Me</button>
                </form>

            </div>

        </>
    )
}

export default App;