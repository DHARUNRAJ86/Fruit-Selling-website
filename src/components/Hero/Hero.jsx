import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import HeroPng from "../../assets/fruits/fruit-plate.png";
import LeafPng from "../../assets/fruits/leaf.png";
import {motion} from "framer-motion"


const Hero=()=>{
    return <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[350px] ml-5 relative">

    {/* Brand Info */}
    <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
        <div>
            <h1 className="text-5xl font-bold">Healthy</h1>

            <br />

            <h1 className="text-5xl font-bold">
                Fresh <span className="text-orange-400">Fruits!</span>
            </h1>
            <br />
            <p className='text-2xl tracking-wide'>Order Now For Fresh Healthy Life</p>
            <br />
            <p className='text-gray-400'>
                Healthy and yummy food for fresh morning 
                breakfast.Eat Daily for good healthy and
                mind order now and get 20% off on your
                first order
            </p>
            <br />
            {/*button section */}
            <div className='flex justify-center md:justify-start'>
                <button className='primary-btn flex items-center gap-2'>
                    <span>
                        <IoBagHandleOutline/>
                    </span>
                    Order now</button>
            </div>
        </div>
    </div>

    {/* Hero Images */}
    <div>
        <img src={HeroPng} alt="" className='ml-10 '/>
    </div>
    {/*Leaf Images */}
    <div className='absolute top-10 md:top-0 right-80 blur-[2px] opacity-300 rotate-[40deg] ml-20'>
        <img src={LeafPng} alt="" className='w-full md:max-w-[300px]'/>
    </div>
    <div>
        {/* Add your hero image here */}
    </div>

</div>

    </section>
};
export default Hero