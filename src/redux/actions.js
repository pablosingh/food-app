export const LOAD_CARDS = 'LOAD_CARDS';
export const SET_ACTUAL_PAGE_CARDS = 'SET_ACTUAL_PAGE_CARDS';
export const LOAD_PAGES_CARDS = 'LOAD_PAGES_CARDS';
export const LOAD_SUB_CARDS = 'LOAD_SUB_CARDS';
export const LOAD_SUB_PAGES_CARDS = 'LOAD_SUB_PAGES_CARDS';
export const ORDER_BY_NAME_ASC = 'ORDER_BY_NAME_ASC';
export const ORDER_BY_NAME_DES = 'ORDER_BY_NAME_DES';
export const ORDER_BY_WEIGHT_ASC = 'ORDER_BY_WEIGHT_ASC';
export const ORDER_BY_WEIGHT_DES = 'ORDER_BY_WEIGHT_DES';
export const LOAD_TYPES = 'LOAD_TYPES';
export const SET_DOG = 'SET_DOG';
export const SEARCH_BY_ID = 'SEARCH_BY_ID';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
export const FILTERS_BY_TYPES = 'FILTERS_BY_TYPES';
export const ADD_TO_CARDS = 'ADD_TO_CARDS';
export const ERROR_POKEMON = { name: 'ERROR - NOMBRE DUPLICADO' };
export const EDIT = 'EDIT';
export const DELETE_POKEMON = 'DELETE_POKEMON';
export const SET_LOADING = 'SET_LOADING';
// /////////////////////////////////////////////
export const ADD_DINNERS = 'ADD_DINNERS';
export const REMOVE_DINNER = 'REMOVE_DINNER';
export const SET_ACTUAL_DINNER = 'SET_ACTUAL_DINNER';
export const ADD_FOOD_DINNER = 'ADD_FOOD_DINNER';


export function loadCards(){
    return async function (dispatch){
        const all = [];
        const promesas = [];
        const subPromesas = [];
        const category = `beef`;
        // console.log('load cards');
        // dispatch( { type: SET_LOADING, payload: true } );
        try {
            await fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}` )
                .then( js => js.json() )
                .then( arrayJson => {
                    arrayJson.meals.forEach(element => {
                        promesas.push( fetch(
                            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${element.idMeal}`
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
                    // dispatch( { type: LOAD_CARDS, payload: all } ) 
                    // dispatch( { type: SET_LOADING, payload: false } )
                })
                .catch( err => console.error(err) );
        } catch (e) {
            console.error(e);
        }
    };
};


export function searchDog(idOrName){
    if(isNaN(Number(idOrName)))
        return {
            type: SEARCH_BY_NAME,
            payload: idOrName
        };
    else
        return {    
            type: SEARCH_BY_ID,
            payload: idOrName
        };
};

export const setActualPageCards = (page) => ({ type: SET_ACTUAL_PAGE_CARDS, payload: page });

export const loadPagesCards = () => ({ type: LOAD_PAGES_CARDS, payload: null });

export const loadSubCards = () => ({ type: LOAD_SUB_CARDS, payload: null });

export const loadSubPagesCards = () => ({ type: LOAD_SUB_PAGES_CARDS, payload: null });

// ***********************************************************************************
export const orderByNameAsc = () => ({ type: ORDER_BY_NAME_ASC, payload: null });
export const orderByNameDes = () => ({ type: ORDER_BY_NAME_DES, payload: null });
export const orderByWeightAsc = () => ({ type: ORDER_BY_WEIGHT_ASC, payload: null });
export const orderByWeightDes = () => ({ type: ORDER_BY_WEIGHT_DES, payload: null });
// ***********************************************************************************

// export const filtersByTypes = (types) => ({ type: FILTERS_BY_TYPES, payload: types });

export const addToCards = (dog) => ({ type: ADD_TO_CARDS, payload: dog });

// export const edit = (pokemon) => ({ type: EDIT, payload: pokemon }); 
// export const deletePokemon = (idApi) => ({ type: DELETE_POKEMON, payload: idApi });
export const setLoading = () => ({ type: SET_LOADING, payload: null});

export const addDinner = (dinner) => ({ type: ADD_DINNERS, payload: dinner });
export const removeDinner = (id) => ({ type: REMOVE_DINNER, payload: id });

export const setActualDinner = (id) => ({ type: SET_ACTUAL_DINNER, payload: id });
export const addFoodDinner = (food) => ({ type: ADD_FOOD_DINNER, payload: food });