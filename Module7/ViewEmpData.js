import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewEmpData() {

 const [id,setId] = useState("") 
const [name,setName] = useState("")
const [price,setPrice] = useState("")
const [category,setCategory] = useState("")
  const {viewId} = useParams();
  // console.log(viewId)

  useEffect(()=>{
    fetch(`http://localhost:4500/employees/`+viewId)
    .then((res)=>{return res.json()})
    .then((data)=>{
       setId(data.id)
     setName(data.name)
      setPrice(data.price)
     setCategory(data.category)
    })
  },[])
  return (
    <div>

<div>
        <h2 className="my-3">Read Products</h2>
      </div>
      
      {/* <h4>Id :{viewId} </h4> */}
      <h4>Id:{id}</h4>
      <h4>Name :{name} </h4>
      <h4>Price :{price} </h4>
      <h4>Category :{category} </h4>
        
    </div>
  )
}

export default ViewEmpData

    