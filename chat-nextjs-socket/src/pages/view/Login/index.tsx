import Head from "next/head";
import styles from './login.module.scss';
import React from "react";
import Image from 'next/image';
import logo from '../../../../public/logo_login.png';
import BasicField from "@/pages/components/elements/field/basic"
import Line from "@/pages/components/elements/line"
import BasicButton from "@/pages/components/elements/button/basic";

interface LoginViewProps {
    handleLogin: () => void;
    handleField?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isLoading: boolean;
    isError: string;
}

const LoginView: React.FC<LoginViewProps> = (props) => {
    return (
        <div className={styles.WrapperLoginPage}>
            <Head><title>Login Page</title></Head>
            {props.isLoading ? <p>Loading...</p> : null}
            {props.isError ? <p>{props.isError}</p> : null}
            <div className={styles.headBox}>
                <Image src={logo} alt="logo" width={25} height={25} />
            </div>
            <div className={styles.boxLoginPage}>
                <div>
                    <p className="text-2xl mb-1">Login</p>
                    <p className="text-1xl mb-1">Hi, Welcome back</p>
                </div>
                <Line width="100%" height="1px" backgroundColor="#e5e5e5" margin="10px 0px" />
                <BasicField name="username" label="Username" type="text" handleField={props.handleField} />
                <BasicField name="password" label="Password" type="password" handleField={props.handleField} />
                <BasicButton buttonName="Login" handleLogin={props.handleLogin} />
            </div>
        </div>
    )
}

export default LoginView;