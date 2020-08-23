import {GET_BREEDS} from '../action/types';

const initialState = {
    breeds : []
}

export default function (state = initialState, action){
    switch(action.type){
        case GET_BREEDS :
            let list = [];
            for (let i in action.payload){
                list.push(i);
            }
            return{
                ...state,
                breeds:list
            }
            default:
                return state
    }
}