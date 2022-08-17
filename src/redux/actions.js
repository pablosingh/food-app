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

export function loadCards(){
    return async function (dispatch){
        const all = [];
        dispatch( { type: SET_LOADING, payload: true } );
        try {
            await fetch( `https://api.thedogapi.com/v1/breeds` )
                .then( js => js.json() )
                .then( arrayJson => { 
                    console.log(arrayJson);
                    arrayJson.forEach( a => {
                        all.push({
                            id: a.id,
                            name: a.name,
                            height: a.height.metric,
                            weight: a.weight.metric,
                            bred_for: a.bred_for,
                            breed_group: a.breed_group,
                            life_span: a.life_span,
                            temperament: a.temperament,
                            origin: a.origin,
                            image: a.image.url
                        });
                    } );
                    dispatch( { type: LOAD_CARDS, payload: all } ) 
                    dispatch( { type: SET_LOADING, payload: false } )
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