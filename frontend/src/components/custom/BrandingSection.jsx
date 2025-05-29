import React from 'react'

function BrandingSection() {
    return (
        <div className='flex justify-center'>
            <div className='absolute top-[1510px] w-[1339px] group grid grid-rows-2 grid-cols-3 gap-8 overflow-hidden'>
                <div className='relative col-span-2 group/video'>
                    <video
                        src="branding.mp4"
                        className='object-cover rounded-[5px] h-[489px] w-full transition-all duration-300'
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>

                <div className='relative group/image'>
                    <img
                        src="grid1.jpg"
                        className='w-full h-[489px] rounded-[5px] object-cover transition-all duration-300'
                    />
                    <div
                        className='absolute inset-0 flex items-end justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-[5px]'
                        style={{ background: '#000000AD' }}
                    >
                        <p className='text-white text-[40px] leading-[100%] tracking-[-0.02em] font-medium px-4 pb-8'>Structured tailoring for all-day movement</p>
                    </div>
                </div>

                <div className='relative group/image w-[1339px]'>
                    <img
                        src="grid2.jpg"
                        className='rounded-[5px] w-[424px] h-[397px] absolute top-[20px] object-cover transition-all duration-300'
                    />
                    <div
                        className='absolute top-[20px] w-[424px] h-[397px] flex items-end justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-[5px]'
                        style={{ background: '#000000AD' }}
                    >
                        <p className='text-white text-[40px] leading-[100%] tracking-[-0.02em] font-medium px-4 pb-8'>Structured tailoring for all-day movement</p>
                    </div>
                </div>

                <div className='relative group/image w-[1339px]'>
                    <img
                        src="grid3.jpg"
                        className='rounded-[5px] w-[424px] h-[397px] absolute top-[20px] object-cover transition-all duration-300'
                    />
                    <div
                        className='absolute top-[20px] w-[424px] h-[397px] flex items-end justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-[5px]'
                        style={{ background: '#000000AD' }}
                    >
                        <p className='text-white text-[40px] leading-[100%] tracking-[-0.02em] font-medium px-4 pb-8'>Structured tailoring for all-day movement</p>
                    </div>
                </div>

                <div className='relative group/image w-[1339px]'>
                    <img
                        src="grid4.jpg"
                        className='rounded-[5px] w-[424px] h-[397px] absolute top-[20px] object-cover transition-all duration-300'
                    />
                    <div
                        className='absolute top-[20px] w-[424px] h-[397px] flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 rounded-[5px]'
                        style={{ background: '#000000' }}
                    >
                        <img src="Hero_header.svg" alt="hero-header" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandingSection