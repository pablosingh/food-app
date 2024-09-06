import { foods } from './foods';

export const LOAD_CARDS = 'LOAD_CARDS';
export const SET_LOADING = 'SET_LOADING';

export const ADD_DINNERS = 'ADD_DINNERS';
export const REMOVE_DINNER = 'REMOVE_DINNER';
export const SET_ACTUAL_DINNER = 'SET_ACTUAL_DINNER';
export const ADD_FOOD_DINNER = 'ADD_FOOD_DINNER';
export const CLEAR_STATE = 'CLEAR_STATE';
export const SET_TABLE = 'SET_TABLE';


export function loadCards(){
    return async function (dispatch){
        const all = [];
        const promesas = [];
        const subPromesas = [];
        const category = `Side`;
        try {
            await fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}` )
                .then( js => js.json() )
                .then( arrayJson => {
                    foods.forEach(element => {
                        promesas.push( fetch(
                            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${element}`
                            ) )
                    })
                })
                .then( () => { 
                    Promise.all(promesas)
                        .then( values => values.forEach( v => subPromesas.push( v.json() ) ) )
                        .then( () => {
                            Promise.all(subPromesas)
                                .then( foods => {
                                    foods.forEach( f => {
                                        all.push({
                                            idMeal: f.meals[0].idMeal,
                                            strArea: f.meals[0].strArea,
                                            strCategory: f.meals[0].strCategory,
                                            strInstructions: f.meals[0].strInstructions,
                                            strMeal: f.meals[0].strMeal,
                                            strMealThumb: f.meals[0].strMealThumb,
                                            strSource: f.meals[0].strSource,
                                            strYoutube: f.meals[0].strYoutube,
                                        });
                                    });
                                })
                                .then( () => dispatch( { type: LOAD_CARDS, payload: all } ) )
                                // .then( () => console.log(all) )
                                .catch( err => console.error(err) );    
                        })
                        .catch( err => console.error(err) );
                })
                .catch( err => console.error(err) );
        } catch (e) {
            console.error(e);
        }
    };
};

export const setLoading = () => ({ type: SET_LOADING, payload: null});

export const addDinner = (dinner) => ({ type: ADD_DINNERS, payload: dinner });
export const removeDinner = (id) => ({ type: REMOVE_DINNER, payload: id });

export const setActualDinner = (id) => ({ type: SET_ACTUAL_DINNER, payload: id });
export const addFoodDinner = (food) => ({ type: ADD_FOOD_DINNER, payload: food });
export const clearState = () => ({ type: CLEAR_STATE, payload: null });
export const setTable = (number) => ({ type: SET_TABLE, payload: number });