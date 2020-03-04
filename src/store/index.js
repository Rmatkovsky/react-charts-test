import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory as createHistory } from 'history';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducers from 'reducers';

const history = createHistory();

const middleware = [
    thunkMiddleware,
    routerMiddleware(history),
];

const composeEnhancers = composeWithDevTools({
    maxAge: 500,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

export { store as default, history };
