import React from 'react';


const About = () => {
    return (
        <div id="About">
            <div className="lg:px-56 px-10 lg:py-0 py-20 text-center lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
                <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                    <h1>
                        <h1 className="text-[52px] font-semibold mb-8 leading-normal text-right text-blue-500">About</h1>
                        <p className="text-[25px] ml-2 text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit temporibus molestiae. Facilis repellat iste aut iure veniam ipsam. Ducimus aliquid omnis aut eligendi, dolor similique commodi. Aut, consequatur necessitatibus?</p>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default About;