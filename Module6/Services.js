import React, { Suspense, lazy } from 'react'

const Services1 = lazy(() => import('./Services123'));

function Services() {
  return (
    <div>
      <><Suspense fallback={<div>Loading... </div>}>
      <Services1 />

    </Suspense></>
      
    </div>
  )
}

export default Services
