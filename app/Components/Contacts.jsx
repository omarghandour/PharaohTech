import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
                  <a  className='number'  href="tel:+201065065760"><h6>+201065065760</h6></a>
               </div>
          </div>
          <div className="cRight">
            <Link href={'https://www.facebook.com/profile.php?id=61552004890350&sk=friends_likes'} >
          <Image
          src="/facebook-color-svgrepo-com.svg"
          alt="Next.js Logo"
          width={50}
          height={50}
          priority
        /></Link>
         <Link href={'https://www.instagram.com/pharaohtech2/'}>
         <Image
          src="/instagram-1-svgrepo-com.svg"
          alt="Next.js Logo"
          width={50}
          height={50}
          priority
        /></Link>
         <Link href={'https://twitter.com/PharaohThe38806'}>
         <Image
          src="/twitter-svgrepo-com.svg"
          alt="Next.js Logo"
          width={50}
          height={50}
          priority
        /></Link>
          </div>
            <p style={{color: 'white' }}>&#169; Omar Ghandour 2023</p>

     </div>

    </section>
  )
}

export default Contacts
