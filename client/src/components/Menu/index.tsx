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

  return (
    <div className={`${styles.container}${scrolled ? ` ${styles.scrolled}` : ''}`}>
      <div className={styles.menu}>
        <div className={styles.logo}>
          {/* Aquí iría tu logo */}
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
