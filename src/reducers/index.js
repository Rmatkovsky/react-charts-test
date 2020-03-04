import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import defects from './Defects';

const appReducer = combineReducers({
    router,
    defects,
});

export default appReducer;
