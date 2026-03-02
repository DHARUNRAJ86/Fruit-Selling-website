import React from 'react'
import BannerPng from '../../assets/fruits/banner-bg.jpg'
import {motion} from 'framer-motion'
import {FadeLeft}  from '../../utility/animation'

const bgStyle={
    backgroundImage:`url(${BannerPng})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
}

const Banner3 =()=>{
    return(
        <section className=''>
            <div 
            style={bgStyle}
            className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 ml-14 mt-10 rounded-xl ">
                
                {/*Banner Image */}
                <div></div>

                {/*Brand Info */}
                <div className='flex flex-col justify-center'>
                    <div className='text-center md:text-left space-y-4'>
                        
                        <motion.h1
                        variants={FadeLeft(0.5)}
                        initial="hidden"
                        animate="visible"
                        className='text-3xl lg:text-6xl font-bold uppercase'>
                            Fresh & Organic Fruits
                        </motion.h1>

                        <motion.p
                          variants={FadeLeft(0.7)}
                          initial="hidden"
                          animate="visible"
                        >
                            We provide farm-fresh, naturally grown fruits delivered 
                            directly from trusted farmers to your doorstep. Our mission 
                            is to ensure quality, freshness, and healthy living for every family.
                        </motion.p>

                        <motion.p
                              variants={FadeLeft(0.7)}
                              initial="hidden"
                              animate="visible"
                        >
                            Every fruit is carefully selected and hygienically packed 
                            to preserve its natural taste and nutrition. Experience 
                            the goodness of nature with every bite.
                        </motion.p>

                        {/*button section */}
                        <motion.div 
                            variants={FadeLeft(0.9)}
                            initial="hidden"
                            animate="visible"
                            className='flex justify-center md:justify-start mb-3'>
                            
                            <button className='primary-btn'>
                                Explore Products
                            </button>

                        </motion.div>

                    </div>
                </div>
            </div>
            <br />
        </section>
    )
}

export default Banner3