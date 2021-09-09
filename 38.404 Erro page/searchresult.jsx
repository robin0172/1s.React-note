import React from 'react'

const SResult=(props)=>{
    const img=`https://source.unsplash.com/600x400/?${props.name}`
return(
    <>
    <div>
    <img src={img} alt="img" />
    </div>
    </>
)
}
export default SResult