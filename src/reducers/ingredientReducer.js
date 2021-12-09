import _ from 'lodash';
import { CREATE_INGREDIENT, FETCH_INGREDIENT, FETCH_INGREDIENTS, UPDATE_INGREDIENT } from '../actions/types';

const ingredientReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_INGREDIENT:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_INGREDIENT:
            return { ...state, [action.payload.id]: action.payload };
        case UPDATE_INGREDIENT:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_INGREDIENTS:
            return _.mapKeys(action.payload, "id");
        default:
            return state;
    }
}

export default ingredientReducer;