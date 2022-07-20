import Image from "next/image";
import Styles from './../styles/about.module.css';


const about = () => {
    return (
        <div className={Styles.product + " container"}>

            

            <div className={Styles.description}>
                <h2>Welcome to our store</h2>

                <br />

                <p>We connect people and products by enabling sellers to reach more Consumers
                    and buyers to easily access a larger selection of products and the best deals
                    and safety in Africa and the Middle East. We make all your needs and desires
                    accessible Using the latest technology, connecting you with all kinds of
                    products with just one click; gives you freedom Shopping anytime, however and
                    wherever you want.</p>

                <p>We keep growing every day by focusing on change and development in order to
                    make life easier and add value. We are highly focused on teamwork, share the
                    same vision as a team and aim to achieve great things by supporting and trusting
                    each other.</p>

                <br />

                <h2>our vision</h2>

                <br />

                <p>Providing our customers and suppliers with an enjoyable and optimal
                    e-commerce experience, based on Trust, honesty and comfort above all
                </p>

            </div>
            <div className={Styles.img}>
                <Image src="/../public/balloon.jpg" width="1000" height="748"/>
            </div>
        </div>
    )
}

export default about