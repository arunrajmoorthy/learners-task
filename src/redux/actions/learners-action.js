import { LIST_LEARNERS, DETAIL_LEARNERS } from '../types/types';
import axios from "axios"

export const listLearners = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            console.log(response, response.data);
            dispatch({
                type: LIST_LEARNERS,
                payload: response.data
            })
        })
        
    }
    
}

export const learnersDetailAction = (id) => (dispatch) => {
    dispatch({
        type: DETAIL_LEARNERS,
        payload: id
    })
}




