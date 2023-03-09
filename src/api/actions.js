import { GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAILURE, GET_USER_DETAILS_REQUEST } from "./actionTypes";
import axios from "axios";

export const getUserDetailsRequest = (payload) => ({
    type: GET_USER_DETAILS_REQUEST,
    payload
})

export const getUserDetailsSuccess = (payload) => ({
    type: GET_USER_DETAILS_SUCCESS,
    payload
})

export const getUserDetailsFailure = (payload) => ({
    type: GET_USER_DETAILS_FAILURE,
    payload
})

export const getUserDetails = () => dispatch => {
    dispatch(getUserDetailsRequest())
    return axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
        .then(res => {
            if (res.status === 200) {
                return dispatch(getUserDetailsSuccess({ adminData: res.data }))
            }
            else {
                return dispatch(getUserDetailsFailure({ message: "Error" }))
            }
        })
}