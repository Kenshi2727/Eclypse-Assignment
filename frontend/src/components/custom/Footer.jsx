import { ArrowUp } from 'lucide-react'
import { Slash } from "lucide-react"
import React from 'react'

function Footer() {
    return (
        <div className='flex justify-center'>
            <div className='flex justify-center items-center w-[1340px] h-[215px] absolute top-[5067px] p-[24px] gap-[24px] bg-[#090808]'>
                <div className='w-[196px] h-[167px] gap-[67px] flex flex-col justify-end'>
                    <div className='w-[117px] h-[32px] gap-2 flex cursor-pointer'>
                        <div className='w-full h-[32px] font-medium text-[32px] leading-[100%] tracking-[-0.04em] text-[#D4D5D9]'>
                            Eclypse
                        </div>
                        <div>
                            <ArrowUp className='rotate-45' />
                        </div>
                    </div>

                    <div className='w-[196px] h-[68px] gap-1 font-medium text-[14px] leading-[140%] tracking-[0em] text-[#D4D5D9] flex flex-col'>
                        <div className='w-[196px] h-[20px] flex gap-4'>
                            Home
                            <span className='w-[6px] h-[20px] opacity-40 font-degular font-normal text-[14px] leading-[140%] tracking-[0em] text-[#D4D5D9]'> / </span> About
                            <span className='w-[6px] h-[20px] opacity-40 font-degular font-normal text-[14px] leading-[140%] tracking-[0em] text-[#D4D5D9]'> / </span> Buy
                            <span className='w-[6px] h-[20px] opacity-40 font-degular font-normal text-[14px] leading-[140%] tracking-[0em] text-[#D4D5D9]'> / </span>
                        </div>
                        <div className="w-[115px] h-[20px] flex items-center justify-between">
                            <span className="text-[14px] font-degular font-normal leading-[140%] tracking-[0em] text-[#D4D5D9]">Our Customers </span>
                            <span className="ml-[4px] w-[6px] h-[20px] opacity-40 font-degular font-normal text-[14px] leading-[140%] tracking-[0em] text-[#D4D5D9]"> / </span>
                        </div>

                        <div className='w-[56px] h-[20px] flex gap-4'>
                            Contacts
                        </div>
                    </div>
                </div>
                <div className='w-[341.33px] h-[167px] gap-[32px] flex flex-col justify-end'>
                    <div className='w-[160px] h-[45px] gap-2'>
                        <div className='w-[60px] h-[13px] opacity-60 font-inter font-medium text-[10px] leading-[130%] tracking-[0.15em] uppercase text-[#D4D5D9]'>
                            Contact
                        </div>
                        {/* 153 */}
                        <div className='w-full h-[24px] font-medium text-[20px] leading-[120%] tracking-[-0.02em] text-[#D4D5D9]'>
                            +91 123-456-7890
                        </div>
                    </div>
                    <div className='w-[125px] h-[41px] gap-2'>
                        <div className='w-[37px] h-[13px] opacity-60 font-medium text-[10px] leading-[130%] tracking-[0.15em] uppercase text-[#D4D5D9]'>
                            Email
                        </div>
                        <div className='w-full h-[20px] font-normal text-[14px] leading-[140%] tracking-[0em] text-[#D4D5D9]'>
                            eclypse@gmail.com
                        </div>
                    </div>
                </div>
                <div className='w-[341.33px] h-[167px] gap-[32px]'></div>
                <div className='w-[341.33px] h-[167px] flex justify-between'>
                    <div className='w-full flex justify-end'>
                        <div className='w-10 h-10 ease-out duration-300 bg-[#FFFFFF] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#f24e1e] group'>
                            <ArrowUp className='text-black group-hover:text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer