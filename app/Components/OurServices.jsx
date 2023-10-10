import React from 'react'
import Image from 'next/image'
const OurServices = () => {
  return (
    <section className='OurServices'>
     <div className="topser">
      <h1>Our Services</h1>
     </div>
     <div className="cards">
      <div className="card">
      <Image
      className='ddd'
          src="/column-chart-svgrepo-com.svg"
          alt="Next.js Logo"
          width={50}
          height={50}
          priority
        />
        <h4>For businesses</h4>
        <p>Get the best website for your business.</p>
      </div>
      <div className="card">
      <Image
      className='ddd'
          src="/user-svgrepo-com.svg"
          alt="Next.js Logo"
          width={50}
          height={50}
          priority
        />
                <h4>For personal Use</h4>
        <p>Get the best website for yourself.</p>
      </div>
      <div className="card">
      <Image
      className='ddd'
          src="/cell-phone-svgrepo-com.svg"
          alt="Next.js Logo"
          width={50}
          height={50}
          priority
        />
                <h4>For Content Creators</h4>
        <p>Get the best website for your career.</p>
      </div>
     </div>
     <h1>And more!</h1>
    </section>
  )
}

export default OurServices