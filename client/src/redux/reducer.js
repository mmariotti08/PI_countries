import { GET_COUNTRIES, GET_DETAIL, GET_BY_NAME, BY_ORDER_NAME, BY_ORDER_POPULATION, BY_ORDER_CONTINENT, GET_ACTVITY, BY_ORDER_ACTIVITIES} from "./actions";

const initialState = {
    countries:[],
    countryDetail:[],
    allContinents:[],
    allActivities:[],
    activities:[]
};


const rootReducer=(state= initialState, action)=>{
    switch(action.type){

        case BY_ORDER_ACTIVITIES:
            const allActivities = state.allActivities;
            const activitiesF = action.payload === 'all' ? allActivities.filter(a => a.activities.length > 0) :
            allActivities.filter(a => a.activities.find((e)=>e.name.toLowerCase() === action.payload))
            
            return{
                ...state,
                countries: activitiesF
            }
            
        case GET_ACTVITY:
            return{
                ...state,
                allActivities: action.payload
            }

        case BY_ORDER_CONTINENT:
            const allContinents = state.allContinents;
            const continent = action.payload === 'all' ? allContinents :
                allContinents.filter(c=> c.continent === action.payload)
            return {
                ...state, 
                countries: continent
            }

        case BY_ORDER_POPULATION:
            const copyCountries=[...state.countries]
            const orderPopulation = action.payload === 'min' ?
            copyCountries.sort(function(a,b){
                if(a.population > b.population){
                    return 1;
                }
                if(a.population < b.population){
                    return -1;
                }
                return 0;
            }):
            copyCountries.sort(function(a,b){
                if(a.population > b.population){
                    return -1;
                }
                if(a.population < b.population){
                    return 1;
                }
                return 0;
            })
            
            return{...state, countries: orderPopulation}

            

        case BY_ORDER_NAME:
            const copyCountriesP=[...state.countries]
            const orderName = action.payload === 'Asc' ?
            copyCountriesP.sort(function(a,b){
                if(a.name > b.name){
                    return 1;
                }
                if(a.name < b.name){
                    return -1;
                }
                return 0;
            }):
            copyCountriesP.sort(function(a,b){
                if(a.name > b.name){
                    return -1;
                }
                if(a.name < b.name){
                    return 1;
                }
                return 0;
            })
            
            return{...state, countries: orderName}

        case GET_BY_NAME:
            return{...state, countries: action.payload}
        case GET_DETAIL:
            return{...state, countryDetail: action.payload}
        case GET_COUNTRIES:
            return{...state, countries: action.payload, allContinents: action.payload, allActivities: action.payload, activities: action.payload}
        default:
            return{...state}
    }
};


export default rootReducer