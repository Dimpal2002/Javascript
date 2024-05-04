import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmpData() {

    const [name,setName] =useState(""); 
    const [price,setPrice] =useState(""); 
    const [category,setCategory] =useState(""); 

    const navigate = useNavigate();

    const handleSubmit = (e)=>{

        e.preventDefault();
        // console.log({name,email,phone})
        const data = {name,price,category};

        fetch('http://localhost:4500/employees',{
            method:"POST",
            headers:{'content-type':"application/json"},
            body:JSON.stringify(data)
        })
        .then((res)=>{
            if(res)
            {
                alert("Product added..!");
                navigate('/')

            }
        })
        // .then((data)=>{
        //     console.log(data)
        // })

    }
  return (
    <div>
      <div>
        <h2 className="my-3">Create Product</h2>
      </div>

      <div className="container w-50 text-start fw-bold">
        <form onSubmit={handleSubmit}>

      


          <div className="mb-3">
            <label  className="form-label">
              Name
            </label>
            <input
              type="text"
             value={name}
             onChange={(e)=>{setName(e.target.value)}}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
           
          </div>

          <div className="mb-3">
            <label  className="form-label">
              price
            </label>
            <input
              type="text"
              value={price}
              onChange={(e)=>{setPrice(e.target.value)}}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
           
          </div>

          <div className="mb-3">
            <label className="form-label">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

         
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEmpData;
