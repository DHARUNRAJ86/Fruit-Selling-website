import React from 'react'
import BannerPng from '../../assets/fruits/fruits-splash.png'
import {motion} from 'framer-motion'
import {FadeUp} from '../../utility/animation'

const Banner =()=>{
    return(
        <section>
            <div className="container">
                {/*Banner Image */}
                <div>
                    <img src={BannerPng} alt="" className='w-[250px] md:max-w-[400px] h-full object-cover'/>
                </div>
                {/*Brand Info */}
                <div>
                    <div>
                        <h1>Brand Info</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nobis aliquam veritatis autem excepturi hic aut iusto minus tempora et, in eaque aspernatur eveniet officiis provident! Repellat quaerat ipsam quasi</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis veniam delectus vel harum, excepturi maiores natus facere minima eum cum.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner