import React from 'react'
import Image from 'next/image';
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from '@heroicons/react/solid'
const Header = () => {
    return (
        <header className='h-16 flex items-center overflow-hidden shadow-ms border-b sticky top-0 px-1 sm:px-4 py-3  z-50 grid grid-cols-3 md:px-7 lg:px-10 bg-white  ' >
            {/*Left*/}
            <div className="relative h-6  w-16 md:h-8 lg:10  lg:w-20 flex items-center  cursor-pointer" >
                <Image objectFit='contain' layout="fill" src='https://links.papareact.com/qd3' alt='logo'  />
            </div>
            {/*Middle*/}
            <div className="flex h-10 items-center border-1 md:border-2 border-gray-300 md:shadow-sm px-2 py-2 rounded-full " >
                <input className='bg-white w-full outline-none  md:flex-grow ml-1 text-sm text-gray-400 font-semibold font-mono ' type="search" placeholder='search ' />
                <SearchIcon className="  md:inline hidden w-[27px] h-[27px] flex items-center justify-center bg-red-400  p-2 cursor-pointer text-white rounded-full " />
            </div>
            {/*Right*/}
            <div className="flex space-x-2 items-center justify-end text-gray-500  " >
                <p className="hidden md:inline cursor-pointer " >Become a Host</p>
                <GlobeAltIcon className="w-6 h-6 " />
                <div className="flex items-center space-x-2 border-2 rounded-full px-2 py-1 cursor-pointer" >
                    <MenuIcon className="w-5 h-5 " />
                    <UserCircleIcon className="w-5 h-5 "/>
                </div>
            </div> 
        </header>
    )
}

export default Header
