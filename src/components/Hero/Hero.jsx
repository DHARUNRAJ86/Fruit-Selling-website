import React from 'react'

const Hero=()=>{
    return <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[300px] ml-5">

    {/* Brand Info */}
    <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
        <div>
            <h1 className="text-5xl font-bold">Healthy</h1>

            <br />

            <h1 className="text-5xl font-bold">
                Fresh <span className="text-orange-400">Fruits!</span>
            </h1>
        </div>
    </div>

    {/* Hero Images */}
    <div>
        {/* Add your hero image here */}
    </div>

</div>

    </section>
};
export default Hero