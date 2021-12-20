import {useState} from 'react'
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function MapBox({searchResult}){
    const [selectedLocation, setSelectedLocation] = useState('');
    const coordinate = searchResult.map((res) => ({
        longitude: res?.long,
        latitude: res?.lat,
    }));
    const center = getCenter(coordinate)
    
    const [viewport, setViewport] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        width:'100%',
        height:'100vh',
        zoom: 11,
    });
    return (
        <ReactMapGL
                mapStyle="mapbox://styles/natnael-opq/ckxcxg5y30esp14m87gtgbl4p"
                mapboxApiAccessToken={process.env.mapbox_key}
                {...viewport}
                onViewportChange={(viewport) => setViewport(viewport)}
        >
            {
                searchResult.map((res) => (
                    <div key={res.long} >
                        {/* set pins */}
                        <Marker
                            longitude={res?.long}
                            latitude={res?.lat}
                            offsetLeft={-15}
                            offsetTop={-7}
                        >
                            <p
                                onClick={() => setSelectedLocation(res?.long)}
                                className="text-xl cursor-pointer animate-bounce"
                            >📌</p>
                        </Marker>
                        {/* Popup */}
                        {
                            selectedLocation === res.long  && (
                                <Popup
                                    onClose={() => setSelectedLocation('')}
                                    closeOnClick={true}
                                    latitude={res.lat}
                                    longitude={res.long}
                                >
                                    <p className="text-sm font-bold text-red-400 z-50 px-2 rounded-full hover:px-4 hover:scale-105 transition duration-200 transform ease-in-out " >{res.title}</p>
                                </Popup>
                            )
                        }
                    </div>
                ))
            }
        </ReactMapGL>
    )
}

export default MapBox;
