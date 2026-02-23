import React from 'react'
import Fruit1 from "../../assets/fruits/apple.png"
import Fruit2 from "../../assets/fruits/orange.png"
import Fruit3 from "../../assets/fruits/avocado.png"
import Fruit4 from "../../assets/fruits/cherry.png"
import {AnimatePresence,motion} from 'framer-motion'
import {FadeLeft} from '../../utility/animation'

const MenusData = [
    { id: 1, title: "Fresh Red Apples", price: "₹60", img: Fruit1,delay:0.3},
    { id: 2, title: "Fresh Oranges", price: "₹80", img: Fruit2,delay:0.4},
    { id: 3, title: "Fresh Avocados", price: "₹120", img: Fruit3,delay:0.5 },
    { id: 4, title: "Fresh Cherries", price: "₹200", img: Fruit4,delay:0.6}
];

const Menus = () => {
    return (
        <section>
            <div className="container mx-auto px-4 pt-12 pb-20">
                <motion.h1
                 initial={{opacity:0,x:-200}}
                 whileInView={{opacity:1,x:0}}
                 transition={{duration:1,delay:0.3}}
                 className='text-2xl font-bold text-left pb-16 uppercase'>Our Menu</motion.h1>
                
                {/* Grid container with more gap to allow for the pop-out fruit */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {MenusData.map((menu) => (
                        <motion.div 
                            variants={FadeLeft(menu.delay)}
                            initial="hidden"
                            whileInView={"visible"}
                            whileInHover={{scale:1.1}}
                            key={menu.id} 
                            className='bg-white rounded-2xl  py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row items-center justify-between gap-3 group hover:scale-105 duration-300 transition-all'
                        >
                            {/* 1. Fruit Image: Added scale and negative translate to pop out */}
                            <img 
                                src={menu.img} 
                                alt={menu.title} 
                                className='w-[60px] transform -translate-y-8 scale-125 drop-shadow-sm' 
                            />
                            
                            {/* 2. Text Content: Fixed width forces the text to wrap like your image */}
                            <div className='flex flex-col flex-1 pl-2'>
                                <h2 className='text-md font-semibold leading-tight w-20'>
                                    {menu.title}
                                </h2>
                                {/* Rupee Price: Now positioned safely inside the card */}
                                <p className='text-lg font-bold text-orange-400'>
                                    {menu.price}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menus;