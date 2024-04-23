import React, { Suspense, lazy } from 'react'
const Service11 = lazy(() => import('./Service1123'));

const Service1 = () => {
  return (
    <div>
     <><Suspense fallback={<div>Loading... </div>}>
      <Service11 />

    </Suspense></>
    </div>
  )
}

export default Service1
