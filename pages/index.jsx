import Product from "../components/Product"
import Head from "next/head";

const index = ({products}) => {
    return (
        <div className="app">

            <main className="container">
                <Head>
                    <title>Home | Products</title>
                </Head>

                <div className="main">
                    {products.map(product => <Product key={products.id} product={product}/>)}
                </div>

            </main>

        </div>
    )
}

export default index;

export async function getStaticProps() {
    const req = await fetch('https://fakestoreapi.com/products');
    const products = await req.json();

    return {props: {
            products
        }}
}