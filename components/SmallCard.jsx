import React from 'react'
import Image from 'next/image';

const SmallCard = ({img,location,distance}) => {
    return (
        <div className="flex cursor-pointer items-center m-2 mt-4 space-x-4 overflow-hidden rounded-xl hover:bg-gray-100 hover:scale-105 transition duration-300 transform ease-in-out " >
            <div className='relative w-20 h-20 shadow-lg  rounded-md overflow-hidden ' >
                <Image objectFit="contain" layout="fill" src={img} alt={location}  />
            </div>
            <div className="flex flex-col " >
                <p >{location}</p>
                <p className="text-gray-500" >{distance}</p>
            </div>
        </div>
    )
}

export default SmallCard
