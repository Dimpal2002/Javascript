import React, { Suspense, lazy } from 'react'
const Home1 = lazy(() => import('./Home123'));

function Home() {
  return (
    <><Suspense fallback={<div>Loading... </div>}>
      <Home1 />

    </Suspense></>
  )
}

export default Home
