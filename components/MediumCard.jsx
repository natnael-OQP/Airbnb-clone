import React from 'react'
import Image from 'next/image';

const MediumCard = ({img, title}) => {
    return (
        <div className=" snap-center cursor-pointer m-2 hover:scale-105 transition duration-200 transform-in-out  " >
            <div className="relative h-48 shadow-md shadow-blue-100 w-80 rounded-md overflow-hidden " >
                <Image objectFit="cover" layout="fill" src={img} alt={title}  />
            </div>
            <h1 className="text-xl text-slate-600 font-semibold " >{title}</h1>
        </div>
    )
}

export default MediumCard
