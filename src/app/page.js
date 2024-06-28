import Image from "next/image";
import styles from "./page.module.css";
import hero from '/public/hero.png'
import Button from "./components/Button/Button";
export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.description}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
      {/* <button className={styles.btn}>
        see our works
      </button> */}
      <Button text={'See Our Work'} url={'/portfolio'}/>
      </div>
      <div className={styles.item}>
        <Image src={hero} alt="hero" className={styles.img} />
      </div>
    </main>
  );
}
