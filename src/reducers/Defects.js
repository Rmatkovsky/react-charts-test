import {
    REQUEST_DEFFECTS,
    RECEIVE_DEFFECTS_COMPLETE,
    RECEIVE_DEFFECTS_ERROR,
} from 'actions/types/Defects';

const initState = {
    isFetching: false,
    isComplete: false,
    items: [],
};
const Defects = (state = initState, action) => {
    switch (action.type) {
        case REQUEST_DEFFECTS:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_DEFFECTS_COMPLETE:
            return {
                ...state,
                isFetching: false,
                isComplete: true,
                items: [...action.payload],
            };
        case RECEIVE_DEFFECTS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default Defects;
