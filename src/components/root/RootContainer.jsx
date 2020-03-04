/* eslint-disable react/prop-types */
import React from 'react';
import './sass/common.scss';

/**
 * RootContainer component - the one which holds the whole application.
 */
class RootContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default RootContainer;
