import React from 'react'
import BannerPng from '../../assets/fruits/fruits-splash.png'
import {motion} from 'framer-motion'
import {FadeUp,FadeLeft} from '../../utility/animation'

const Banner =()=>{
    return(
        <section className='bg-orange-400/10'>
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 ">
                {/*Banner Image */}
                <div className='flex justify-center items-center'>
                    <motion.img
                       initial={{opacity:0,scale:0.5}}
                       whileInView={{opacity:1,scale:1}}
                       transition={{type:"spring",stiffness:100,delay:0.5}}
                       viewport={{once:true}}
                     src={BannerPng} alt="" className='w-[250px] md:max-w-[400px] h-full object-cover'/>
                </div>
                {/*Brand Info */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4'>
                        <h1 className='text-3xl lg:text-6xl font-bold uppercase'>Brand Info</h1>
                        <motion.p
                          variants={FadeUp(0.7)}
                          initial="hidden"
                          animate="visible"
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Praesentium nobis aliquam veritatis autem excepturi hic 
                            aut iusto minus tempora et, in eaque aspernatur eveniet 
                            officiis provident! Repellat quaerat ipsam quasi
                        </motion.p>
                        <motion.p
                              variants={FadeUp(0.5)}
                              initial="hidden"
                              animate="visible"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Veritatis veniam delectus vel harum, excepturi maiores natus
                             facere minima eum cum.
                        </motion.p>
                         {/*button section */}
                                    <motion.div 
                                    variants={FadeUp(1.1)}
                                    initial="hidden"
                                    animate="visible"
                                    className='flex justify-center md:justify-start'>
                                        <button className='primary-btn '>
                                        Learn More
                                        </button>
                                    </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner