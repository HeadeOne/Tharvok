import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerLogo}>
                        <h3>El Reino Caído</h3>
                        <p>Juicio de las Almas</p>
                    </div>

                    <div className={styles.footerLinks}>
                        <h4>Enlaces</h4>
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/lore">Lore</a></li>
                            <li><a href="/reglas">Reglas</a></li>
                            <li><a href="/comunidad">Comunidad</a></li>
                            <li><a href="/ip">Conéctate</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerLegal}>
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="/tos">Términos de Servicio</a></li>
                            <li><a href="/privacy">Política de Privacidad</a></li>
                            <li><a href="/rules">Reglas Completas</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerCredits}>
                        <p>
                            © {new Date().getFullYear()} El Reino Caído. No afiliado a Mojang o Microsoft.
                        </p>
                        <p>
                            Diseñado y desarrollado con ♥ Tharvok ♥ por la comunidad.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;