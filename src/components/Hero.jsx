import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles.heroSection}>
      <h1>Hello, welcome to devHorizen.</h1>
      <p>
        Where ideas take shape in code, and every keystroke is a step toward
        creating something extraordinary...
      </p>
    </section>
  );
}

export default Hero;
