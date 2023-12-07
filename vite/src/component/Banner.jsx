import React from 'react';
import img from '../assets/img1.png'


const Banner = () => {
    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1>
                    <h1 className="text-[52px] font-semibold mb-8 leading-normal text-left">Welcome to My <span className="text-green-400 font-semiold">Website</span></h1>
                    <p className="text-left text-[25px] ml-2">Lorem ipsum dolor sit, amet consectetur adipisicing</p>
                </h1>
            </div>
            <img src={img} width={350} height={350} className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' alt="" />
        </div>
    );
};

export default Banner;