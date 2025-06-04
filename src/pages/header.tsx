
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
                <h1 className={styles.title}>位置情報をとるサイト
                    <span>
                        <h2 onClick={() => {
                            if (user) {
                                signOut(auth)
                            } else {
                                signInWithPopup(auth, provider)
                            }
                        }}
                            className={user ? styles.loginTrue : styles.loginFalse}>
                            {user ? <span>
                                <img
                                    src={user.photoURL ?? undefined}
                                    alt={user.displayName ?? undefined}
                                    width="30"
                                    height="30"
                                />
                                <span className={styles.eMail}>{user.email}</span>
                            </span> : "ログイン"}
                        </h2>
                    </span> </h1>
            </div>
        </>
    )
}


