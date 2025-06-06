import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import { ref, set, onValue } from "firebase/database"
import { auth, database } from "../firebase"

export default function Location() {
    const [location, setLocation] = useState({ lat: 0, lng: 0 })
    const [savedLoc, setSavedLoc] = useState({ let: 0, lng: 0 })
    const databaseRef = ref(database, "Location")
    useEffect(() => {
        onValue(databaseRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                setSavedLoc({ let: data.lat, lng: data.lng })

            }
        })
    }, [])
    
    return (
        <>
            <h1>位置情報</h1>
            <div>
                <div>緯度: {location.lat}</div>
                <div>経度: {location.lng}</div>
            </div>

            <Button
                onClick={() => {
                    navigator.geolocation.getCurrentPosition(position =>
                        setLocation({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        })
                    )

                }}
            >位置情報取得</Button>

            <Button
                onClick={() => {
                    set(ref(database, "Location"), { lat: location.lat, lng: location.lng })
                }}>位置情報を保存</Button>
            <div>
                <h3>保存した位置情報</h3>
                {/* <p>{savedLoc}</p> */}
            </div>

        </>
    )
}