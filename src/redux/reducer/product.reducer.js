import { GET_PRODUCT_START, GET_PRODUCT_SUCCESS } from "../constant/product.constant";

const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...action.payload]
            }

        default:
            return state
    }
}

export default productReducer;
