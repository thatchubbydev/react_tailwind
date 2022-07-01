import React from 'react'
import terminal from './assets/terminal.png'
const Cli = () => {
  return (
    // parent container
    <div className='bg-black px-8 flex pt-10 justify-between '>
        
            {/* text container */}
        <div className='text-white flex flex-col'>
            <h1>Superpowers for DEFI developers.</h1>
            <p>Checkout the <span className="text-[#00d8ef]">documentation</span>, the <span className="text-[#00d8ef]">quick start</span>  or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.</p>
        </div>
        {/* image container */}
        <div className='flex justify-center p-4 '>
            <img src={terminal} className=' max-w-[250px] shadow-lg shadow-cyan-500/50' />
        </div>
        </div>
        
    
  )
}

export default Cli