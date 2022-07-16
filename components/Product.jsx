import Image from "next/image";
import Link from "next/link";
import Styles from './../styles/Product.module.css';

const Product = ({product}) => {

    const {title, price, description, image, id} = product;

    return (
        <div className={Styles.product}>
            <div>
                <Image src={image} width="200" height="200"/>
            </div>
            <ul>
                <li>{title}</li>
                <li>{price}$</li>
            </ul>
            <Link href={"/products/" + id}>
                <span className="button">Read More</span>
            </Link>
        </div>
    )
}

export default Product