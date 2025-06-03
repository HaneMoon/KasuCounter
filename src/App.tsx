// import { useState } from 'react'
// import Counter from "./components/counter"
import Location from "./components/location"
import LiveLoc from "./components/liveLocation"
import TimeStamp from "./components/timeStamp"
import Header from "./pages/header"

import './App.scss'
import { Container } from "react-bootstrap"

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

function App() {
  const [user, loading] = useAuthState(auth)

  return (
    <>
    <Header auth={auth} user={user}/>
      <Container fluid className="text-center">
        {/* <Counter /> */}
        <div></div>
        <div>位置情報が使えるように設定してね</div>
        {user ? (
          <>
            <Location />
            <LiveLoc />
          </>
        ) : ( 
          <div>ログインしろ</div>
         )} 
        <TimeStamp />

      </Container>
    </>
  )
}

export default App
