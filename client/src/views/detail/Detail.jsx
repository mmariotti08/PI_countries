import React from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.countryDetail);
  const { id } = useParams();

  const activities = country.Activities?.map((e) => {
    return {
      name: e.name,
      difficulty: e.difficulty,
      duration: e.duration,
      season: e.season,
    };
  });

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={country.image} alt="background" />
        <h3>ID: {country.id}</h3>
        <h3>NAME: {country.name}</h3>
        <h3>CONTINENT: {country.continent}</h3>
        <h3>CAPITAL: {country.capital}</h3>
        <h3>SUBREGION: {country.subregion}</h3>
        <h3>AREA: {country.area}</h3>
        <h3>POPULATION: {country.population}</h3>
      </div>
      <hr className={styles["hr-divider"]} />
      <div className={styles["activities"]}>
        {activities?.length > 0 ? (
          activities?.map((act) => {
            return (
              <div className={styles.card}>
                <p>Name: {act.name}</p>
                <p>Difficulty: {act.difficulty}</p>
                <p>Duration: {act.duration}</p>
                <p>Season: {act.season}</p>
              </div>
            );
          })
        ) : (
          <h2 className={styles["no-activities"]}>NO ACTIVITIES</h2>
        )}
      </div>
    </div>
  );
};

export default Detail;