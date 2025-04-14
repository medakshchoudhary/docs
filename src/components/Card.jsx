import React from 'react'
import { motion } from "motion/react"
import { FiFileText } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Card = ({data,reference}) => {

  return (
    <motion.div drag whileDrag={{ scale: 1.2}} dragConstraints={reference} className='relative w-52 h-60 rounded-[50px] px-6 py-8 bg-zinc-900/90 text-white overflow-hidden'>
        <FiFileText />
        <p className='mt-4 h-20 leading-tight text-sm overflow-hidden mask-b-from-10'>{data.desc}</p>
        <div className="footer w-full absolute bottom-0 left-0">
            <div className='flex justify-between items-center pl-8 pr-7 py-1 mb-5'>
                <p className='text-sm'>{data.fileSize}</p>
                <span className='w-6 h-6 flex justify-center items-center bg-zinc-700 hover:bg-zinc-600 transition-all rounded-full pb-[0.1rem]'>
                    {data.isUploaded ? <LuDownload size="0.75rem" /> :  <IoClose size="0.95rem" />}
                </span>
            </div>
            {data.isUploaded ? (
            <div className="bg-green-600 -mt-3 py-3 flex items-center justify-center cursor-pointer">
                <h3 className='text-sm font-[Gilroy-SemiBold]'>{data.footer.text}</h3>
            </div>
            ) : (
            <div className="bg-blue-600 -mt-3 py-3 flex items-center justify-center">
                <div className="relative w-[70%] flex items-center justify-start ">
                    <div className="absolute uploader my-2 border-2 w-[40%] rounded-full"></div>
                    <div className="uploader my-2 border-2 border-zinc-400 w-full rounded-full"></div>
                </div>
            </div>
            )}
        </div>
    </motion.div>
  )
}

export default Card