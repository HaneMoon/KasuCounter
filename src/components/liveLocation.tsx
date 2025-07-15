import { useState, useEffect } from "react"
import MapComponent from "./maps"
import styles from "./style.module.scss"

export default function Location() {
    const [location, setLocation] = useState({ lat: 0, lng: 0 })

    useEffect(() => {

        const updateLocation = () => {
            navigator.geolocation.getCurrentPosition(position =>
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                })
            )
            console.log("位置情報を更新")
        }

        updateLocation();

        const intervalId = setInterval(updateLocation, 1000)
        return () => clearInterval(intervalId)
    }, [])

    let initialCenter: [number, number] = [location.lat, location.lng];
    const initialZoom = 13;
    let markerCoords: [number, number] = [location.lat, location.lng];

    return (
        <>
            <div className={styles.savedLoc}>
                <h1>現在地</h1>
                <ul className={styles.savedLocLatLng}>
                    <li className={styles.latLngInfo}>緯度<p>{location.lat}</p></li>
                    <li className={styles.latLngInfo}>経度<p>{location.lng}</p></li>
                </ul>
                {(location.lat !== 0 || location.lng !== 0) && (
                    <MapComponent
                        center={initialCenter}
                        zoom={initialZoom}
                        markerPosition={markerCoords}
                        popupText="現在の座標"
                    />
                )}
            </div>
        </>
    )


    // const initialZoom = 13;

    // const nowLoc = navigator.geolocation.watchPosition(position => setLocation({
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude,
    // }))
    // console.log(location)
    // useEffect(() => {

    //     const watchID = navigator.geolocation.watchPosition(position =>
    //         setLocation({
    //             lat: position.coords.latitude,
    //             lng: position.coords.longitude,
    //         })
    //     )

    //     // enableHighAccuracy: true, // より高精度な位置情報を要求 (バッテリー消費に注意)
    //     //     timeout: 5000, // タイムアウトの設定 (ミリ秒)
    //     //         maximumAge: 0, // キャッシュされた位置情報の有効期限 (ミリ秒)
    //     return () => navigator.geolocation.clearWatch(watchID);

    // }, [nowLoc]);

    // return (
    //     <>        <h1>現在地の位置情報(継続して取得)</h1>
    //         <div>
    //             <div>緯度: {location.lat}</div>
    //             <div>経度: {location.lng}</div>
    //         </div>
    //         {/* 
    //         <Button
    //             onClick={() => {


    //             }}
    //         >位置情報取得</Button> */}

    //         <MapComponent
    //             center={{ lat: location.lat, lng: location.lng }}
    //             zoom={initialZoom}
    //             markerPosition={{ lat: location.lat, lng: location.lng }}
    //             popupText="現在の座標"
    //         />
    //     </>
    // )
}