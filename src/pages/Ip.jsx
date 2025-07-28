import Section from '../components/Section/Section';
import styles from './Ip.module.css';

const Ip = () => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText('decision-dedicated.gl.joinmc.link');
        alert('¡IP copiada al portapapeles!');
    };

    return (
        <main>
            <Section className={styles.heroSection}>
                <div className="container">
                    <h1>Conéctate al Reino</h1>
                    <p className={styles.subtitle}>
                        Únete a nuestra comunidad de supervivientes en Tharvok
                    </p>
                </div>
            </Section>

            <Section className={styles.sectionDark}>
                <div className="container">
                    <div className={styles.ipContent}>
                        <div className={styles.connectionInfo}>
                            <h2>Cómo Unirte</h2>
                            <ol className={styles.stepsList}>
                                <li>Descarga Minecraft Forge 1.20.1</li>
                                <li>Abre tu launcher y selecciona la versión</li>
                                <li>
                                    Conéctate a:
                                    <span className={styles.ipAddress} onClick={copyToClipboard}>
                                        decision-dedicated.gl.joinmc.link
                                    </span>
                                </li>
                                <li>¡Comienza tu aventura!</li>
                            </ol>

                            <div className={styles.minecraftButtonContainer}>
                                <button className={styles.minecraftButton} onClick={copyToClipboard}>
                                    <span className={styles.buttonTop}>Copiar IP</span>
                                    <span className={styles.buttonBottom}></span>
                                </button>
                            </div>
                        </div>

                        <div className={styles.communityWidget}>
                            <h2>Nuestra Comunidad</h2>
                            <div className={styles.discordWidget}>
                                <iframe
                                    title="Discord Widget"
                                    src="https://discord.com/widget?id=TU_SERVER_ID&theme=dark"
                                    width="100%"
                                    height="400"
                                    allowTransparency="true"
                                    frameBorder="0"
                                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                                ></iframe>
                            </div>
                            <div className={styles.discordLink}>
                                <a
                                    href="https://discord.gg/GfMHTY2xPS"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.discordButton}
                                >
                                    <span className={styles.buttonIcon}>🎮</span>
                                    Únete a nuestro Discord
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className={styles.sectionLight}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>No olvides las reglas de la Comunidad</h2>
                    <div className={styles.rulesGrid}>
                        <div className={styles.ruleCard}>
                            <h3>Respeto Mutuo</h3>
                            <p>No se tolerará el racismo, sexismo o cualquier forma de discriminación</p>
                        </div>
                        <div className={styles.ruleCard}>
                            <h3>Sin Hacks</h3>
                            <p>Cualquier mod no aprobado resultará en ban permanente</p>
                        </div>
                        <div className={styles.ruleCard}>
                            <h3>Comunicación</h3>
                            <p>Usa los canales adecuados en Discord para cada tipo de mensaje</p>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default Ip;