import React from 'react'

const page = () => {
  return (
    <main className='h-screen bg-gray-800 grid place-content-center'>
        <div className="overflow-hidden max-w-md md:max-w-2xl bg-indigo-600">
            <div className='md:flex'>
              <div className="red-container md:w-48 h-48 bg-red-500 md:shrink-0">Hello there this is the red container</div>
              <div className='bg-gray-500  m-auto'>
                  <div className="blue-container  bg-blue-500">Hello there this is the blue container</div>
                  <div className="green-container  bg-green-500">Hello there this is the green container</div>
              </div>
            </div>
        </div>
    </main>
  )
}

export default page