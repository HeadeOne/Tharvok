import Section from '../components/Section/Section';
import RuleCard from '../components/RuleCard/RuleCard';
import styles from './Rules.module.css';

const Rules = () => {
    const mainRules = [
        {
            number: 1,
            title: 'Sistema de Vidas',
            description: 'Cada jugador tiene 5 vidas. Tras agotarlas, serás enviado a la Prisión del Olvido.',
            icon: '🛡'
        },
        {
            number: 2,
            title: 'Prisión Post-Mortem',
            description: 'Al morir, serás enviado a la prisión hasta que completes tu juicio o seas liberado.',
            icon: '⛓'
        },
        {
            number: 3,
            title: 'Prohibido Hacks',
            description: 'Cualquier uso de hacks, mods no permitidos o exploits resultará en ban permanente.',
            icon: '🚫'
        },
        {
            number: 4,
            title: 'Respeto a la Comunidad',
            description: 'El racismo, acoso o comportamiento tóxico no será tolerado bajo ninguna circunstancia.',
            icon: '🤝'
        },
        {
            number: 5,
            title: 'Roles y Profesiones',
            description: 'Debes elegir y mantener un rol principal que defina tu estilo de juego.',
            icon: '🎭'
        },
        {
            number: 6,
            title: 'Eventos Obligatorios',
            description: 'Participación obligatoria en eventos de juicio cuando seas convocado.',
            icon: '⚖️'
        }
    ];

    return (
        <main>
            <Section className={styles.heroSection}>
                <div className="container">
                    <h1>Reglas del Reino</h1>
                    <p className={styles.subtitle}>
                        Conoce las normas que mantienen el equilibrio en nuestro mundo
                    </p>
                </div>
            </Section>

            <Section className={styles.sectionDark}>
                <div className="container">
                    <h2>Reglas Principales</h2>
                    <div className={styles.rulesGrid}>
                        {mainRules.map((rule) => (
                            <RuleCard
                                key={rule.number}
                                number={rule.number}
                                icon={rule.icon}
                                title={rule.title}
                                description={rule.description}
                            />
                        ))}
                    </div>
                    {/* <div className={styles.fullRulesLink}>
                        <a href="/reglas-completas" className={styles.linkButton}>
                            Ver todas las reglas detalladas
                        </a>
                    </div> */}
                </div>
            </Section>
        </main>
    );
};

export default Rules;