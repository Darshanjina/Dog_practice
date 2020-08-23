import {GET_BREEDS} from './types';
import axios from 'axios';

export const getBreeds = () => (dispatch)=>{
    axios.get('https://dog.ceo/api/breeds/list/all')
    .then((res)=>{
        console.log(res);
        dispatch({
            type:GET_BREEDS,
            payload:res.data.message
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}