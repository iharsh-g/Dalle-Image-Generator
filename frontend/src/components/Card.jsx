import React, { useState } from 'react'

import { download } from '../assets'
import {downloadImage} from '../utils'

function Card({ _id, name, prompt, photo }) {
    
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="rounded-xl relative hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:scale-110 hover:z-[1]
     duration-200 transition-all ease-in" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img
            className="w-full h-auto object-cover rounded-xl"
            src={photo}
            alt={prompt}
        />

        {
            isHovered ? <div className='absolute z-[5] left-0 bottom-0 top-0 right-0 bg-black bg-opacity-10 rounded-xl'></div> : <></>
        }
        
        {/* Detail card */}
        <div className={`absolute z-[10] bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md transition-all duration-300 ease-in ${isHovered ? 'opacity-100 max-h-[94.5%]' : 'opacity-0 max-h-0'}`}>
            <p className="text-white text-sm overflow-y-auto prompt">{prompt}</p>

            <div className="mt-5 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">{name[0]}</div>
                    <p className="text-white text-sm">{name}</p>
                </div>
                <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
                    <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Card