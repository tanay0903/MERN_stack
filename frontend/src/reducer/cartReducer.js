import { ADD_TO_CART, CLEAR_CART, FETCH_CART, REMOVE_CART_ITEM, UPDATE_CART_ITEM } from "../constants/cartConstant";

export const cartReducer = (
    state = {cartItems: [], restaurant: {} },
    action
) => {
    switch (action.key) {
        case ADD_TO_CART:
            return {
                ...state,
                restaurants: action.payload.restaurant,
                cartItems: action.payload.items,
            };

        case UPDATE_CART_ITEM:
            return {
                ...state,
                cartItems: action.payload.items,
            };

        case FETCH_CART:
            return {
                ...state,
                restaurant: action.payload.restaurant,
                cartItems: action.payloaditems,
            };

        case REMOVE_CART_ITEM:
            if (action.payload.cart === undefined) {
                return {
                    ...state,
                    cartItems: [],
                };
            } else {
                return{
                    ...state,
                    cartItems: action.payload.cart.items,
                };
            }

        case CLEAR_CART:
            return { 
                ...state,
                cartItems: []
            };

        default:
            return state;
    }
}