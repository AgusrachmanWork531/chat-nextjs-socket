import styles from '@/styles/404.module.scss';
import Image from 'next/image';

const NotFoundPage = () => {
    return (
        <div className={styles.error}>
            <Image src="/404.png" alt="404" className={styles.error__image} height={1000} width={1000} />
            <h1>Page Not Found</h1>
        </div>
    )
}

export default NotFoundPage;