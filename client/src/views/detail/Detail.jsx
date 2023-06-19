import { useParams} from "react-router-dom";
import { getDetail } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const Detail = ()=>{
    const dispatch = useDispatch();
    const country = useSelector((state)=>state.countryDetail);
    const {id} = useParams();

    const activities = country.Activities?.map(e=>{
        return{
            name: e.name,
            difficulty: e.difficulty,
            duration: e.duration,
            season: e.season
        }
    })


    useEffect(()=>{
            dispatch(getDetail(id));
        },[dispatch]);

    return(
    <div>
       <div>
            <img src={country.image} alt="background"/>
            <h3>ID:{country.id}</h3>
            <h3>NAME:{country.name}</h3>
            <h3>CONTINENT:{country.continent}</h3>
            <h3>CAPITAL:{country.capital}</h3>
            <h3>SUBREGION:{country.subregion}</h3>
            <h3>AREA:{country.area}</h3>
            <h3>POPULATION:{country.population}</h3>           
       </div>
       <hr/>
       <div>
            {activities?.length > 0 ? activities?.map(act => {
                return(
                    <div>
                        <p>Name:{act.name}</p>
                        <p>Difficulty:{act.difficulty}</p>
                        <p>Duration:{act.duration}</p>
                        <p>Season:{act.season}</p>
                        <hr/>
                    </div>
                )
            }) : <h2>NO ACTIVITIES</h2>}
       </div>

    </div>
    );
}

export default Detail;