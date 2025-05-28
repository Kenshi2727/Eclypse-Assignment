import React from 'react'

function BrandingSection() {
    return (
        <div className='flex justify-center'>
            <div className='absolute top-[1510px] w-[1339px] grid grid-cols-3 grod-rows-2 gap-8'>
                <div className='relative col-span-2 '>
                    <video
                        src="branding.mp4"
                        className='object-cover rounded-[5px] h-[489px]'
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
                <img src="grid1.jpg" className='w-[424px] h-[489px] top-[1510px] rounded-[5px]' />

                <div>

                </div>
            </div>
        </div>
    )
}

export default BrandingSection