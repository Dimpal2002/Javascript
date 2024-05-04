import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './empdata.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEye, faPenToSquare, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


function EmpData() {

  const search = <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>

  const read = <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
  const edit = <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
  const delet = <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>


    const [details,setDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:4500/employees')
        .then((res)=>{return res.json()})
        .then((data)=>{
            setDetails(data)
        })
    },[])

    const handleView =(id)=>{
        // navigate(`/viewEmp/${id}`)
        navigate('/viewEmp/'+id)
    }

    const handleEdit =(id)=>{
       
        // navigate(`/viewEmp/${id}`)
        navigate('/editEmp/'+id)
    }

    const handleDelete =(id)=>{
       
      fetch('http://localhost:4500/employees/'+id,{
            method:"DELETE",
            headers:{'content-type':"application/json"},
            // body:JSON.stringify(data)
        })
        .then((res)=>{
            if(res)
            {
                alert("Product Deleted..!");
                window.location.reload();
                navigate('/')

            }
        })
      
  }
    
  return (
    <div>
        <div>
            <h2 className="container search">Search Products:</h2>
        </div>

        <div className="container"> 
          <div className='inp'><input type='text'></input>{search}</div>

            <Link to="/addEmp" className='btn btn-primary link'>+Create Product</Link>
        </div>
        

       <div className='container w-50'>
       <table className="table">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Category</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {details && details.map((emp)=>(

<tr key={emp.id}>
<th scope="row">{emp.id}</th>
<td>{emp.name}</td>
<td>{emp.price}</td>
<td>{emp.category}</td>
<td>
  <button onClick={()=>{handleView(emp.id)}} className='btn btn-primary link'>{read}  Read</button>
  <button onClick={()=>{handleEdit(emp.id)}} className='btn btn-success mx-3'>{edit}  Edit</button>
  <button onClick={()=>{handleDelete(emp.id)}} className='btn btn-danger'> {delet}  Delete</button>
</td>
</tr> 
       
    ))}
    
  </tbody>
</table>
       </div>
      
    </div>
  )
}

export default EmpData
