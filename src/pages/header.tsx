
// import styles from "./header.scss"
import { signInWithPopup, signOut } from "firebase/auth"
import { provider } from "../firebase"
import { type Auth, type User } from "firebase/auth"
import styles from "./header.module.scss"

interface HeaderProps {
    auth: Auth
    user: User | null | undefined
}

export default function Header({ auth, user }: HeaderProps) {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.title}>位置情報をとるサイト <span>
                    <h2 onClick={() => {
                        if (user) {
                            signOut(auth)
                        } else {
                            signInWithPopup(auth, provider)
                        }
                    }}
                        className={styles.login}>
                        {user ? "ログアウト" : "ログイン"}
                    </h2>
                </span> </h1>
            </div>
        </>
    )
}


