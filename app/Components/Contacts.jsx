import React from 'react'
import Image from 'next/image'
const Contacts = () => {
  return (
    <section id='contacts' className='Contacts'>
     <div className="cBottom">
          <div className="cLeft">
               <div className="con"><h4>Mailing address</h4>
               <h6>Mitghamer, Dakahlia ,Egypt</h6>
               </div>
               <div className="con">
                    <h4>Email Address</h4>
                    <h6>thechpharaoh@gmail.com</h6>
               </div>
               <div className="con">
                    <h4>Phone Number</h4>
                    <h6>+201557775180</h6>
               </div>
          </div>
          <div className="cRight">
          <Image
          src="/facebook-color-svgrepo-com.svg"
          alt="Next.js Logo"
          width={50}
          height={50}
          priority
        />
         <Image
          src="/instagram-1-svgrepo-com.svg"
          alt="Next.js Logo"
          width={50}
          height={50}
          priority
        />
         <Image
          src="/twitter-svgrepo-com.svg"
          alt="Next.js Logo"
          width={50}
          height={50}
          priority
        />
          </div>
     </div>

    </section>
  )
}

export default Contacts