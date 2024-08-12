import Link from "next/link";
import styles from './Navnar.module.css'


const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
        <ul>
        <li>
            <Link href="/auth/login">Login |</Link>
            </li>
            <li>
            <Link href="/">Home </Link>
            </li>
            <li>
            <Link href="/products">Products </Link>
            </li>
            <li>
            <Link href="/nested-routing/nested-1">Nested 1 </Link>
            </li>
            <li>
            <Link href="/nested-routing/nested-2">Nested 2 </Link>
            </li>
            <li>
            <Link href="/shop">Multiple Slug </Link>
            </li>
        </ul>
        </nav>
    );
}

export default Navbar;  