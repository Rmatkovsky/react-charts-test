import defectsService from 'services/DefectsService';

import {
    REQUEST_DEFFECTS,
    RECEIVE_DEFFECTS_COMPLETE,
    RECEIVE_DEFFECTS_ERROR,
} from 'actions/types/Defects';

const requestDefects = () => {
    return {
        type: REQUEST_DEFFECTS,
    };
};

const receiveDefectsComplete = (defects) => {
    return {
        type: RECEIVE_DEFFECTS_COMPLETE,
        payload: defects,
    };
};

const receiveDefectsError = (error) => {
    return {
        type: RECEIVE_DEFFECTS_ERROR,
        error: error.response ? error.response.data : error,
    };
};

const getDefects = () => {
    return async (dispatch) => {
        try {
            dispatch(requestDefects());

            const { data: defects } = await defectsService.getDefects();
            dispatch(receiveDefectsComplete(defects));
        } catch (err) {
            dispatch(receiveDefectsError(err));

            throw err;
        }
    };
};

export { getDefects };
