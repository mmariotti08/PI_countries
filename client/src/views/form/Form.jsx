import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createActivity } from "../../redux/actions";

const Form = ()=>{
const dispatch = useDispatch();
const countries = useSelector(state => state.countries).sort((a,b)=>{
    if(a.name < b.name){
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    return 0;
})

const [input, setInput]=useState({
    name:'',
    difficulty:'',
    duration:'',
    season:'',
    countriesId: []
})

const handleName = (e)=>{
    setInput({
        ...input,
        name: e.target.value
    })
};
const handleSeson = (e)=>{
    setInput({
        ...input,
        season: e.target.value
    })
};
const handleDiff =(e)=>{
    setInput({
        ...input,
        difficulty: e.target.value
    })
};
const handleDuration = (e)=>{
    setInput({
        ...input,
        duration: e.target.value
    })
};
const handleCountry = (id)=>{
    setInput({
        ...input,
        countriesId: [...input.countriesId, id.target.value]
    })
};

const deleteCountry = (e)=>{
    setInput({
        ...input,
        countriesId: input.countriesId.filter(c=>c !== e)
    })
};
const handleSumbit = (e)=>{
    e.preventDefault();
    dispatch(createActivity(input))
}





const season = ['Winter', 'Spring', 'Autumn', 'Summer'];
const difficulty = [1, 2, 3, 4, 5];
const duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    return(
        <div>
            <h1>CREATE ACTIVITY</h1>
            <form onSubmit={handleSumbit}>
                <div>
                    <label>ACTIVITY</label>
                    <input required type="text" value={input.name} name="name"  onChange={handleName} placeholder="Activity name..."/>
                </div>
                <div>
                    <label>SEASON</label>
                    <select onChange={handleSeson} required>
                        <option value=''>Select Season</option>
                        {season.map(s=>(
                            <option value={s} name='season'>{s}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>DIFFICULTY</label>
                    <select onChange={handleDiff} required>
                        <option value=''>Select Difficulty</option>
                        {difficulty.map(d=>(
                            <option value={d} name="difficulty">{d}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>DURATION</label>
                    <select onChange={handleDuration} required>
                        <option value=''>Select Duration</option>
                        {duration.map(d=>(
                            <option value={d} name="duration">{d}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>COUNTRY</label>
                    <select onChange={handleCountry}>
                        <option value=''>Select Country</option>
                        {countries.map(c=>(
                            <option value={c.id}name="countries">{c.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                     <ul>
                         <li >{input.countriesId.map(i =>
                             <div>
                                            {i}
                                            <button onClick={()=>deleteCountry(i)} type="button">X</button>
                             </div>)}
                        </li>
                     </ul>
                </div>
                <button type="sumbit">ADD ACTIVITY</button>
            </form>
        </div>
    )
}

export default Form;