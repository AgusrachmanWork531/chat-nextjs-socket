
import Link from "next/link";
import { useRouter } from 'next/router';
import styles from './Login.module.scss';
import Head from "next/head";
import { AuthPayload } from "@/pages/api/users/domain";
import { useEffect, useState } from "react";
import { useAuth } from '../../../helper/AuthContext'
import { ResponseAPI } from "@/pages/api/users/domain";



const LoginPage = () => {

    const router = useRouter();
    const { login, isAuthenticated } = useAuth();
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState("")

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/')
        }
    }, [isAuthenticated, router])

    const handleLogin = async () => {
        setLoading(true);

        const payload: AuthPayload = {
            userName: 'user-testing',
            password: 'user-testing-2024'
        };

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.status !== 200) {
                const errorData = await response.json();
                setError(errorData.message);
                setLoading(false);
                return;
            }

            const responseData = await response.json();
            login(responseData.token); // Assuming the token is in responseData.token
            setLoading(false);
            await router.push('/');
        } catch (error) {
            console.error(error);
            setError("Something went wrong, please try again later");
            setLoading(false);
        }
    };


    return (
        <div className={styles.WrapperLoginPage}>

            <Head>
                <title>Login Page</title>
            </Head>
            <h1 className=" text-3xl font-bold">Login Page</h1>
            <button style={{ padding: '5px', border: '1px solid black', borderRadius: '5px', backgroundColor: 'ThreeDFace' }} onClick={handleLogin}>Action Login</button>
            <p>You don`t have account ? Please click <Link className="Default-Link" href="/auth/register">Register</Link></p>
            {
                isLoading ? <p className="text-red-500">Process Login...</p> : null
            }
            {
                isError ? <p className="text-red-500">{isError}</p> : null
            }
        </div>
    );
}

export default LoginPage;