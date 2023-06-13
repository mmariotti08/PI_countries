import { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import styles from "./CardsContainer.module.css";

const CardsContainer = () => {
  const [data, setData] = useState(null);
  const url = "http://localhost:3001/countries";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.cards}>
        {data ? (
          data.map((country) => (
            <Card
              key={country.id}
              image={country.image}
              name={country.name}
              continent={country.continent}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CardsContainer;