import Navbar from "../Navbar";
import { useRouter } from "next/router";
import { useAuth } from '../../../../helper/AuthContext'
import { useEffect } from "react";

type AppShellProps = {
    children: React.ReactNode;
}

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {

    const { children } = props;

    const router = useRouter();

    const isNavbarDisabled = disableNavbar.includes(router.pathname);

    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/auth/login')
        }
    }, [isAuthenticated, router]);

    return (
        <main>
            {!isNavbarDisabled && <Navbar />}
            {children}
        </main>
    );
}

export default AppShell;