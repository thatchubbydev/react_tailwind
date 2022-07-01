import React from 'react'
import {SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si'
import {VscServerProcess} from 'react-icons/vsc'
import CardContainer from './CardContainer'

const About = () => {
  return (
    // parent container
    <div className='text-white px-2 bg-black pt-12 text-center '>
        <div className=''>
        <h1 className='font-bold text-2xl'> A growing protocol ecosystem</h1>
        <p className='text-base text-center w-full justify-center mb-4'> The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.</p>
        </div>
        
        {/* card container */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full  '>
            <CardContainer logo = {<SiHiveBlockchain size={30}/>} header={'Reliable, tamper-proof network'} text = {'Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'}/>
            <CardContainer logo = {<SiHiveBlockchain size={30}/>} header={'Reliable, tamper-proof network'} text = {'Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'}/>
            <CardContainer logo = {<SiHiveBlockchain size={30}/>} header={'Reliable, tamper-proof network'} text = {'Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'}/>
            <CardContainer logo = {<SiHiveBlockchain size={30}/>} header={'Reliable, tamper-proof network'} text = {'Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'}/>
        </div>
    </div>
  )
}

export default About