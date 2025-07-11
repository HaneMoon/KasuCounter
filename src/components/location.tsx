import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import { ref, set, onValue } from "firebase/database"
import { database } from "../firebase"
import { type User } from "firebase/auth"
import styles from "./style.module.scss"
import MapComponent from "./maps"

interface HeaderProps {
    user: User | null | undefined
}

export default function Location({ user }: HeaderProps) {
    const [location, setLocation] = useState({ lat: 0, lng: 0 })
    const [savedLoc, setSavedLoc] = useState({ lat: 0, lng: 0 })
    const databaseRef = ref(database, `users/${user?.uid}`)
    // const databaseRef = ref(database, `Location/${user?.email}`)


    useEffect(() => {
        // ユーザーがログインしていない場合は何もしない
        if (!user?.uid) {
            console.log("ユーザーがログインしていません。");
            return;
        }

        const unsubscribe = onValue(databaseRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Firebaseからデータが取得できたらsavedLocを更新
                setSavedLoc({ lat: data.lat, lng: data.lng });
            }
        });

        // クリーンアップ関数: コンポーネントがアンマウントされるときにリスナーを解除
        return () => unsubscribe();
    }, [user?.uid, databaseRef]);

    let initialCenter: [number, number] = [savedLoc.lat, savedLoc.lng];
    const initialZoom = 13;
    let markerCoords: [number, number] = [savedLoc.lat, savedLoc.lng];
    console.log(initialCenter)

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
                    set(databaseRef, { lat: location.lat, lng: location.lng }).then(() => console.log("保存したよ"))
                }}>位置情報を保存</Button>
            <div>
                <div className={styles.savedLoc}>
                    <h3 >保存した位置情報</h3>
                    <ul className={styles.savedLocLatLng}>
                        <li>緯度：{savedLoc.lat}</li>
                        <li>経度:{savedLoc.lng}</li>
                    </ul>
                    {(savedLoc.lat !== 0 || savedLoc.lng !== 0) && (


                        <MapComponent
                            center={initialCenter}
                            zoom={initialZoom}
                            markerPosition={markerCoords}
                            popupText="保存した座標"
                        />
                    )}
                </div>
            </div>

        </>
    )
}