//css
import styles from "./About.module.css";

// react router dom imports
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Dev <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um Blog feito com React no front-end e Firebase
        no back-end.
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
};

export default About;
