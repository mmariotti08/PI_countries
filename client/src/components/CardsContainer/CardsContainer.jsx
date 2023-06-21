import { useState } from "react";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";
import {useSelector} from "react-redux";

const CardsContainer = () => {  

const cant =10;
const countries = useSelector(state=>state.countries)

const[apiData, setApiData]=useState(countries);
const[items, setItems]=useState([...apiData].splice(0,cant))
const[currentPage, setCurrentPage] = useState(0);

const nextHandler = () =>{
  const total = apiData.length;
  const nextPage = currentPage + 1;
  const firstIndex = nextPage*cant;
  if(firstIndex===total)return;
  setItems([...apiData].splice(firstIndex, cant))
  setCurrentPage(nextPage)
}
const prevHandler=()=>{
  const prev = currentPage -1;

  if(prev < 0)return;
  const firstIndex = prev*cant
  setItems([...apiData].splice(firstIndex, cant))
  setCurrentPage(prev)
}




return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.cards}>
        {items ? (
          items.map((country) => {
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
      <button onClick={prevHandler}>prev</button>
      <button onClick={nextHandler}>next</button>
    </div>
  );
};

export default CardsContainer;