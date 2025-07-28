import styles from './Timeline.module.css';

const Timeline = ({ events }) => {
    return (
        <div className={styles.timelineContainer}>
            {events.map((event, index) => (
                <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineContent}>
                        <div className={styles.timelineYear}>{event.year}</div>
                        <h3 className={styles.timelineEventTitle}>{event.title}</h3>
                        <p className={styles.timelineDescription}>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;