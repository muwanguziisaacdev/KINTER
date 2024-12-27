import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className="slider section-notch text-white">
            <div className="slider-content flex flex-col flex-nowrap justify-center md:pl-[100px] gap-5 md:w-[50%] px-5 h-[100%]">
            <h2 className='text-6xl font-bold font-[cursive]'>Meet Our Staffs</h2>
            </div>
        </div>
        <div className="teacher-area flex justify-center my-28">
            <div className="teacher-detail block md:grid md:grid-cols-4 md:gap-7">
                <div className="teacher-item ">
                    <Image 
                        src={'/assets/teacher/img-01.jpg'}
                        width={300}
                        height={300}
                        alt='Teacher '
                        className='teacher-img'
                    />
                    <h4 className=''>Broklyn Doel</h4>
                    <p>Sains Teacher</p>
                </div>
                <div className="teacher-item">
                    <Image 
                        src={'/assets/teacher/img-02.jpg'}
                        width={300}
                        height={300}
                        alt='Teacher '
                        className='teacher-img'
                    />
                    <h4 className=''>Alex Jhonson</h4>
                    <p>Art Teacher</p>
                </div>
                <div className="teacher-item">
                    <Image 
                        src={'/assets/teacher/img-03.jpg'}
                        width={300}
                        height={300}
                        alt='Teacher '
                        className='teacher-img'
                    />
                    <h4 className=''>Janaton Doe</h4>
                    <p>English Teacher</p>
                </div>
                <div className="teacher-item">
                    <Image 
                        src={'/assets/teacher/img-04.jpg'}
                        width={300}
                        height={300}
                        alt='Teacher '
                        className='teacher-img'
                    />
                    <h4 className=''>Robot Jhonson</h4>
                    <p>Math Teacher</p>
                </div>
                <div className="teacher-item">
                    <Image 
                        src={'/assets/teacher/img-05.jpg'}
                        width={300}
                        height={300}
                        alt='Teacher '
                        className='teacher-img'
                    />
                    <h4 className=''>Helami Lie</h4>
                    <p>Sains Teacher</p>
                </div>
                <div className="teacher-item">
                    <Image 
                        src={'/assets/teacher/img-06.jpg'}
                        width={300}
                        height={300}
                        alt='Teacher '
                        className='teacher-img'
                    />
                    <h4 className=''>Alex Lia</h4>
                    <p>Art Teacher</p>
                </div>
                <div className="teacher-item">
                    <Image 
                        src={'/assets/teacher/img-07.jpg'}
                        width={300}
                        height={300}
                        alt='Teacher '
                        className='teacher-img'
                    />
                    <h4 className=''>Jonson Rabe</h4>
                    <p>English Teacher</p>
                </div>
                <div className="teacher-item">
                    <Image 
                        src={'/assets/teacher/img-08.jpg'}
                        width={300}
                        height={300}
                        alt='Teacher '
                        className='teacher-img'
                    />
                    <h4 className=''>Robin Doe</h4>
                    <p>Math Teacher</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default page