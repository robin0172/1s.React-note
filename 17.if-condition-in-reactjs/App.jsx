import React from "react"

const SlotM=(props)=>{
    // let x=props.x;
    // let y=props.y
    // let z=props.z
    let {x,y,z}=props //object distracting in reactjs

    if (x===y&&(y===z)){
        return(
            <div className="slot_inner">
                <h1>
                    {x} {y} {z}
                </h1><br />
                <h1>This is Matching</h1>

            </div>
        )
    }else{
        return(
            <div className="slot_inner">
                <h1>
                    {x} {y} {z}
                </h1><br />
                <h1>This is not Matching</h1>

            </div>
        )
    }

}


const App=()=>{
    return( <>
    <h1>🎰  Welcome to <span style={{fontWeight:'bold'}}>slot machine game <span>🎰</span></span></h1>
    {/* in react you have to call funtion like that */}
    <div className='slotmachine'>
    <SlotM x='😄'  y='🎅' z='😄'/>
    <SlotM x='😄'  y='😄' z='😄'/>
    <SlotM x='😄'  y='🎅' z='😄'/>
    </div>
    </>
    )
}
export default App;