import { Map, Marker } from "pigeon-maps"

const Map1 = () => {
    return (
        <Map height={500} defaultCenter={[23.6850, 90.3563]} defaultZoom={5}>
            <Marker width={40} anchor={[22.3752, 91.8349]} />
        </Map>
    );
};

export default Map1;