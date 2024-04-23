import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Services123 = () => {
  return (
    <div>
      <p>
      <Link to="/services/service1">Service 1</Link> 
      <Link to="/services/service2">Service 2</Link> 
      <Link to="/services/service3">Service 3</Link>
      <Outlet />
      </p>
    </div>
  )
}

export default Services123
