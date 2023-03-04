import { useState, useEffect } from 'react';
import styles from './styles.module.css';

const Menu = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const textColorClass = scrolled ? 'text-black' : 'text-white';

    console.log(scrolled, "ok")

    return (
        <div className={`${styles.container} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`${styles.menu} ${scrolled ? styles.menuScrolled : ''}`}>
                <div className={`${styles.logo} ${textColorClass}`}>Logo</div>
                <nav className={`${styles.nav} ${textColorClass}`}>
                    <ul>
                        <li className={`${textColorClass}`}>
                            <a href="#">Home</a>
                        </li>
                        <li className={`${textColorClass}`}>
                            <a href="#">About</a>
                        </li>
                        <li className={`${textColorClass}`}>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Menu;

