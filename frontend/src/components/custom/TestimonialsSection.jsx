import React from 'react'

function TestimonialsSection() {
    return (
        <div className='flex justify-center'>
            <div className="absolute top-[4483px] w-[1331px] h-[412px] flex justify-center">
                <div className="absolute h-[19px] left-0 font-['Roboto'] font-medium text-[16px] leading-[100%] tracking-[0.32em] text-white/80">
                    OUR CUSTOMERS
                </div>

                <div className='flex absolute mt-[112px] w-[96%]'>
                    <div className='flex justify-start items-end gap-4'>
                        <div className="w-[46px] h-[143px] text-[#F7F7F7] font-['Coolvetica'] font-normal text-[118.84px] leading-[100%] tracking-[0em]">
                            “
                        </div>

                        <div className="w-[80%] h-[104px] flex items-start font-normal text-[38px] leading-[109%] tracking-[0em] text-[#D2D2D2]">
                            <p className='w-[750px]'>Understated, but unforgettable. It feels like it was made for me</p>
                        </div>
                    </div>

                    <div className='w-full flex justify-end items-start gap-12'>
                        <div className='h-full flex items-center'>
                            <p className='text-[#D2D2D2]'>
                                &#x25C0;
                            </p>
                        </div>

                        <div className="w-[126px] h-[126px]">
                            <img src="test1.jpg" className='w-[126px] h-[126px] rounded-full' alt="testimonial" />
                        </div>

                    </div>
                </div>





                <div className='mt-[112px] w-[96%] flex'>

                    <div className='w-[63.54%] h-full flex items-end'>
                        <div className='flex flex-col gap-4'>
                            <div className='ml-[60px] h-[36px] text-[24px] leading-[150%] font-normal tracking-[0%] text-[#C4C4C4]'>
                                Random Woman
                            </div>

                            <div className="ml-[60px] h-[24px] text-[16px] leading-[150%] font-medium tracking-[0%] text-[#535353]">
                                NY, USA
                            </div>

                        </div>
                    </div>
                    <div className='w-[36.46%] flex items-end justify-end'>
                        <div className="h-[52%] size-[126px] flex flex-col justify-between items-center">
                            <img src="test2.jpg" className='size-[69px] opacity-[0.26] rounded-full' alt="testimonial" />
                            <img src="test3.jpg" className='size-[69px] opacity-[0.26] rounded-full' alt="testimonial" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsSection