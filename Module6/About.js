import React, { Suspense, lazy } from 'react'
const About1 = lazy(() => import('./About123'));

function About() {
  return (
    <><Suspense fallback={<div>Loading... </div>}>
    <About1 />

  </Suspense></>
  )
}

export default About
