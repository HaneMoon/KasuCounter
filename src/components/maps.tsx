import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { type LatLngExpression } from "leaflet";

interface MapComponentProps {
    center: LatLngExpression
    zoom: number
    markerPosition?: LatLngExpression
    popupText:string
}

const MapComponent:React.FC<MapComponentProps>=
({center,zoom,markerPosition,popupText})=>{
    return(
<MapContainer center={center} zoom={zoom} scrollWheelZoom={false} style={{height:'500px',width:'100%'}}>
<TileLayer 
 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
{markerPosition&&(
    <Marker position={markerPosition}>
        {popupText&&<Popup>{popupText}</Popup>}
    </Marker>
)}

</MapContainer>
    )
}

export default MapComponent;

