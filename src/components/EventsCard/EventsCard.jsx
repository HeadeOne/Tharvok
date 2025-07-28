import { useState } from 'react';
import styles from './EventCard.module.css';

const EventCard = ({ title, date, description, image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.eventCard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={styles.imageContainer}>
                <img
                    src={image}
                    alt={title}
                    className={`${styles.eventImage} ${isHovered ? styles.zoomed : ''}`}
                />
                <div className={styles.eventBadge}>Evento</div>
                <div className={`${styles.eventDate} ${isHovered ? styles.dateHover : ''}`}>
                    {date}
                </div>
            </div>

            <div className={styles.eventContent}>
                <h3 className={styles.eventTitle}>{title}</h3>
                <p className={styles.eventDescription}>{description}</p>

                <div className={styles.eventActions}>
                    <button className={styles.registerButton}>
                        <span className={styles.buttonText}>Inscribirse</span>
                        <span className={styles.buttonIcon}>📝</span>
                    </button>

                    <button className={styles.reminderButton}>
                        <span className={styles.buttonText}>Recordar</span>
                        <span className={styles.buttonIcon}>⏰</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;