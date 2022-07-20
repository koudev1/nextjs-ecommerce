import Image from 'next/image';
import Link from 'next/link';
import Styles from './../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <nav className={Styles.nav}>
                <div className={Styles.container + ' container'}>
                    <div className={Styles.logo}>
                        <Image src="/../public/logo.png" width="60" height="50" /> 
                    </div>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar