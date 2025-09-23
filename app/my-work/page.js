import { fetchWorksDetail } from '@/apis/getWorkData';
import { Services } from '@/components/home/Services'
import React from 'react'

async function page() {
   const { workDetails } = await fetchWorksDetail();
    // console.log(workDetails,"work Details")
  return (
    <div className="min-h-screen bg-gray-950  text-white">
          <section className="relative h-[200px] sm:h-[400px] flex items-center justify-center overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-pink-900/20"></div> */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/my-work.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="relative z-10 myContainer text-center">
          <h1 className="text-2xl sm:text-6xl pt-10  font-bold mb-6 ">
            {/* bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent */}
            My Work
          </h1>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-pulse delay-1000"></div>
      </section>
      <div className='myContainer py-14'>
           <Services useAt="my-work" workDetails={workDetails} />

      </div>
    </div>
  )
}

export default page