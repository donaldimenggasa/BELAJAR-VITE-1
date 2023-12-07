import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';


const Nav = () => {
    const [click, setClick] = useState(false);
    const hadleClick = () => setClick(!click);
    

    const content = <>
            <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
                <ul className="text-center text-xl p-20">
                    <Link spy={true} smooth={true} to="About">
                        <li className="my-4 py-4  border-b border-slate-800 hover:bg-slate-800 nover:rounded">About</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Portofolio">
                        <li className="my-4 py-4  border-b border-slate-800 hover:bg-slate-800 nover:rounded">Portofolio</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Contact">
                        <li className="my-4 py-4  border-b border-slate-800 hover:bg-slate-800 nover:rounded">Contact</li>
                    </Link>
                    
                </ul>
            </div>  
        </>

    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
                <div className="flex items-center flex-1">
                    <span className="text-2x1 font-bold">DONALDI</span>
                </div>
                <div className="lg:flex md:flex lg :flex-1 item center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">

                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:text-fuchsia-600 transition border-b-2  border-slate-900 hover:text-fuchsia-700 cursor-pointer">About</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Portofolio">
                                <li className="hover:text-fuchsia-600 transition border-b-2  border-slate-900 hover:text-fuchsia-700 cursor-pointer">Portofolio</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contact">
                                <li className="hover:text-fuchsia-600 transition border-b-2  border-slate-900 hover:text-fuchsia-700 cursor-pointer">Contact</li>
                            </Link>
                            
                        </ul>
                    </div>
                </div>

                    <div>
                        {click && content}
                    </div>

                    <button className="block sm:hidden transtion" onClick={hadleClick}>
                        {click ? <FaTimes/> : <CiMenuFries/>}
                    </button>
                
            </div>
        </nav>
    );
};

export default Nav;