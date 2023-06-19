import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";
import {useSelector} from "react-redux";

const CardsContainer = () => {
  
 const countries = useSelector(state=>state.countries)
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.cards}>
        {countries ? (
          countries.map((country) => {
           return <Card
              id ={country.id}
              image={country.image}
              name={country.name}
              continent={country.continent}
            />
        })
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
      </div>
    </div>
  );
};

export default CardsContainer;