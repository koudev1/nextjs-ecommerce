import Link from 'next/link';
import Styles from './../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <nav className={Styles.nav}>
                <div className={Styles.container + ' container'}>
                    <div className={Styles.logo}>Ecommerce</div>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar