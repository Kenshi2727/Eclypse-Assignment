import React from 'react'
import { ArrowUpRight } from 'lucide-react';

function DescriptionSection() {
    return (
        <div className='flex justify-center'>
            <div className='relative w-[1339px]'>
                <div className="w-[800px] h-[174px] absolute top-[184px] left-0 text-[48px] leading-[100%] tracking-[-0.02em] font-normal font-neue-montreal text-white">
                    <p>Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.</p>
                </div>
                <div className="group w-[311.97px] h-[41.49px] border-b-2 absolute top-[437px] left-0 text-[24px] leading-[100%] tracking-[-0.02em] font-normal font-helvetica-neue flex justify-between hover:justify-center hover:text-black hover:bg-white transition-all ease-in-out duration-800 items-center text-white border-white">
                    <p>Learn more about Eclypse</p>
                    <ArrowUpRight
                        className="opacity-100 w-auto group-hover:opacity-0 group-hover:w-0 overflow-hidden transition-[opacity,width] duration-1 ease-in-out"
                    />
                </div>
            </div>
        </div>
    )
}

export default DescriptionSection