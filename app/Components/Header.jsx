import React from 'react'
import Image from 'next/image'
import { faFacebookMessenger, faTwitter, faYoutube, faWhatsapp, faSkype } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Header = () => {
  return (
    <div className=''>
        <div className="upper-header bg-[#23cc88] text-white font-semibold flex justify-evenly flex-nowrap items-center py-3">
            <div className="contact-details-header hidden md:flex justify-evenly  w-[40%]">
                <div className="time-date">9:30am - 6:30pm Mon - Sun</div>
                <div className="tel">+256709675989</div>
            </div>
            <div className="brand-icons flex md:w-[30%] w-3/6 justify-evenly
                ">
                    <FontAwesomeIcon icon={faFacebookMessenger} className='fa'/>
                    <FontAwesomeIcon icon={faTwitter} className='fa'/>
                    <FontAwesomeIcon icon={faWhatsapp} className='fa'/>
                    <FontAwesomeIcon icon={faSkype} className='fa'/>
                    <FontAwesomeIcon icon={faYoutube} className='fa'/>
                </div>
        </div>
        <div className="bottom-header flex justify-between px-4 md:justify-evenly items-center flex-1 py-6">
            <div className="logo">
                <Image 
                    src={'/assets/logo/logo.png'}
                    height= {100}
                    width = {100}
                    alt = "Kinter logo"
                />
            </div>
            <div className="menu hidden md:block md:w-[50%]">
                <ul className="flex justify-evenly font-semibold text-gray-800">
                    <Link href={'/'}>HOME</Link>
                    <Link href={'/about'}>ABOUT</Link>
                    <Link href={'/staff'}>STAFF</Link>
                    <Link href={'/'}>CLASSES</Link>
                    <Link href={'/'}>SHOP</Link>
                    <Link href={'/'}>BLOG</Link>
                    <Link href={'/contact'}>CONTACT</Link>
                </ul>
            </div>
            <div className="admission-btn">
                <button 
                    className='btn-header px-6 py-4 bg-green-500 rounded-md text-white font-semibold'   
                >ADMISSION NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Header