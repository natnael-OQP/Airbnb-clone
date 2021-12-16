import React from 'react'
import Image from 'next/image'
const Banner = () => {
    return (
        <div className=" relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[530px] w-full " >
            <Image objectFit='cover' layout="fill" src='https://links.papareact.com/0fm' alt='banner'  />
            <div className="absolute top-1/2 w-full text-center  " >
                <p className="text-sm sm:text-lg " >Not sure Where to go? Perfect. </p>
                <button className="text-fuchsia-600 bg-white px-6 py-3 shadow-lg rounded-full font-bold my-3 hover:shadow-xl shadow-fuchsia-300 hover:shadow-fuchsia-400 active:scale-90 transition duration-150    ">Airbnb-Clone</button>
            </div>
        </div>
    )
}

export default Banner
