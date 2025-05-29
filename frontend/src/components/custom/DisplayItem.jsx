import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../lib/axios';

function DisplayItem() {
    const [clicked, setClicked] = useState(false);
    const [activeSize, setActiveSize] = useState(null);
    const handler = () => {
        axiosInstance.get('/checkout')
            .then(response => {
                console.log("Response from /checkout:", response.data);
            })
            .catch(error => {
                console.error("Error fetching /checkout:", error);
            });
    };

    return (
        <div className='absolute top-[2850px] w-full h-[913px] grid grid-rows-2 xl:grid-cols-2 text-black'>
            <div className=' h-full'>
                <video
                    src="displayGif.mp4"
                    className='w-full h-[913px] object-cover'
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
            <div className='bg-[#F7F7F7] w-full h-[913px] flex flex-col items-center'>
                <div className='w-[654px] h-[402px] border-[#D9D9D9] border-b-1 pb-[500px]'>
                    <div className='w-[539px] h-[54px] my-[54px] font-medium text-[15px] leading-[100%] tracking-[-0.02em]'>
                        <p>
                            A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.
                        </p>
                    </div>
                    <div className='h-[198.87px] grid grid-cols-3 gap-4'>
                        <img src="disp1.jpg" alt="photo" className='w-[207.94625854492188px] h-full' />
                        <img src="disp2.jpg" alt="photo" className='w-[207.94625854492188px] h-full' />
                        <img src="disp3.jpg" alt="photo" className='w-[207.94625854492188px] h-full' />
                    </div>
                </div>

                <div className='w-[654px] h-[calc(702px-452px)] border-[#D9D9D9] border-b-1'>
                    <div className='flex gap-4'>
                        <div className='w-[116px] mt-[34px] h-[44px] font-medium text-[36px] leading-[100%] tracking-[-0.02em]'>
                            <p className='h-full'>₹ 7,999</p>
                        </div>
                        <div className='flex flex-col justify-end w-[135px] h-[44px] my-[34px] font-normal text-[15px] leading-[100%] tracking-[-0.02em] text-[#767676]'>
                            <p className='mb-4'>MRP incl. of all taxes</p>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-[174px] h-[24px] font-medium text-[20px] leading-[100%] tracking-[-0.02em] text-[#767676]'>
                            <p>
                                Please select a size
                            </p>
                        </div>
                        <div className='flex items-center w-[67px] h-[18px] font-medium text-[15px] leading-[100%] tracking-[-0.02em] text-[#767676] underline decoration-solid decoration-0 underline-offset-0'>
                            <p className='mt-2'>Size chart</p>
                        </div>
                    </div>

                    <div className='flex gap-8 mt-[34px] group'>
                        <button
                            className={`group-hover:cursor-pointer w-[82px] h-[49px] rounded-[4px] px-[31px] py-[15px] gap-[10px] ${(clicked && activeSize === 'XS') ? 'bg-black' : 'bg-[#D9D9D9]'} hover:bg-black transition ease-out duration-300 flex justify-center items-center`}
                            onClick={() => {
                                setClicked(true)
                                setActiveSize('XS');
                            }}
                        >
                            <p className='w-[20px] h-[18px] text-center font-medium text-[15px] leading-[100%] tracking-[-0.02em] text-[#767676]'>XS</p>
                        </button>
                        <button
                            className={`group-hover:cursor-pointer w-[82px] h-[49px] rounded-[4px] px-[31px] py-[15px] gap-[10px] ${(clicked && activeSize === 'S') ? 'bg-black' : 'bg-[#D9D9D9]'} hover:bg-black transition ease-out duration-300 flex justify-center items-center`}
                            onClick={() => {
                                setClicked(true)
                                setActiveSize('S');
                            }}
                        >
                            <p className='w-[20px] h-[18px] text-center font-medium text-[15px] leading-[100%] tracking-[-0.02em] text-[#767676]'>S</p>
                        </button>
                        <button
                            className={`group-hover:cursor-pointer w-[82px] h-[49px] rounded-[4px] px-[31px] py-[15px] gap-[10px] ${(clicked && activeSize === 'M') ? 'bg-black' : 'bg-[#D9D9D9]'} hover:bg-black transition ease-out duration-300 flex justify-center items-center`}
                            onClick={() => {
                                setClicked(true)
                                setActiveSize('M');
                            }}
                        >
                            <p className='w-[20px] h-[18px] text-center font-medium text-[15px] leading-[100%] tracking-[-0.02em] text-[#767676]'>M</p>
                        </button>
                        <button
                            className={`group-hover:cursor-pointer w-[82px] h-[49px] rounded-[4px] px-[31px] py-[15px] gap-[10px] ${(clicked && activeSize === 'L') ? 'bg-black' : 'bg-[#D9D9D9]'} hover:bg-black transition ease-out duration-300 flex justify-center items-center`}
                            onClick={() => {
                                setClicked(true)
                                setActiveSize('L');
                            }}
                        >
                            <p className='w-[20px] h-[18px] text-center font-medium text-[15px] leading-[100%] tracking-[-0.02em] text-[#767676]'>L</p>
                        </button>
                        <button
                            className={`group-hover:cursor-pointer w-[82px] h-[49px] rounded-[4px] px-[31px] py-[15px] gap-[10px] ${(clicked && activeSize === 'XL') ? 'bg-black' : 'bg-[#D9D9D9]'} hover:bg-black transition ease-out duration-300 flex justify-center items-center`}
                            onClick={() => {
                                setClicked(true)
                                setActiveSize('XL');
                            }}
                        >
                            <p className='w-[20px] h-[18px] text-center font-medium text-[15px] leading-[100%] tracking-[-0.02em] text-[#767676]'>XL</p>
                        </button>
                    </div>
                </div>


                <div className='flex w-[656px] h-[66px] gap-[32px] mt-[34px]'>
                    <button className='flex justify-center items-center w-[196px] h-[66px] border-[2px] border-[#C3C3C3] rounded-[8.71px]  py-[14.51px] gap-[24.18px]'>
                        <p className=' w-[100px] h-[24px] font-medium text-[19.35px] leading-[100%] tracking-[-0.02em] text-[#0D0D0D]'>
                            Add to Cart
                        </p>
                    </button>
                    <Link to="/checkout">
                        <button onClick={handler} className='flex justify-center items-center w-[428px] h-[66px] rounded-[8.71px] hover:bg-[#f24e1e] hover:cursor-pointer py-[14.51px] gap-[24.18px] bg-black transition ease-out duration-300'>
                            <p className='w-[34px] h-[24px] font-medium text-[19.35px] leading-[100%] tracking-[-0.02em] text-white'>
                                Buy
                            </p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DisplayItem