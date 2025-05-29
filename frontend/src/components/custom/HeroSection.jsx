import React from 'react'

function HeroSection() {
    return (
        <div className='text-white pt-[197px] h-[883px] flex justify-center'>
            <div className='relative w-[1339px]'>
                <header id="hero" className='w-full h-[129px] absolute top-0 left-0'>
                    <img src="Hero_header.svg" alt="hero-header" />
                    <div className='absolute bottom-0 right-0'>
                        <p>&copy; {new Date().getFullYear()}</p>
                    </div>
                </header>
                <section className='absolute top-[156px] left-0 w-full h-[530px] rounded-[5px] overflow-hidden'>
                    <video
                        src="hero.mp4"
                        className='w-full h-full object-cover'
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                    <div className='w-[480px] h-[41px] absolute top-[469px] left-[835px]'>
                        <p className='font-normal text-[34.62px] leading-[100%] tracking-[-2%]'>A silhouette worth remembering</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HeroSection