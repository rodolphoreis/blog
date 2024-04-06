// css
import styles from "./Home.module.css";

import { useNavigate, Link } from "react-router-dom";

// react
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
  const [posts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
    </div>
  );
};

export default Home;
