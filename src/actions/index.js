import { SIGN_IN, SIGN_OUT, CREATE_INGREDIENT, FETCH_INGREDIENT, FETCH_INGREDIENTS, UPDATE_INGREDIENT } from "./types";
import ingredients from "../api/ingredients";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createIngredient = (response) => (dispatch) => {
    dispatch({
        type: CREATE_INGREDIENT,
        payload: response
    });
}

export const fetchIngredient = (response) => (dispatch) => {
    dispatch({
        type: FETCH_INGREDIENT,
        payload: response
    });
}

export const fetchIngredients = () => async (dispatch) => {
    const response = await ingredients.get("/ingredients")
    dispatch({
        type: FETCH_INGREDIENTS,
        payload: response.data
    });
}

export const updateIngredient = (response) => (dispatch) => {
    dispatch({
        type: CREATE_INGREDIENT,
        payload: response
    });
}

