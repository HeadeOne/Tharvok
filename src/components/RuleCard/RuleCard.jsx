import styles from './RuleCard.module.css';

const RuleCard = ({ number, title, description, icon, color, minecraftStyle }) => {
    return (
        <div className={`${styles.card} ${minecraftStyle ? styles.minecraftCard : ''}`}
            style={{ borderColor: color }}>
            <div className={styles.cardHeader}>
                <span className={styles.cardNumber} style={{ color }}>#{number}</span>
                <span className={styles.cardIcon}>{icon}</span>
            </div>
            <div className={styles.cardContent}>
                <h3 className={minecraftStyle ? styles.minecraftTitle : ''}>{title}</h3>
                <p className={minecraftStyle ? styles.minecraftText : ''}>{description}</p>
            </div>
        </div>
    );
};

export default RuleCard;