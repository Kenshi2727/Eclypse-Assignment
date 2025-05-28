import React from 'react';

export default function Navbar() {
    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-[75px] backdrop-blur-[10px] bg-black/60">
            {/* Logo */}
            <div className="flex items-center ">
                <div className="w-[48.79px] h-[45.46px] top-[12.9px] left-[60px] rounded-[5px] absolute ease-out duration-300">
                    <img src="logo.jpg" alt="logo" />
                </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-20">
                <a href="#" className="text-white text-md font-medium hover:text-gray-300 transition-colors">
                    About Us
                </a>
                <a href="#" className="text-white text-md font-medium hover:text-gray-300 transition-colors">
                    Waitlist
                </a>
                <a href="#" className="text-white text-mdfont-medium hover:text-gray-300 transition-colors">
                    Cart
                </a>
                <button className="w-[111.38px] h-[53.02px] top-[12px] left-[1278px] rounded-[8.71px] pt-[14.51px] pr-[38.69px] pb-[14.51px] pl-[38.69px] bg-white hover:bg-[#f24e1e] text-black hover:text-white transition-colors duration-300 font-medium">
                    Buy
                </button>
            </div>
        </nav>
    );
}