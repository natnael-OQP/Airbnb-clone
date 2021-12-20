import { useRouter } from 'next/router';
import { format} from 'date-fns'
import { fetcher } from '../Fetcher/Fetcher';
import InfoCard from '../components/InfoCard';
import MapBox from '../components/MapBox';

const Search = ({ searchResult }) => {
    
    const router = useRouter();
    const { location, startDate, endDate, guests } = router.query;
    const formattedStartDate = format(new Date(startDate), 'dd MMMM yyyy'); 
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yyyy');
    const range = `${formattedStartDate} to ${formattedEndDate}`
    return (
        <main className=" min-h-[80vh] flex overflow-hidden w-full ">
            <section className="pt-7 px-6 lg:px-1 flex-[.5] " >
                <p className="text-sm select-none text-slate-600 " >300+ stays {range} for {guests} guests </p>
                <h1 className="text-2xl font-section select-none mt-1 mb-3 text-slate-700 " >Stays in {location}</h1>
                <div className="hidden sm:flex items-center gap-x-2 " >
                    <p className="search-btn" >Cancellation Flexibility </p>
                    <p className="search-btn" >Type of Place </p>
                    <p className="search-btn" >Rooms and Beds </p>
                    <p className="search-btn" >More filters </p>
                </div>
                <div className="flex flex-col gap-y-3 mt-4 py-4 mb-10 " >
                    {
                        searchResult.map((items) => (
                            <InfoCard key={items.img} {...items} />
                        ))
                    }
                </div>
            </section>
            {/* map */}
            <section className="hidden lg:flex-[.5] lg:inline lg:min-w-[500px] ">
                <MapBox searchResult={searchResult} />
            </section>
        </main>
    )
}

export async function getServerSideProps() {
    const searchResult = await fetcher('https://links.papareact.com/isz')
    return {
        props: {
            searchResult
        }
    }
}  

export default Search
