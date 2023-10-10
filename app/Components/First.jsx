import React from 'react'
import Image from 'next/image'
import './component.css'
import Link from 'next/link'
const First = () => {
  return (
    <section className='First'>
<div className="top">
     <div className="logo">
     <Image
          src="/cc.svg"
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
<Link className='btn' href={'#contacts'}>Contact us</Link>

</div>
    </section>
  )
}

export default First
