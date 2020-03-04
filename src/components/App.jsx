import React from 'react';
import routes from 'app-routes';
import { history } from 'store';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import RootContainer from 'components/root/RootContainer';

/**
 * App container - session aware container to hold rules.
 */
function App() {
    return (
        <React.Fragment>
            <RootContainer>
                <ConnectedRouter history={history}>
                    <Switch>
                        {Object.values(routes).map(({ path, component: Component }) => {
                            return (
                                <Route key={path} exact path={path} component={Component} />
                            );
                        })}
                    </Switch>
                </ConnectedRouter>
            </RootContainer>
        </React.Fragment>
    );
}

export default App;
