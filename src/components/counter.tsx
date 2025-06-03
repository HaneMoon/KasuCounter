import {useState} from "react"
import Button from "react-bootstrap/Button"

export default function Counter(){

const [count,setCount]=useState(0)

return(
    <>
    <h1>カスボタンが押された回数をカウントするよ</h1>
<Button onClick={()=>{setCount(count+1)}}>カス</Button>
    <div>{count}カス</div>
    </>
)
}