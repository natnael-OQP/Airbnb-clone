import React from 'react'
import Image from 'next/image';

const LargeCard = ({img,title,description,btnText}) => {
    return (
        <section className=" relative py-10 cursor-pointer " >
            <div className=" relative h-64 sm:h-72 md:h-80  " >
                <Image className="rounded-lg" objectFit="cover" layout="fill" src={img} alt={title}  />
            </div>
            <div className="absolute top-1/4 left-10 md:left-12 " >
                <h1 className="text-3xl md:text-4xl w-[230px] text-slate-800 font-semibold mb-3  " >{title}</h1>
                <p className="text-slate-700 text-base font-semibold " >{description}</p>
                <button className="text-sm text-white bg-slate-900 px-4 py-2 rounded-lg mt-3 ">{btnText}</button> 
            </div>
        </section>
    )
}

export default LargeCard
