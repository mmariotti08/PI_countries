import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, continent, image }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={name} />
      <h2 className={styles.title}>{name}</h2>
      <h3 className={styles.continent}>{continent}</h3>
    </div>
  );
};

export default Card;