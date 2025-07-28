import Section from '../components/Section/Section';
import Timeline from '../components/Timeline/Timeline';
import styles from './Lore.module.css';
import fondoImg from '../assets/images/Fondo_1.png';
import fondoImg2 from '../assets/images/Un_Mundo_en_Ruinas.png';

const Lore = () => {
    const timelineEvents = [
        { year: "Era de la Luz", title: "El Reino de Tharvok", description: "Tharvok florecía como el más grande y próspero de los reinos, donde la magia fluía en los ríos y los sabios de la Torre de Almah regían con justicia." },
        { year: "El Gran Cambio", title: "La Corrupción del Orgullo", description: "La grandeza engendró orgullo, y el orgullo corrupción. Los líderes abandonaron la sabiduría por el poder." },
        { year: "Año del Despertar", title: "Juicio de los Custodios", description: "Los Custodios del Juicio despertaron en el Monte Varkhûn: 'Quien viva sin honor, morirá sin redención'." },
        { year: "La Noche Eterna", title: "La Caída de Tharvok", description: "Una noche sin fin cubrió el reino. Torres se derrumbaron, la magia se volvió contra sus usuarios y los espíritus de los reyes se alzaron." },
        { year: "Era Actual", title: "El Juicio de las Almas", description: "Las almas de los caídos vagan sin descanso. Los nuevos llegados tienen cinco oportunidades para redimirse antes del juicio eterno." }
    ];

    return (
        <main>
            <Section className={styles.heroSection}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Las Crónicas de Tharvok</h1>
                    <p className={styles.heroSubtitle}>
                        "Cuando los sabios caen, la oscuridad dicta el juicio. Aquel que olvide el honor... enfrentará el olvido eterno."
                    </p>

                </div>
            </Section>

            <Section className={styles.sectionDark}>
                <div className="container">
                    <div className={styles.loreContent}>
                        <div className={styles.loreText}>
                            <h2 className={styles.sectionTitle}>El Ascenso y Caída de un Reino</h2>
                            <div className={styles.loreParagraph}>
                                <p>
                                    <span className={styles.dropCap}>H</span>ace siglos, <strong>Tharvok</strong> fue el más grande y próspero de los reinos. Eran tiempos de luz, donde la magia fluía en los ríos, los cielos bendecían las cosechas y los sabios de la <strong>Torre de Almah</strong> regían con justicia.
                                </p>
                                <p>
                                    Sin embargo, la grandeza engendró <strong>orgullo</strong>, y el orgullo, <strong>corrupción</strong>. Los líderes abandonaron la sabiduría por el poder, y las artes oscuras se practicaban en cortes cerradas.
                                </p>
                            </div>

                            <div className={styles.loreHighlight}>
                                <h3>El Juicio Eterno</h3>
                                <p>
                                    En lo alto del <strong>Monte Varkhûn</strong>, los <strong>Custodios del Juicio</strong> despertaron tras milenios de sueño. Almas antiguas y omnipotentes, juzgaron a los vivos por sus excesos con una sentencia que resonó por todo el mundo: <em>"Quien viva sin honor, morirá sin redención"</em>.
                                </p>
                            </div>
                        </div>

                        <div className={styles.loreImage}>
                            <img
                                src={fondoImg}
                                alt="Ruinas de Tharvok"
                                className={styles.imageBorder}
                            />
                            <p className={styles.imageCaption}>Las ruinas de la Gran Torre de Tharvok</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className={styles.sectionLight}>
                <div className="container">
                    <div className={styles.loreContentReversed}>
                        <div className={styles.loreImage}>
                            <img
                                src={fondoImg2}
                                alt="Prisión del Olvido"
                                className={styles.imageBorder}
                            />
                            <p className={styles.imageCaption}>La niebla eterna que cubre Tharvok</p>
                        </div>

                        <div className={styles.loreText}>
                            <h2 className={styles.sectionTitle}>La Maldición del Olvido</h2>
                            <div className={styles.loreParagraph}>
                                <p>
                                    Cuando la <strong>Noche Eterna</strong> cayó sobre Tharvok, las torres se derrumbaron, los mares se retiraron y los espíritus de los antiguos reyes se alzaron para castigar a su propia sangre. La magia, antes fuente de vida, se volvió contra sus usuarios.
                                </p>
                                <p>
                                    Los que morían en batalla no encontraban descanso. Sus almas eran arrastradas a la <strong>Prisión del Olvido</strong>, una dimensión sin tiempo donde vagan entre fragmentos de memoria, condenados a repetir sus errores por la eternidad.
                                </p>
                            </div>

                            <div className={styles.loreHighlight}>
                                <h3>El Presente: Un Mundo en Ruinas</h3>
                                <p>
                                    Ahora, Tharvok es un mundo cubierto por nieblas perpetuas, habitado por supervivientes desesperados, bestias mutadas por magia residual y sombras de lo que una vez fue. Los que llegan a este mundo despiertan sin recuerdos, pero con un mensaje grabado en sus mentes: <em>"Tienes cinco oportunidades... luego, enfrentarás el juicio eterno"</em>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className={styles.timelineSection}>
                <div className="container">
                    <h2 className={styles.timelineTitle}>Línea del Tiempo de Tharvok</h2>
                    <Timeline events={timelineEvents} />
                </div>
            </Section>
        </main>
    );
};

export default Lore;