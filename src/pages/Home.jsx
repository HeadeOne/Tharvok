import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import RuleCard from "../components/RuleCard/RuleCard";
import styles from "./Home.module.css";

const Home = () => {
    const features = [
        {
            icon: '🛡',
            title: '5 Vidas Hardcore',
            description: 'Solo tienes 5 oportunidades para probar tu valía.',
            color: '#ff5555' // Rojo Minecraft
        },
        {
            icon: '⛓',
            title: 'Prisión del Olvido',
            description: 'Tras morir, serás enviado a la prisión hasta tu juicio.',
            color: '#5555ff' // Azul Minecraft
        },
        {
            icon: '⚒',
            title: 'Trabajos RPG',
            description: 'Elige una profesión y desarrolla tus habilidades únicas.',
            color: '#55ff55' // Verde Minecraft
        },
        {
            icon: '🎪',
            title: 'Eventos Semanales',
            description: 'Participa en torneos, mazmorras y eventos especiales.',
            color: '#ffaa00' // Amarillo Minecraft
        }
    ];

    const stats = [
        { value: '10+', label: 'Jugadores Activos' },
        { value: '20/7', label: 'Servidor Online' },
        { value: '100%', label: 'Experiencia RPG' }
    ];

    return (
        <main className={styles.minecraftBg}>
            <Hero />

            {/* Sección de Bienvenida con estilo libro Minecraft */}
            <Section className={styles.welcomeSection}>
                <div className={`container ${styles.minecraftBook}`}>
                    <h2 className={styles.minecraftTitle}>Bienvenido, Aventurero</h2>
                    <div className={styles.minecraftText}>
                        <p>
                            <span className={styles.firstLetter}>E</span>n las ruinas olvidadas de <strong>Tharvok</strong>, donde la historia fue escrita con sangre y magia,
                            los ecos del pasado despiertan una nueva era. Aquí, cada alma que entra es puesta a prueba.
                        </p>
                        <p>
                            Bienvenido al <strong>Reino Caído: Juicio de las Almas</strong>, un servidor <strong>RPG Hardcore</strong> con <strong>5 vidas limitadas</strong>,
                            <strong>sistema de prisión post-muerte</strong> y <strong>profesiones personalizadas</strong> que determinan tu rol en la historia.
                        </p>
                        <p>
                            ¿Serás un héroe redentor o un alma perdida en la oscuridad?
                        </p>

                    </div>
                </div>
            </Section>

            {/* Sección de Estadísticas */}
            <Section className={styles.statsSection}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statCard}>
                                <div className={styles.statValue}>{stat.value}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Sección de Características con estilo de logros Minecraft */}
            <Section className={styles.featuresSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.titleIcon}>🏆</span>
                        Características Principales
                        <span className={styles.titleIcon}>🏆</span>
                    </h2>
                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <RuleCard
                                key={index}
                                number={index + 1}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                color={feature.color}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Llamado a la acción con estilo botón Minecraft */}
            <Section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.minecraftButtonContainer}>
                        <h2>¿Listo para el desafío?</h2>
                        <button
                            className={styles.minecraftButton}
                            onClick={() => {
                                navigator.clipboard.writeText('decision-dedicated.gl.joinmc.link');
                                alert('¡IP copiada al portapapeles!');
                            }}
                        >
                            <span className={styles.buttonTop}>Conéctate Ahora</span>
                            <span className={styles.buttonBottom}></span>
                        </button>
                        <div className={styles.serverIp}>IP: decision-dedicated.gl.joinmc.link</div>
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default Home;