import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.headerContainer}>
                <div className={styles.logoContainer}>
                    <Link to="/" className={styles.logo}>
                        <span className={styles.logoFirst}>El Reino Caído:</span>
                        <span className={styles.logoSecond}>Juicio de las Almas</span>
                    </Link>
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <ul>
                        <li>
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>
                                <span className={styles.navIcon}>🏠</span>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/lore" onClick={() => setIsMenuOpen(false)}>
                                <span className={styles.navIcon}>📜</span>
                                Lore
                            </Link>
                        </li>
                        <li>
                            <Link to="/reglas" onClick={() => setIsMenuOpen(false)}>
                                <span className={styles.navIcon}>⚖️</span>
                                Reglas
                            </Link>
                        </li>
                        <li>
                            <Link to="/eventos" onClick={() => setIsMenuOpen(false)}>
                                <span className={styles.navIcon}>👥</span>
                                Eventos
                            </Link>
                        </li>
                        <li>
                            <Link to="/ip" onClick={() => setIsMenuOpen(false)}>
                                <span className={styles.navIcon}>🔗</span>
                                Conectarse
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div
                    className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ''}`}
                    onClick={toggleMenu}
                >
                    <span className={styles.hamburger}></span>
                </div>
            </div>
        </header>
    );
};

export default Header;