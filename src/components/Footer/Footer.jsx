import React from 'react'
import {FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaLeaf} from 'react-icons/fa'
import {motion} from 'framer-motion'

const Footer =()=>{
    return(
        <footer className='bg-red-500/18'>
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1,delay:0.2}}
            className='container flex justify-between items-center ml-10 mt-4'>
                {/*logo section */}
                <div className='text-2xl flex items-center gap-2 font-bold uppercase mt-4'>
                    <p className='text-red-500'>Fruit</p>
                    <p className='text-orange-400'>Store</p>
                    <FaLeaf className='text-green-500'/>
                </div>
                {/*social icons section */}
                <div className='flex flex-cols gap-2 mt-4 text-gray-700'>
                    <FaInstagram/>
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaLinkedinIn/>
                </div>

            </motion.div>
        </footer>
    )
}
export default Footer