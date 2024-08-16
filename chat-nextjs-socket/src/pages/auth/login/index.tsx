
import { useRouter } from 'next/router';
import { AuthPayload } from "@/pages/api/users/domain";
import { useEffect, useState } from "react";
import { useAuth } from '../../../helper/AuthContext'
import LoginView from '../../view/Login';


const LoginPage = () => {

    const router = useRouter();
    const { login, isAuthenticated } = useAuth();
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState("")
    const [isUsername, serUsername] = useState("")
    const [isPassword, serPassword] = useState("")

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/')
        }
    }, [isAuthenticated, router])

    const handleLogin = async () => {
        setLoading(true);

        const payload: AuthPayload = {
            userName: isUsername,
            password: isPassword
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

    const handleField = (event: React.ChangeEvent<HTMLInputElement>) => {

        setError("");

        if (event.target.name === 'username') {
            serUsername(event.target.value)
        }
        if (event.target.name === 'password') {
            serPassword(event.target.value)
        }
    };

    return (<LoginView
        handleLogin={handleLogin}
        handleField={handleField}
        isLoading={isLoading}
        isError={isError}
    />
    );

}

export default LoginPage;