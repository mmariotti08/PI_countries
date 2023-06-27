import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { getByName, byOrderName, byOrderPopulation, byOrderContinent, byOrderActivities, getActivity} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";

const NavBar = () => {
  const act = useSelector((state) => state.activities); 
  console.log(act);
 
  
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getActivity());
  }, [dispatch]);

  const handleChange = (e) => {
    dispatch(getByName(e.target.value));
  };

  const hanleOrderActivity = (e) => {
    e.preventDefault();
    dispatch(byOrderActivities(e.target.value));
    setOrder(e.target.value);
  };

  const handleOrderName = (e) => {
    e.preventDefault();
    dispatch(byOrderName(e.target.value));
    setOrder(e.target.value);
  };

  const handleOrderPopulation = (e) => {
    e.preventDefault();
    dispatch(byOrderPopulation(e.target.value));
    setOrder(e.target.value);
  };

  const handleContinents = (e) => {
    e.preventDefault();
    dispatch(byOrderContinent(e.target.value));
    setOrder(e.target.value);
  };

  return (
    <div className={style.mainContainer}>
      <select className={style.select} onChange={handleContinents}>
        <option value="all">ALL CONTINENTS</option>
        <option value="Africa">AFRICA</option>
        <option value="Antartica">ANTARTICA</option>
        <option value="Asia">ASIA</option>
        <option value="Europe">EUROPE</option>
        <option value="North America">NORTH AMERICA</option>
        <option value="Oceania">OCEANIA</option>
        <option value="South America">SOUTH AMERICA</option>
      </select>

      <select className={style.select} onChange={handleOrderName}>
        <option value="Asc" key="Asc">
          A-Z
        </option>
        <option value="Des" key="Des">
          Z-A
        </option>
      </select>

      <select className={style.select} onChange={handleOrderPopulation}>
        <option value="max">MAX</option>
        <option value="min">MIN</option>
      </select>

      <select className={style.select} onChange={hanleOrderActivity}>
          <option value="all">All activities</option>
          {act.map((activity) => (
          <option key={activity.id} value={activity.name}>
           {activity.name}
          </option>
           ))}
      </select>

      <Link to="/home" className={style.link}>HOME</Link>
      <br/>
      <Link to="/create" className={style.link}>CREATE ACTIVITY</Link>
      <br/>
      <div className={style.searchContainer}>
        <input type="text" className={style.searchInput} placeholder="Search..." onChange={handleChange} />
        <AiOutlineSearch className={style.searchIcon} />
      </div>
    </div>
  );
}

export default NavBar;