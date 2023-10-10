import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <section id='about' className='About'>
     <div className="left">
          <h1>About us</h1>
          <p>a company that creates websites for
                businesses of all sizes and sectors. 
                We believe that every business deserves a 
                professional and attractive online presence
                 that showcases their products, services, and values.</p>
     </div>
     <div className="right">
          <div className="icontainer">
                  <Image
          src="/_d1263cc1-bb55-4944-b283-6e0f597a8abb.jpeg"
          alt="Next.js Logo"
          width={575}
          height={865}
          priority
        />
          </div>
  
     </div>
    </section>
  )
}

export default About