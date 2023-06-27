import axios from "axios";
const  URL = "http://localhost:3001/"
const COUNTRIES ="countries"
const ACTIVITIES = "activities"

export const GET_ACTVITY = "GET_ACTIVITY"
export const GET_COUNTRIES = "GET_COUNTRIES ";
export const GET_DETAIL = "GET_DETAIL"
export const GET_BY_NAME = "GET_BY_NAME"
export const BY_ORDER_NAME="BY_NAME"
export const BY_ORDER_POPULATION="BY_POPULATION"
export const BY_ORDER_CONTINENT="BY_CONTINENT"
export const BY_ORDER_ACTIVITIES="BY_ORDER_ACTIVITIES"

export const getActivity =()=>{
     return async function(dispatch){
        const actData = await axios.get(`http://localhost:3001/activities`);
         const act = actData.data
        console.log(act);

         
         dispatch({
           type: GET_ACTVITY,
           payload: act
        })
     }};
    
export const getCountries = () =>{
   return async function(dispatch){
     
      const dbData = await axios.get(`${URL}${COUNTRIES}`);
      const countries = dbData.data;
    
      
        dispatch({type: GET_COUNTRIES, payload: countries});
    };
 };

 export const getDetail =(id)=>{
    return async function(dispatch){
       
       const {data} = await axios.get(`${URL}${COUNTRIES}/${id}`);
       
       dispatch({type: GET_DETAIL, payload: data});
       
       
      };
   };
   
   export const getByName=(name)=>{
      return async function(dispatch){
         const{data} = await axios.get(`${URL}${COUNTRIES}?name=${name}`) 
         
         dispatch({type:GET_BY_NAME, payload: data})
      }
   };
   
   export const byOrderName=(payload)=>{
      
      return{
      type:BY_ORDER_NAME,
      payload: payload
      
   }
 };

 export const byOrderPopulation=(payload)=>{
 
   return{
      type:BY_ORDER_POPULATION,
      payload: payload
   }
 };

 export const byOrderContinent=(payload)=>{

   return{
      type:BY_ORDER_CONTINENT,
      payload:payload
   }

 };

 export const byOrderActivities = (activityName) => {
   return {
     type: BY_ORDER_ACTIVITIES,
     payload: activityName,
   };
 };

 export const createActivity=(payload)=>{
   return async function(){
      const act = await axios.post(`http://localhost:3001/activities`, payload)
  
      return act;
   }
 }


