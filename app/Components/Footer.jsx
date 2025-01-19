import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDribbble, faBehance, faInstagram, faFacebook, faGooglePlus, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div className=''>
        <div className="footer-wrap pb-20 px-4">
            <div className="top-wrapper block md:flex flex-wrap text-white justify-evenly  relative pt-5">
                <div className="telephone contact-item">
                    <div className="telephone-img">
                        <Image 
                            src={'/assets/icon/ft01.png'}
                            width={50}
                            height={50}                        
                            alt='Telephone call'
                            />
                    </div>
                    <div className="">
                        <h4>
                            <span>Give us a call</span>
                            <span className='leading-9'>+256 709675989</span>
                        </h4>
                    </div>
                </div>
                <div className="email contact-item">
                    <div className="email-img">
                    <Image 
                            src={'/assets/icon/ft02.png'}
                            width={50}
                            height={50}                        
                            alt='Send Email'
                            />
                    </div>
                    <div className="">
                        <h4>
                            <span>Send us a Message</span>
                            <span className='leading-9'>kinter@info.com</span>
                        </h4>
                    </div>
                </div>
                <div className="location contact-item">
                    <div className="location-img">
                    <Image 
                            src={'/assets/icon/ft03.png'}
                            width={50}
                            height={50}                        
                            alt='Visit our location'
                            />
                    </div>
                    <div className="">
                        <h4>
                            <span>Visit our location</span>
                            <span className='leading-9'>Namilyango, Seeta Mukono Uganda</span>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="bottom-wrapper grid md:grid-cols-3 md:px-20 py-10 text-white">
                <div className="about">
                    <h3>About Kinter</h3>
                    <p className='max-w-[400px] leading-6'>Monotne deplos copertve chanva andng crorate Qhanin Unique Qnderwhe Premum Convere With Uheng Mutmed Nquel Undehee Mandnge theme Qhann Unqu Qndewhe Premum Converenc With Aheing Mutmeda Nquel Undehele</p>
                    <p className='font-medium text-xl py-4'>Follow us :</p>
                    <div className="link-icons">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faDribbble} />
                        <FontAwesomeIcon icon={faBehance} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
                <div className="recent-blog-posts">
                    <h3>Recent Blog Posts</h3>
                    <div className="blog-list">
                        <ul>
                            <li>
                                <Image 
                                    src={'/assets/portfolio/port01.jpg'}
                                    width={100}
                                    height={100}
                                    alt='blog'
                                />
                                <p>
                                    <span>27th Dec 2024</span>
                                    <span>Why Children need a healthy  Environment</span>
                                </p>
                            </li>
                            <li>
                                <Image 
                                    src={'/assets/portfolio/port05.jpg'}
                                    width={100}
                                    height={100}
                                    alt='blog post'
                                />
                                <p>
                                    <span>27th Dec 2024</span>
                                    <span>Planting Seeds in the Hearts of Preschoolers</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="newsletter">
                    <h3>NewsLetter Subscription</h3>
                    <p>Enter you Email and get latest updates offers</p>
                    <p>Subscribe Us</p>

                    <form action="" className='flex flex-col  justify-center'>
                        <input type="text" placeholder='Enter your email' className='w-4/5 m-auto'/>
                        <button className='thm-btn thm-btn-2 w-2/5 mt-10 m-auto'>SUBSCRIBE NOW!</button>
                    </form>
                </div>
            </div>
        </div>
        <div ></div>
        <div className="author-details flex-col-reverse md:flex  justify-center md:justify-between py-5 items-center px-10">
            <h4 className='md:text-xl py-4'>2024 Kinter Developed by
                <span className='text-green-500 text-xl px-4'>Muwanguzi Isaac</span>
                 </h4>
            <div className=' author-link-icons w-3/6 justify-evenly'>
                <FontAwesomeIcon icon={faFacebook} className='text-white bg-[#3b5999] rounded-full'/>
                <FontAwesomeIcon icon={faGooglePlus} className='bg-[#dd4b39] '/>
                <FontAwesomeIcon icon={faTwitter} className='bg-[#55acee]'/>
                <FontAwesomeIcon icon={faPinterest} className='bg-[#bd081c]'/>
                <FontAwesomeIcon icon={faLinkedin} className='bg-[#007bb6]'/>
            </div>
        </div>
    </div>
  )
}

export default Footer