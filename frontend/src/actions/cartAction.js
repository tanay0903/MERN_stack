import axios from "axios";
import { FETCH_CART } from "../constants/cartConstant";

export const fetchCartItens  = (alert) => async (dispatch) => {
    try {
        const response = await axios.get("/api/v1/eats/cart/get-cart");

        dispatch({
            type: FETCH_CART,
            payload: response.data.data,
        });
    } catch (error) {
        console.error("Fetch cart error: ", error);
        if (alert) {
            alert.info("Cart is hungry");
        }
    }
};

// Add to cart
export const addItemCart = (foodItem) 
