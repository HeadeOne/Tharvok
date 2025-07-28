import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}>
                <h1>El Reino Caído: Juicio de las Almas</h1>
                <p>Un servidor de Minecraft RPG Hardcore con historia propia</p>
                {/* <button className={styles.connectButton}>Conéctate ahora</button> */}
            </div>
        </section>
    );
};

export default Hero;