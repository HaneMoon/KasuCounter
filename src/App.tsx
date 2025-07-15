// import { useState } from 'react'
// import Counter from "./components/counter"
import Location from "./components/location"
import LiveLoc from "./components/liveLocation"
import TimeStamp from "./components/timeStamp"
import Header from "./pages/header"

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png"
import iconUrl from "leaflet/dist/images/marker-icon.png"
import shadowUrl from "leaflet/dist/images/marker-shadow.png"

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});


import './App.scss'
import { Container } from "react-bootstrap"

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

function App() {
  const [user] = useAuthState(auth)
  

  return (
    <>
      <Header auth={auth} user={user} />
      <Container fluid className="text-center">

       

        <div></div>
        <div>位置情報が使えるように設定してね</div>
        {user ? (
          <>
            <Location user={user} />
            <LiveLoc />
          </>
        ) : (
          <div>ログインしろ</div>
        )}
          <div>現在の時刻:<TimeStamp /></div>

      </Container>
    </>
  )
}

export default App
