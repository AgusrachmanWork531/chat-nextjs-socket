import { useRouter } from 'next/router';
import { isArray } from 'util';

// http://localhost:3000/shop/1/2/3/4

const DetailShopPage = () => {

    const { query } = useRouter();

    return (
        <div>
            <h1>Detail Shop Page</h1>
            <p>Sample : http://localhost:3000/shop/1/2/3/4</p>
            <p>Shop : {query.slug && isArray(query.slug) ? query.slug.map(val => `${val}, `) : 'not slug'}</p>
        </div>
    );
}

export default DetailShopPage;