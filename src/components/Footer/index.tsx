import styles from "./styles.module.scss";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <span className={styles.content}>
        ✨ Made with much 💜 by Rian Oliveira ✨
      </span>
    </footer>
  );
};
