import React from 'react';
import Img from '../assets/rb_8174.png'

const Home = () => {
    return (
        <div className=' rounded-3xl bg-[#b245b6]' id='home'>
            <div>
                <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                    {/* image & content */}
                    {/* text */}
                    <div className=' ml-24 text-gray-900'>
                        <h6 className='text-3xl mt-12'>Hello, I'm</h6>
                        <h1 className='font-semibold md:text-5xl my-4 text-3xl'>Abdelrahman Samii</h1>
                        <p className='md:w-96'>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web experiences for end-users.</p>
                        <div className='mt-5'>
                            <button className='btn transition-all duration-500 bg-[#e12596] py-2 px-4 rounded text-gray-900 hover:bg-white hover:text-gray-800'>About me</button> 
                            <button className='btn outline py-1.5 px-6 rounded border-none ml-5 text-gray-900 '>Projects</button>
                        </div>
                    </div>
                    {/* img */}
                    <div className='order-first md:order-last relative'>
                        <img src={Img} alt="" className=' p-24' />
                    </div>
                </div>
            </div>
            <div className='h-24 w-full mx-auto absolute left-0 hidden md:block'>
            </div>
        </div>
    );
};

export default Home;