import { useState } from "react"
import Button from "react-bootstrap/Button"

export default function Location() {
    const [location, setLocation] = useState({ lat: 0, lng: 0 })
    return (
        <>        <h1>現在地の位置情報(継続して取得)</h1>
            <div>
                <div>緯度: {location.lat}</div>
                <div>経度: {location.lng}</div>
            </div>

            <Button
                onClick={() => {
                    navigator.geolocation.watchPosition(position =>
                        setLocation({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        })
                    )

                }}
            >位置情報取得</Button>
        </>
    )
}