import React from 'react'
import { FiFileText } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";

const Card = () => {
  return (
    <div className='relative w-60 h-72 rounded-[50px] px-6 py-8 bg-zinc-900/90 text-white overflow-hidden'>
        <FiFileText />
        <p className='mt-4 leading-tight text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="footer w-full absolute bottom-0 left-0">
            <div className='flex justify-between items-center px-8 py-3 mb-3'>
                <p>0.4mb</p>
                <span className='w-7 h-7 flex justify-center items-center bg-zinc-700 hover:bg-zinc-600 transition-all rounded-full pb-[0.1rem]'>
                    <LuDownload size="0.8rem"/>
                </span>
            </div>
            <div className='bg-green-600 py-4 flex items-center justify-center cursor-pointer'>
                <h3 className='text-sm font-[Gilroy-SemiBold]'>Look Now</h3>
            </div>
        </div>
    </div>
  )
}

export default Card