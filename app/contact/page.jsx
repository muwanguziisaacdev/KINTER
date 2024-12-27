import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div>
        <div className="slider section-notch text-white">
            <div className="slider-content flex flex-col flex-nowrap justify-center md:pl-[100px] gap-5 md:w-[50%] px-5 h-[100%]">
                <h2 className='text-6xl font-bold font-[cursive]'>Our Contact Info</h2>
            </div>
        </div>
        <div className='contact-area my-28'>
            <div className='flex flex-wrap justify-evenly'>
                <div className="contact-card">
                    <FontAwesomeIcon icon={faLocation} className='fa' />
                    <h3>Address Line</h3>
                    <p>
                        <span>Bowery St, New York,</span>
                        <span>NY 10013, USA</span>
                    </p>
                </div>
                <div className="contact-card">
                <FontAwesomeIcon icon={faPhone} className='fa' />
                    <h3>Phone Number</h3>
                    <p>
                        <a href='tel:256709675989'>Bowery St, New York,</a>
                        <a href='tel:256757454780'>NY 10013, USA</a>
                    </p>
                </div>
                <div className="contact-card">
                <FontAwesomeIcon icon={faEnvelopeOpen} className='fa' />
                <h3>Mail Address</h3>
                    <p>
                        <a href='mailto:muwanguziisaacuganda@gmail.com'>Bowery St, New York,</a>
                        <a href='tmailto:victorisaacsolomon@gmail.com'>NY 10013, USA</a>
                    </p>
                </div>
            </div>
            <form action="" className='contact-form mt-10 bg-white shadow-lg py-10'>

                <div className="form-wrapper flex flex-col gap-5 w-4/5 m-auto">
                    <div className="input-wrapper flex flex-col md:grid md:grid-cols-2 gap-5">
                        <input type="text" placeholder='Type your name*' />
                        <input type="email" placeholder='Type your email*' />
                        <input type="tel" placeholder='Type your number*' />
                        <input type="text" placeholder='Type your website*' />
                    </div>
                    <textarea className='w-4/5 md:w-3/6 m-auto' cols={10} rows={10}  placeholder='Type your message'></textarea>
                    <button className='thm-btn thm-btn-2 w-2/5 md:w-1/5 m-auto '>SEND MESSAGE</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact