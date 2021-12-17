import React,{useState} from 'react'
import Image from 'next/image';
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from '@heroicons/react/solid'
//  react-date-rang
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
// react-router
import { useRouter } from 'next/router';
const Header = () => {
    const router = useRouter()
    const [guests, setGuests] = useState(1);
    const [searchInput, setSearchInput] = useState('');
    const [placeholder,setPlaceholder] = useState('Start your search');
    const [selectionRange, setSelectionRange] = useState([{
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
    }]);
    const [{startDate,endDate}] = selectionRange;
    
    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate:startDate.toISOString() ,
                endDate:endDate.toISOString() ,
                guests
            }
        })
        let placeholder = ` welcome to ${searchInput} || guests ${guests}` ;
        setSearchInput("")
        setPlaceholder(placeholder)
    }
    return (
        <header className='flex  items-center justify-center overflow-hidden shadow-sm  sticky top-0 px-1 sm:px-4 py-2  z-50 grid grid-cols-3 md:px-7 lg:px-10 bg-white  ' >
            {/*Left*/}
            <div
                onClick={()=>router.push('/')}
                className="relative h-6  w-16 md:h-8   lg:w-20 flex items-center  cursor-pointer" >
                <Image objectFit='contain' layout="fill" src='https://links.papareact.com/qd3' alt='logo'  />
            </div>
            {/*Middle*/}
            <div className="flex h-10 items-center border-1 sm:border-2 border-gray-300 sm:shadow-sm px-2 py-2 rounded-full " >
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="search"
                    placeholder={placeholder}
                    className='bg-white w-full outline-none  md:flex-grow ml-1 text-sm text-gray-400 font-semibold font-mono '
                />
                <SearchIcon className=" md:inline hidden w-[27px] h-[27px] flex items-center justify-center bg-red-400  p-2 cursor-pointer text-white rounded-full " />
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
            {
                searchInput.trim() && (
                    <div className="col-span-3 mx-auto flex flex-col mt-3 " >      
                        <DateRangePicker
                            onChange={item => setSelectionRange([item.selection])}
                            ranges={selectionRange}
                            minDate={new Date()}
                            rangeColors={['#FD5B61']}
                        />
                        <div className="border-b mb-2 flex  items-center text-slate-700 " >
                            <h1 className="text-xl font-semibold  flex-grow" >Number of Guests</h1>
                            <UsersIcon className="h-5" />
                            <input
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                min={1}
                                className="w-12 bg-gray-100 pl-3 outline-none text-lg text-red-400 " type="number" />
                            <button>cancel</button>
                        </div>
                        <div className="flex justify-around " >
                            <button
                                onClick={()=>setSearchInput("")}
                                className="text-slate-500 font-semibold " >Cancel</button>
                            <button
                                onClick={goToSearch}
                                className="font-semibold text-red-400  " >Search</button>
                        </div>
                    </div>
                )
            }
        </header>
    )
}

export default Header
