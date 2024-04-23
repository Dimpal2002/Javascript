import React, { Suspense, lazy } from 'react'
const Service21 = lazy(() => import('./Service2123'));


const Service2 = () => {
  return (
    <div>
      <><Suspense fallback={<div>Loading... </div>}>
      <Service21 />

    </Suspense></>
    </div>
  )
}

export default Service2
