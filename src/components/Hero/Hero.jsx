import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import HeroPng from "../../assets/fruits/fruit-plate.png";
import LeafPng from "../../assets/fruits/leaf.png";
import {motion} from "framer-motion"
import {FadeRight} from "../../utility/animation.jsx"


const Hero=()=>{
    return <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[350px] ml-5 relative">

    {/* Brand Info */}
    <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
        <div>
            <motion.h1 
            variants={FadeRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-5xl font-bold">Healthy</motion.h1>

            <br />

            <motion.h1 
            variants={FadeRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-5xl font-bold">
                Fresh <span className="text-orange-400">Fruits!</span>
            </motion.h1>
            <br />
            <motion.p
            variants={FadeRight(0.9)}
            initial="hidden"
            animate="visible"
             className='text-2xl tracking-wide'>Order Now For Fresh Healthy Life</motion.p>
            <br />
            <motion.p 
            variants={FadeRight(1.2)}
            initial="hidden"
            animate="visible"
            className='text-gray-400'>
                Healthy and yummy food for fresh morning 
                breakfast.Eat Daily for good healthy and
                mind order now and get 20% off on your
                first order
            </motion.p>
            <br />
            {/*button section */}
            <motion.div 
            variants={FadeRight(1.5)}
            initial="hidden"
            animate="visible"
            className='flex justify-center md:justify-start'>
                <button className='primary-btn flex items-center gap-2'>
                    <span>
                        <IoBagHandleOutline/>
                    </span>
                    Order now</button>
            </motion.div>
        </div>
    </div>

    {/* Hero Images */}
    <div>
        <motion.img 
        initial={{opacity:0,x:200,rotate:75}}
        animate={{opacity:1,x:0,rotate:0}}
        transition={{duration:1,delay:0.2}}
        src={HeroPng} alt="" className='ml-10 '/>
    </div>
    {/*Leaf Images */}
    <div className='absolute top-10 md:top-0 right-80 blur-[2px] opacity-300 rotate-[40deg] ml-20'>
        <motion.img
        initial={{opacity:0,x:200,rotate:75}}
        animate={{opacity:1,x:0,rotate:0}}
        transition={{duration:1,delay:1.5}}
        src={LeafPng} alt="" className='w-full md:max-w-[300px]'/>
    </div>
    <br />
    <div>
        {/* Add your hero image here */}
    </div>

</div>

    </section>
};
export default Hero