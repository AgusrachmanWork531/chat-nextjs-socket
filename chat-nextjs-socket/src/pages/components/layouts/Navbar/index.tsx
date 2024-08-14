import Link from "next/link";
import styles from './Navnar.module.css'
import { useAuth } from '../../../../helper/AuthContext'


const Navbar = () => {

    const { logout } = useAuth();

    const handleLogout = () => {
        logout()
    }

    return (
        <nav className={styles.Navbar}>
            <ul>
                <li style={{ borderRight: '1px solid' }}>
                    <Link href="/auth/login" onClick={handleLogout}>Logout</Link>
                </li>
                <li>
                    <Link href="/">Home </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;  