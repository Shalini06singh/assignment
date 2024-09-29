import { GET_CATEGORY_SUCCESS } from "../constant/category.constant";

const initialState = {
    categories: []
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...action.payload]
            }

        default:
            return state
    }
}

export default categoryReducer;
