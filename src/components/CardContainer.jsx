import React from 'react'
import {SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si'
import {VscServerProcess} from 'react-icons/vsc'

const CardContainer = (props) => {
  return (
 
            <div className='flex justify-center  border my-2 px-8 py-6 text-left rounded-lg  '>
                {/* within card */}
                <div className=''>
                     {/* logo */}
                <div className='pb-2 bg-[#00d8ef] inline-flex rounded-full p-2 mb-2 mr-4' >{props.logo}</div>
                {/* text */}
                <div>
                    <h1 className='text-xl pb-4 '>{props.header}</h1>
                    <p>{props.text}</p>
                </div>
                </div>
               
            </div>
  )
}

export default CardContainer