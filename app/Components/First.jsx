import React from 'react'
import Image from 'next/image'
import './component.css'
const First = () => {
  return (
    <section className='First'>
<div className="top">
     <div className="logo">
     <Image
          src="/scarab-with-wings-svgrepo-com (1).svg"
          alt="Next.js Logo"
          width={100}
          height={100}
          priority
        />
     </div>
     <h3>Pharaoh Tech.</h3>
</div>
<div className="content">
     <h1>A company that transforms your
ideas into stunning websites.</h1>
<button className='btn'>Contact us</button>

</div>
    </section>
  )
}

export default First