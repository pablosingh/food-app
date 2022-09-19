import { 
    LOAD_CARDS,
    // ////////////////////////////////////////
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