import React from 'react'
import BubbleButton from './BubbleButton'
import ArrowSvg from './ArrowSvg'
import ArrowDown from './ArrowDown'
import { useState } from 'react'
import Infosvg from './Infosvg'

const PackagesBox = ({ data, className }) => {
    const [isOpen, setisOpen] = useState(false);

    const toggleMenu = () => setisOpen((prev) => !prev);

    return (
        <div className={`package-box border-2 border-[#002E55] px-[30px] py-[20px] rounded-[12px] ${ className }`}>
            <div className="top mb-7 mt-2.5">
                <p className='text-[#FCFCFC] font-normal text-[16px] mb-1 uppercase'>{data.step}</p>
                <h5 className='text-[#80DBB4] text-[52px] font-medium mb-3.5'>{data.price} <span className='text-[18px] font-light text-[#e2e2e2]'>/ {data.accounts}</span></h5>
                <BubbleButton className='my-btn text-white font-medium w-full bg-blue-gradient hover:opacity-60 transition' parent_Class="w-full">Buy Challenges</BubbleButton>
            </div>
            <div className="middle">
                <ul className={`mb-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-[177px]'}`}>
                    {data.list.map((item, index) => (
                        <li key={index} className='flex items-center justify-between mb-3'>
                            <p className='text-[#FCFCFC] font-normal text-[16px]'>{item.key} <button className='cursor-pointer'><Infosvg /></button></p>
                            <p className='text-[#FCFCFC] font-normal text-[16px]'>{item.value}</p>
                        </li>
                    ))}
                </ul>
                <button onClick={toggleMenu} className='flex justify-center w-full items-center text-[#FCFCFC] gap-3 cursor-pointer'>{isOpen ? 'View less' : 'View more'} <ArrowDown /></button>
            </div>
        </div>
    )
}

export default PackagesBox