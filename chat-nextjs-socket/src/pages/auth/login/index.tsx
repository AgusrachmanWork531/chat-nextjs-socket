
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from './Login.module.scss';

const LoginPage = () => {

    const { push } = useRouter();

    const handleLogin = () => {
        push('/products');
    }

    return (
        <div className={styles.WrapperLoginPage}>
            <h1 className=" text-3xl font-bold">Login Page</h1>
            <button style={{padding:'5px' , border: '1px solid black', borderRadius:'5px', backgroundColor:'ThreeDFace'}} onClick={handleLogin}>Action Login</button>
            <p>You don`t have account ? Please click <Link className="Default-Link" href="/auth/register">Register</Link></p> 
        </div>
    );
}

export default LoginPage;