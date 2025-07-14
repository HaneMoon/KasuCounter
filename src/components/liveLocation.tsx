import { useState, useEffect } from "react"
// import Button from "react-bootstrap/Button"
import MapComponent from "./maps"

export default function Location() {
    const initialZoom = 13;
    const [location, setLocation] = useState({ lat: 0, lng: 0 })

    useEffect(() => {

        const watchID = navigator.geolocation.watchPosition(position =>
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            })
        )
        
        // enableHighAccuracy: true, // より高精度な位置情報を要求 (バッテリー消費に注意)
        //     timeout: 5000, // タイムアウトの設定 (ミリ秒)
        //         maximumAge: 0, // キャッシュされた位置情報の有効期限 (ミリ秒)
     return () => navigator.geolocation.clearWatch(watchID);
     
    }, []);

    return (
        <>        <h1>現在地の位置情報(継続して取得)</h1>
            <div>
                <div>緯度: {location.lat}</div>
                <div>経度: {location.lng}</div>
            </div>
            {/* 
            <Button
                onClick={() => {


                }}
            >位置情報取得</Button> */}

            <MapComponent
                center={{lat:location.lat,lng:location.lng}}
                zoom={initialZoom}
                markerPosition={{lat:location.lat,lng:location.lng}}
                popupText="現在の座標"
            />
        </>
    )
}