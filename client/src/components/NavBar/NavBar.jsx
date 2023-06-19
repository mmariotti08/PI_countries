import { Link } from "react-router-dom";
import  style from "./NavBar.module.css"
import {AiOutlineSearch} from "react-icons/ai"
import { getByName, byOrderName, byOrderPopulation, byOrderContinent, byOrderActivities } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState} from "react";
import React from "react";


const NavBar = ()=>{
    const activity = useSelector((state )=> state.allActivites)
    
   
    const dispatch = useDispatch();
    const[order, setOrder] = useState("");

    useEffect(()=>{
        dispatch(byOrderActivities())
    },[dispatch])

    const handleChange =(e)=>{
        dispatch(getByName(e.target.value))
    }
     const hanleOrderActivity = (e)=>{
        e.preventDefault();
        dispatch(byOrderActivities(e.target.value))
        setOrder(e.target.value)
     }
        
     const handleOrderName = (e)=>{
            e.preventDefault();
            dispatch(byOrderName(e.target.value))
            setOrder(e.target.value)
             
    }

    const handleOrderPopulation = (e)=>{
         e.preventDefault();
         dispatch(byOrderPopulation(e.target.value))
         setOrder(e.target.value)
        
}
    const handleContinents = (e)=>{
        e.preventDefault();
        dispatch(byOrderContinent(e.target.value))
        setOrder(e.target.value)
}
  

    return(
        <div className={style.mainContainer}>

            <select onChange={handleContinents}>
                <option value="all">ALL CONTINENTS</option>
                <option value="Africa">AFRICA</option>
                <option value="Antartica">ANTARTICA</option>
                <option value="Asia">ASIA</option>
                <option value="Europe">EUROPE</option>
                <option value="North America">NORTH AMERICA</option>
                <option value="Oceania">OCEANIA</option>
                <option value="South America">SOUTH AMERICA</option>

            </select>

            <select onChange={handleOrderName}>
                <option value="Asc" key="Asc">A-Z</option>
                <option value="Des" key="Des">Z-A</option>
            </select>
            <select onChange={handleOrderPopulation} >
                <option value="max">MAX </option>
                <option value="min">MIN </option>
            </select>

            <select onChange={hanleOrderActivity}>
            <option value='all'>All activities</option>
            {/* {activity.map(e => (
                            <option value={e} key={e}>{e}</option>
                        ))} */}
           
                       
            </select>
            <Link to='/home'>HOME</Link>
            <br/>
            <Link to='/create'>CREATE ACTIVITY</Link>
            <br/>
            <div> 
                <input type="text" placeholder="Search..." onChange={handleChange}/>
                <AiOutlineSearch/>
            </div>
        </div>
    )
}

export default NavBar;