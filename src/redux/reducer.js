import { 
    LOAD_CARDS,
    // LOAD_TYPES,
    LOAD_SUB_CARDS,
    SET_ACTUAL_PAGE_CARDS,
    LOAD_PAGES_CARDS,
    LOAD_SUB_PAGES_CARDS,
    ORDER_BY_NAME_ASC,
    ORDER_BY_NAME_DES,
    ORDER_BY_WEIGHT_ASC,
    ORDER_BY_WEIGHT_DES,
    SET_DOG,
    FILTERS_BY_TYPES,
    ADD_TO_CARDS,
    SEARCH_BY_NAME,
    SEARCH_BY_ID,
    EDIT,
    DELETE_POKEMON,
    SET_LOADING,
    ADD_DINNERS,
    REMOVE_DINNER,
    SET_ACTUAL_DINNER,
    ADD_FOOD_DINNER,
    CLEAR_STATE,
    SET_TABLE
} from './actions';

import { order } from './functionsFilters';
const initialState = {
    cards: [],
    subCards: [],
    actualPageCards: 0,
    pagesCards: [],
    subPagesCards: [],
    maxPageCards: 0,
    types: [],
    // ******************************
    amountForPage: 12,
    dog: {},
    loading: true,
    // ******************************
    dinners: [],
    id: 1,
    actualDinner: 0,
    table: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CARDS:
            // console.log("load");
            return {
                ...state,
                cards: [...action.payload]
            };
        case SET_ACTUAL_PAGE_CARDS:
            let setPages = [];
            if ( action.payload > 2 && action.payload<=state.maxPageCards )
                for ( let i=action.payload-2; i<=action.payload+2 && i<=state.maxPageCards; i++ )
                    setPages.push(i);
            else
                setPages = state.pagesCards.slice(0,5);
            return {
                ...state,
                subPagesCards: [...setPages],
                actualPageCards: action.payload
            };
        case LOAD_PAGES_CARDS:
            let pages = [];
            let nroPagesCards = 0;
            nroPagesCards = state.cards.length / state.amountForPage;
            if (nroPagesCards%1 != 0) 
                ++nroPagesCards;
            nroPagesCards = Math.trunc(nroPagesCards);
            for( let i=0; i<nroPagesCards; i++)
                pages.push(i);
            return {
                ...state,
                maxPageCards: nroPagesCards,
                pagesCards: [...pages]
            };
        case LOAD_SUB_CARDS:
            let subCards = [];
            let index = state.actualPageCards * state.amountForPage;
            subCards = state.cards.slice( 
                index,
                index + state.amountForPage
                );
            return {
                ...state,
                subCards
            };
        // ****************************************************
        case ORDER_BY_NAME_ASC: 
            return {
                ...state,
                cards: [...order(state.cards, 'name', 'asc')]
            };
        case ORDER_BY_NAME_DES: 
            return {
                ...state,
                cards: [...order(state.cards, 'name', 'des')]
            };
        case ORDER_BY_WEIGHT_ASC: 
            return {
                ...state,
                cards: [...order(state.cards, 'weight', 'asc')]
            };
        case ORDER_BY_WEIGHT_DES: 
            return {
                ...state,
                cards: [...order(state.cards, 'weight', 'des')]
            };
        case SET_DOG:
            return {
                ...state,
                dog: action.payload
            };
        case SEARCH_BY_NAME:
            console.log(action.payload);
            let dog;
            dog = state.cards.find( p => p.name.toLowerCase().includes(action.payload.toLowerCase()) );
            console.log(dog);
            return {    
                ...state, 
                dog
            };
        case SEARCH_BY_ID:
            let dog2 = state.cards.find( p => p.id == action.payload);
            return {
                ...state, 
                dog: dog2
            };
        case FILTERS_BY_TYPES:
            let selectedTypes = [...action.payload];
            console.log(selectedTypes);
            let filterByTypes =  state.cards.filter( c => {
                console.log(c);
                for(let i=0; i<selectedTypes.length; i++){
                    if ( !c.types.includes( selectedTypes[i] ) )
                        return false;
                }
                return true;
            } );
            console.log(state.cards);
            console.log(filterByTypes);
            return {
                ...state,
                cards: [...filterByTypes]
            };
        case ADD_TO_CARDS:
            state.cards.push(action.payload);
            return {
                ...state,
            };
        case EDIT:
            let indexToEdit = state.cards.findIndex( p => p.idApi == action.payload.idApi);
            state.cards[indexToEdit] = action.payload;
            return {
                ...state,
                cards: [...state.cards]
            };
        case DELETE_POKEMON:
            // console.log("reducer deleted");
            let otherCards = state.cards.filter( c => c.idApi != action.payload );
            // console.log(otherCards);
            return {
                ...state,
                cards: otherCards
            };
        case SET_LOADING:
            let loading;
            console.log(!state.loading);
            if ( action.payload === null ) 
                loading = !state.loading
            else 
                loading = action.payload;
            return {
                ...state,
                loading
            };
            // ///////////////////////////////////
        case ADD_DINNERS:
            const d = {
                name: action.payload,
                id: state.id,
                foods: []
            };
            state.dinners.push(d);
            return {
                ...state,
                id: state.id +1,
            };
        case REMOVE_DINNER: 
            return{
                ...state,
                dinners: state.dinners.filter( d => d.id != action.payload )
            };
        case SET_ACTUAL_DINNER:
            return {
                ...state,
                actualDinner: action.payload
            };
        case ADD_FOOD_DINNER:
            let person = state.dinners.find( d => d.id == state.actualDinner );
            person.foods.push(action.payload);
            console.log(action.payload);
            return {
                ...state,
                dinners: state.dinners
            };
        case CLEAR_STATE:
            // console.log('clearState');
            return {
                ...initialState,
                dinners: []
            };
        case SET_TABLE:
            return {
                ...state,
                table: action.payload
            };
        default: return {...state};
    
    }
};