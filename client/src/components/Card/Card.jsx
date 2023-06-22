import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({id, image, name, continent, capital}) => {
  return (
  
  <Link to={`/countries/${id}`}
  >
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={name} />
      <h2 className={styles.title}>{name}</h2>
      <h3 className={styles.continent}>{continent}</h3>
      
    </div>
  </Link>
  );
};

export default Card;