import { GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAILURE, GET_USER_DETAILS_REQUEST } from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    adminData: []
}

const reducer = (state = initState, { type, payload }) => {
    switch(type){
        case GET_USER_DETAILS_FAILURE:
            return{
                ...state,
                isError: true
            }
        case GET_USER_DETAILS_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case GET_USER_DETAILS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isError: false,
                adminData: payload
            }
        default:
            return state;
    }
}

export default reducer;
