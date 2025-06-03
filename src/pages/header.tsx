
// import styles from "./header.scss"
import { signInWithPopup, signOut } from "firebase/auth"
import { provider } from "../firebase"

export default function header({ auth, user }) {

    return (
        <>
            <h1>位置情報をとるサイト
                <h2 onClick={()=>{
                    if(user){
                        signOut(auth)
                    }else{
                    signInWithPopup(auth,provider)
                    }
                }}>
                    {user?"ログアウト":"ログイン"}
                </h2>
            </h1>
        </>
    )
}

const userLogin=()=>{

    
}