// css
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.footer_h3}>
        Escreva o que quiser sobre programação!
      </h3>
      <p className={styles.footer_p}>DEV Blog - Rodolpho Reis &copy; 2024</p>
    </footer>
  );
};

export default Footer;
