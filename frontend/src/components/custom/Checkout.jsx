import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom';

function Checkout() {
    const [activeTab, setActiveTab] = React.useState('cart');

    return (
        <div className="w-full min-h-screen bg-white relative">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-[75px] bg-[#FFFFFF96] backdrop-blur-md shadow">
                {/* Logo */}
                <Link to="/">
                    <div className="flex items-center">
                        <div className="w-[48.79px] h-[45.46px] rounded-[5px]">
                            <img src="logo.jpg" alt="logo" className="w-full h-full object-contain" />
                        </div>
                    </div>
                </Link>


                {/* Navigation Links */}
                <div className="flex items-center space-x-20">
                    <a
                        href="#"
                        className={`text-md font-medium ${activeTab === 'about' ? 'text-black underline' : 'text-gray-400'
                            } underline-offset-8 transition-colors duration-300`}
                        onClick={() => setActiveTab('about')}
                    >
                        About Us
                    </a>
                    <a
                        href="#"
                        className={`text-md font-medium ${activeTab === 'wait' ? 'text-black underline' : 'text-gray-400'
                            } underline-offset-8 transition-colors duration-300`}
                        onClick={() => setActiveTab('wait')}
                    >
                        Waitlist
                    </a>
                    <a
                        href="#"
                        className={`text-md font-medium ${activeTab === 'cart' ? 'text-black underline' : 'text-gray-400'
                            } underline-offset-8 transition-colors duration-300`}
                        onClick={() => setActiveTab('cart')}
                    >
                        Cart
                    </a>
                </div>
            </nav>

            {/* Page Content */}
            <div className="pt-[199px] px-8 flex flex-col justify-center items-center text-black">
                <div className='h-[80px] w-[1329px] flex'>
                    <Link to="/">
                        <div className='w-[38px] h-full flex justify-center items-center text-black'>
                            <ChevronLeft />
                        </div>
                    </Link>

                    <div className='font-normal text-[25px] leading-[100%] tracking-[0%] w-[199px] h-full flex items-center'>
                        Shipping Address
                    </div>
                </div>

                <div className="w-[1329px] h-[689px]">
                    <div className='h-[625px] flex gap-4'>
                        <div className='w-[731px] h-[625px] border-[3px] border-[#C3C3C3] rounded-[9px]'>
                            <div className='p-8 h-full'>
                                <div className='h-[39.83732223510742] flex gap-4 items-center'>
                                    < div className='rounded-full size-[39.83732223510742px] border border-[#F63030] flex justify-center items-center'>
                                        <div className='w-[16px] h-[16px] rounded-full bg-[#F63030]'></div>
                                    </div>

                                    <div className='w-[203px] h-[30px] font-normal text-[25px] leading-[100%] tracking-[0%] text-black flex items-center'>
                                        Add New Address
                                    </div>
                                </div>


                                <div className='h-[calc(100%-39.83732223510742px)] grid grid-rows-4 gap-4 mt-4'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex flex-col gap-4'>
                                            <label htmlFor="First Name">First Name</label>
                                            <Input className='h-[67px] w-[303px] border-[2px] border-[#C8C8C8]' />
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <label htmlFor="Last Name">Last Name</label>
                                            <Input className='h-[67px] w-[303px] border-[2px] border-[#C8C8C8]' />
                                        </div>
                                    </div>
                                    <div className='flex justify-centre items-center'>
                                        <div className='flex flex-col w-full gap-4'>
                                            <label htmlFor="Street Name">Street Name</label>
                                            <Input className='h-[67px] w-full border-[2px] border-[#C8C8C8]' />
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <div className='flex flex-col gap-4'>
                                                <label htmlFor="Apt Number">Apt Number</label>
                                                <Input className='h-[67px] border-[2px] border-[#C8C8C8]' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col gap-4'>
                                                <label htmlFor="State">State</label>
                                                <Input className='h-[67px] border-[2px] border-[#C8C8C8]' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex flex-col gap-4'>
                                                <label htmlFor="Zip">Zip</label>
                                                <Input className='h-[67px] border-[2px] border-[#C8C8C8]' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <button className='w-[203px] h-[67px] border-[2px] border-[#C3C3C3] rounded-[8px] hover:cursor-pointer font-normal text-[20px] leading-[100%] tracking-[0%] text-black'>
                                            cancel
                                        </button>
                                        <button className='w-[410px] h-[67px] rounded-[8.71px] pt-[14.51px] pb-[14.51px] bg-black text-white flex justify-center items-center hover:cursor-pointer hover:bg-[#f24e1e] transition-colors duration-300'>
                                            Save This Address
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-[572px] h-[625px] rounded-[9px] bg-[#F0F0F0] shadow-[0px_0px_4px_0px_#00000040] flex flex-col justify-between items-center p-12'>
                            <div className='w-full h-[54px] font-normal text-[18px] leading-[151%] tracking-[0%] text-[#575757]'>
                                By placing your order, you agree to our company <span className='text-black hover:cursor-pointer'>Privacy policy</span> and <span className='text-black hover:cursor-pointer'>Conditions of use.</span>
                            </div>

                            <hr className='border border-[#B0B0B0] w-full' />

                            <div className='w-full h-[30px] font-normal text-[25px] leading-[100%] tracking-[0%] text-black'>
                                Order Summary
                            </div>

                            <div className='w-full flex flex-col justify-between gap-4'>
                                <div className='w-full flex justify-between h-[21px]'>
                                    <p className='font-normal text-[18px] leading-[100%] tracking-[0%] text-[#575757]'>
                                        Items - Silhouette No. 1 – Vermilion
                                    </p>
                                    <p className='font-normal text-[18px] leading-[100%] tracking-[0%] text-[#575757]'>
                                        7,999
                                    </p>
                                </div>
                                <div className='w-full flex justify-between h-[21px]'>
                                    <p className='font-normal text-[18px] leading-[100%] tracking-[0%] text-[#575757]'>
                                        Shipping and handling:
                                    </p>
                                    <p className='font-normal text-[18px] leading-[100%] tracking-[0%] text-[#575757]'>
                                        200
                                    </p>
                                </div>
                                <div className='w-full flex justify-between h-[21px]'>
                                    <p className='font-normal text-[18px] leading-[100%] tracking-[0%] text-[#575757]'>
                                        Before tax:
                                    </p>
                                    <p className='font-normal text-[18px] leading-[100%] tracking-[0%] text-[#575757]'>
                                        6,599
                                    </p>
                                </div>
                                <div className='w-full flex justify-between h-[21px]'>
                                    <p className='font-normal text-[18px] leading-[100%] tracking-[0%] text-[#575757]'>
                                        Tax Collected:
                                    </p>
                                    <p className='font-normal text-[18px] leading-[100%] tracking-[0%] text-[#575757]'>
                                        1,400
                                    </p>
                                </div>
                            </div>

                            <hr className='border border-[#B0B0B0] w-full' />

                            <div className='h-[30px] w-full flex justify-between items-center'>
                                <p className='w-[131px] font-normal text-[25px] leading-[100%] tracking-[0%] text-black'>Order Total:</p>
                                <p className='w-[63px] font-normal text-[25px] leading-[100%] tracking-[0%] text-black'>8,199</p>
                            </div>

                            <div className='w-full h-[67px] flex justify-center items-center'>
                                <button className='h-[67px] gap-[24.18px] rounded-[8.71px] px-[137px] py-[14.51px] bg-black font-medium text-[19.35px] leading-[100%] tracking-[-2%] text-center  text-white flex justify-center items-center hover:cursor-pointer hover:bg-[#f24e1e] transition-colors duration-300'>
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
