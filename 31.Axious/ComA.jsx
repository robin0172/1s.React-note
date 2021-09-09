import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
const ComA=()=>{
    const [num,setNum]=useState();
    const [name,setName]=useState()
    const[move,setmove]=useState()

    useEffect(()=>{
      async function getData(){
          const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
          console.log(res.data.name)
          setName(res.data.name)
          setmove(res.data.moves.length)
      }
      getData()
    })
    
    return(
        <>
        <h1>you choose {num} value</h1>
        <h1>my name is <span>{name}</span></h1>
        <h1>my name is <span>{move}</span></h1>

            <select name="" value={num} id="" onChange={(event)=>{
              setNum(event.target.value)
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

            </select>
        </>
    )
}

export default ComA