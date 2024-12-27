import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <main>
          <div className="slider section-notch text-white">
            <div className="slider-content flex flex-col flex-nowrap justify-center md:pl-[100px] gap-5 md:w-[50%] px-5 h-[100%]">
              <h2 className='text-6xl font-bold font-[cursive]'>About Kinter</h2>
            </div>
          </div>
          <div className="about-area my-28 flex justify-center">
            <div className="md:flex gap-x-10 w-4/5">
              <div className="about-image">
                  <Image
                    src={'/assets/about/about-02.jpg'}
                    width={500}
                    height={500}
                    alt='about image'
                    className='md:w-[500px] md:h-[300px] w-full object-cover'
                  />
              </div>
              <div className="about-content px-7">
                <div className="md:w-2/5 text-gray-500">
                  <h3 className='text-4xl font-bold pb-4 text-gray-800 py-4 md:py-0'>With Efficiency to More Opportunities</h3>
                  <p className=''>Why I say old chap that is spiffing bodge, blag pardon me mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy, blag pardon me mufty Oxford butty bubble and squeak wind up</p>
                  <ul className='py-4 list-disc'>
                    <li>Best Learning School for Kids</li>
                    <li>Indoor/Outdoor Games for Little Kids</li>
                    <li>Professional & Qualified Teacher</li>
                    <li>Professional & Qualified Teacher</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </main>
  )
}

export default About