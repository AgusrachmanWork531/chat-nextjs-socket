import Link from "next/link";
import styles from "./Register.module.scss"

const LoginPage = () => {
    return (
        <div className={styles.WrapperRegisterPage}>
            <h1 className=" text-3xl font-bold" >Register Page</h1>
            <p>You have account ? Please click <Link className="Default-Link" href="/auth/login">Login</Link></p> 
        </div>
    );
}

export default LoginPage;