import React from 'react'
import heroVid from '../assets/video.mp4'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <video className='object-cover h-full w-full absolute -z-10' src={heroVid} autoPlay muted loop/>
        <div className='flex flex-col justify-center items-center h-[90%]'>
            <h1 className='text-white '>Decentralized</h1>
            <h1 className='text-white'><span className='text-[#00d8ef]'>Trading </span>Protocol</h1>
            <p className='text-white text-xl text-center mb-2'>Guaranteed liquidity tradinfgor millions of users and top ethereum applications</p>
            <div className='flex space-x-4 justify-center  '>
                <button className='text-white'>Use Defi</button>
                <button className='text-white'>FAQ</button>
            </div>
        </div>
        <div className=' flex justify-center'><h3 className='text-white text-xl text-center font-bold'>Total views secured is $24,525,897.90</h3></div>   
    </div>
    
  )
}

export default Hero