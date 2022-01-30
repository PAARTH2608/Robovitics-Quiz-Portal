import {AuthTypes} from '../types';

const FilterReducer = (state = " ", action) => {
    switch (action.type){
        case AuthTypes.SEARCH:
            return {
                term : action.payload.text
            }
        default:
            return state;
    }
};

export default FilterReducer;
