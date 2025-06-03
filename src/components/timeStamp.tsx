// import { useState } from "react"

export default function nowDate() {

    const now = new Date()
    const nowYY = now.getFullYear()
    const nowMM = (now.getMonth() + 1).toString().padStart(2, `0`)
    const nowDD = now.getDate().toString().padStart(2, `0`)
    const youbi = ["日", "月", "火", "水", "木", "金", "土"]
    const nowDay = youbi[now.getDay()]
    const nowHour = now.getHours().toString().padStart(2, `0`)
    const nowMin = now.getMinutes().toString().padStart(2, `0`)
    const nowSec = now.getSeconds().toString().padStart(2, `0`)
    const timestamp = `${nowYY}-${nowMM}-${nowDD}(${nowDay}) ${nowHour}:${nowMin}:${nowSec}`

    // const [update, setUpdate] = useState<boolean>(false)
    // setUpdate(update?false:true)
    return (
        <>
            <h2>現在時刻：{timestamp}</h2>
        </>
    )
}