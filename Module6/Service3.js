import React, { Suspense, lazy } from 'react'
const Service31 = lazy(() => import('./Service3123'));


const Service3 = () => {
  return (
    <div>
       <><Suspense fallback={<div>Loading... </div>}>
      <Service31 />

    </Suspense></>
    </div>
  )
}

export default Service3
