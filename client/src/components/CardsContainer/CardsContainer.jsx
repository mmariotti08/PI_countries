import { useState } from "react";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries);
  
 
  

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = countries.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(countries.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.cards}>
        {currentItems.length > 0 ? (
          currentItems.map((country) => (
            <Card
              key={country.id}
              id={country.id}
              image={country.image}
              name={country.name}
              continent={country.continent}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className={styles.currentPage}>{currentPage}</span>
        <button
          className={styles.paginationButton}
          onClick={nextPage}
          disabled={currentPage === Math.ceil(countries.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardsContainer;