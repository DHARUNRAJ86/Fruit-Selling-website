import React from 'react'
import {FaLeaf} from 'react-icons/fa';

const NavbarMenu = [
    {
        id:1,
        title:"Home",
        link:"/",
    },
    {
        id:2,
        title:"Products",
        link:"#",
    },
    {
        id:3,
        title:"About",
        link:"#",
    },
    {
        id:4,
        title:"Shop",
        link:"#",
    },
    {
        id:5,
        title:"Contacts",
        link:"#",
    },

]

const Navbar =()=>{
    return(
        <nav>
            <div className="container flex justify-between items-center py-4 md:pt-4">
                {/*Logo section*/}
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <p className='text-red-600'>Fruit</p>
                    <p className='text-orange-400'>Store</p>
                    <FaLeaf className='text-green-500'/>
                </div>
                 {/*Menu section*/}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-5 text-gray-600">
                        {NavbarMenu.map((menu)=>(
                            <li key={menu.id} className='text-xl'>
                                <a href={menu.link}
                                className="inline-block py-1 px-3 hover:text-red-600 hover:shadow-[0_3px_0_-1px_#ef4444]"
                                >{menu.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;