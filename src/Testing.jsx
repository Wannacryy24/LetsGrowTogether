import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Testing() {
    const {id} = useParams();
    useEffect(()=>{
        fetch(`/api/${id}`)
        .then(res=>res.json())
        .then(data=>console.log(data.newData))
    },[id])
  return (
    <div style={{marginTop:'200px' , height:'100vh', width:'100%' , backgroundColor:'white'}}></div>
  )
}
