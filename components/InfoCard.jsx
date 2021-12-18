import Image from 'next/image';
import {HeartIcon} from '@heroicons/react/outline'
import {StarIcon} from '@heroicons/react/solid'
const InfoCard = ({ img, location, title, description, star, price, total, long, lat }) => {
    return (
        <div className="flex flex-col shadow-md sm:shadow-md  rounded-xl hover:opacity-90 transform ease-in-out transition duration-200 sm:flex-row mt-4 cursor-pointer md:hover:shadow-lg " >
            <div className="relative h-44  w-full sm:h-52 sm:w-80 shrink-0 " >
                <Image className="rounded-xl " objectFit='cover' layout="fill" src={img} alt={title}  />
            </div>
            <div className="flex flex-col justify-start flex-grow p-2 sm:pl-4   " >
                <div className="flex truncate  " >
                    <p>{location}</p>
                    <HeartIcon className="h-5 px-1" />
                    <StarIcon className="h-5" />
                </div>
                <h2 className=" text-lg text-slate-700" >{title}</h2>
                <div className="border-b w-10 pt-2" />
                <p className="pt-2 text-sm text-slate-600 flex-grow " >{description}</p>
                {/*price section */}
                <div className="flex justify-between" >
                    <p className="flex items-center " >
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>
                    <div>
                        <p className="text-lg font-semibold lg:text-xl pb-1 ">{price}</p>
                        <p className="text-right text-xs lg:text-sm" >{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard
