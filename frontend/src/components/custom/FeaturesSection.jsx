import React from 'react'
import { ArrowDown } from 'lucide-react';

function FeaturesSection() {
    return (
        <div className='flex justify-center'>
            <div className="absolute w-[1342px] top-[3924px] border-b-1 border-[#3D3D3D] flex justify-between items-center py-8">
                <div className='w-[800px] h-[38px] font-normal text-[32px] leading-[100%] tracking-[-0.02em] text-white'>
                    Size & Fit
                </div>
                <ArrowDown size={48} />
            </div>

            <div className="absolute w-[1342px] top-[4077px] border-b-1 border-[#3D3D3D] flex justify-between items-center py-8">
                <div className='w-[800px] h-[38px] font-normal text-[32px] leading-[100%] tracking-[-0.02em] text-white'>
                    Delivery & Returns
                </div>
                <ArrowDown size={48} />
            </div>

            <div className="absolute w-[1342px] top-[4230px] border-b-1 border-[#3D3D3D] flex justify-between items-center py-8">
                <div className='w-[800px] h-[38px] font-normal text-[32px] leading-[100%] tracking-[-0.02em] text-white'>
                    How This Was Made
                </div>
                <ArrowDown size={48} />
            </div>

        </div >
    )
}

export default FeaturesSection