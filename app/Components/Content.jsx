import React from 'react'
import Image from 'next/image'
const Content = () => {
  return (
    <div className='Content'>
     <Image
          src="/website-program-svgrepo-com.svg"
          alt="Next.js Logo"
          width={200}
          height={200}
          priority
        />
     <h1>Whether you need a simple landing page, a fully functional e-commerce site, or a custom web application, we have the skills and experience to make it happen.
</h1>
    </div>
  )
}

export default Content