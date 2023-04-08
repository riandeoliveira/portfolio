import styles from "./styles.module.scss";

export const Author = (): JSX.Element => {
  return (
    <div className={styles.author_container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Rian Dias de Oliveira</h1>
        <hr className={styles.bar} />
      </div>
      <div className={styles.subtitle_container}>
        <h2 className={styles.subtitle}>Desenvolvedor Web</h2>
        <hr className={styles.bar} />
      </div>
    </div>
  );
};
