import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer';
import ingredientReducer from './ingredientReducer'

export default combineReducers({
    auth: authReducer,
    ingredients: ingredientReducer,
    form: formReducer
});
