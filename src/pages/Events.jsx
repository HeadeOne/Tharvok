import Section from '../components/Section/Section';
import EventCard from '../components/EventsCard/EventsCard';
import styles from './Events.module.css';

import coliseo from '../assets/images/Coliseo.webp';
import ghosthunt from '../assets/images/ghosthunt.png';
import raid from '../assets/images/raid.webp';
import dungeon from '../assets/images/event-dungeon.png';
import opening from '../assets/images/event-opening.jpg';
import relics from '../assets/images/event-relics.png';

const Events = () => {
    const upcomingEvents = [
        {
            title: "Apertura del Portal",
            date: "1 de Septiembre, 20:00 GMT-5",
            description: "Ceremonia de inicio del servidor. Los primeros en ingresar recibirán recompensas únicas y el título de Pionero.",
            image: opening
        },
        {
            title: "Exploración de las Catacumbas",
            date: "3 de Septiembre, 18:00 GMT-5",
            description: "Evento PvE cooperativo. Forma un equipo y supera los peligros de las Catacumbas de Orduin para obtener ítems legendarios.",
            image: dungeon
        },
        {
            title: "Torneo de Gladiadores",
            date: "5 de Septiembre, 21:00 GMT-5",
            description: "Demuestra tu poder en el Coliseo de Tharvok. PvP por rondas, solo uno quedará en pie.",
            image: coliseo
        },
        {
            title: "Cacería de Almas Perdidas",
            date: "7 de Septiembre, 19:00 GMT-5",
            description: "Busca y purga espectros errantes en las ruinas de Veldranor. Aventura para jugadores valientes.",
            image: ghosthunt
        },
        {
            title: "Juicio del Rey Caído",
            date: "10 de Septiembre, 20:00 GMT-5",
            description: "Raid contra el espíritu del último rey de Tharvok. Coordinación y estrategia serán clave.",
            image: raid
        },
        {
            title: "Rastro de las Reliquias",
            date: "12 de Septiembre, 17:00 GMT-5",
            description: "Evento de exploración y búsqueda. Encuentra piezas de las antiguas reliquias perdidas en todo el mapa.",
            image: relics
        }
    ];

    return (
        <main>
            <Section className={styles.heroSection}>
                <div className="container">
                    <h1>Eventos del Reino</h1>
                    <p className={styles.subtitle}>
                        Participa en nuestros desafíos especiales y escribe tu nombre en la historia de Tharvok
                    </p>
                </div>
            </Section>

            <Section className={styles.sectionDark}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Eventos de Lanzamiento</h2>
                    <div className={styles.eventsGrid}>
                        {upcomingEvents.map((event, index) => (
                            <EventCard
                                key={index}
                                title={event.title}
                                date={event.date}
                                description={event.description}
                                image={event.image}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            <Section className={styles.sectionLight}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Eventos Recurrentes</h2>
                    <div className={styles.recurrentEvents}>
                        <div className={styles.recurrentEvent}>
                            <h3>Lunes de Mercado</h3>
                            <p>Los mercaderes del reino abren sus tiendas con descuentos, objetos exóticos y reliquias antiguas.</p>
                        </div>
                        <div className={styles.recurrentEvent}>
                            <h3>Juicios de los Viernes</h3>
                            <p>Los jugadores con más muertes deberán enfrentarse a desafíos para redimirse ante los Custodios.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
};

export default Events;