import Navbar from "../Navbar";
import { useRouter } from "next/router";

type AppShellProps = {
    children: React.ReactNode;
}

const disableNavbar = ["/auth/login","/auth/register","/404"];

const AppShell = (props: AppShellProps) => {

    const { children } = props;

    const { pathname } = useRouter();

    const isNavbarDisabled = disableNavbar.includes(pathname);

    return (
        <main>
            {!isNavbarDisabled && <Navbar />}
            {children}
        </main>
    );
}

export default AppShell;